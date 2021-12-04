import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { strictEqual } from 'assert';

export const getTodoAsync:any = createAsyncThunk(
    'todos/getTodosAsync',
     async()=>{
     const response = await fetch('http://localhost:7000/todos');
     if (response.ok){
         const todos = await response.json();
         return{todos} 
     }   
});

const todoSlice = createSlice({
    name : 'todos',
    initialState:[
        { id: 1, title: 'todo6', completed: false, expireDate:1638554916470 },
        { id: 2, title: 'todo7', completed: false,  expireDate:1638554916470 },
		{ id: 3, title: 'todo8', completed: true ,  expireDate:1638554916470},
		{ id: 4, title: 'todo9', completed: false,  expireDate:1638554916470 },
		{ id: 5, title: 'todo10', completed: false,  expireDate:1699999999999 },
        { id: 6, title: 'todo110', completed: false,  expireDate:1699999999999 },
        { id: 7, title: 'todo100', completed: false,  expireDate:1638554916470 }

    ],
    reducers:{
        addTodo:(state,action) =>{
            const newTodo = {
                id: Date.now(),
                title:action.payload.title,
                completed : false,
                expireDate: Date.now()+50000
            };
            state.push(newTodo);
        },

        toggleComplete:(state, action) =>{
            const index = state.findIndex(
                (todo)=>todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed
        },

         deleteTodo: (state,action) =>{
             return state.filter((todo)=> todo.id !== action.payload.id);
         } 
    },

  
          extraReducers:{
              [getTodoAsync.pending]:(state,action) =>{
                   console.log('Fetching Data..') 
              },
              [getTodoAsync.fulfilled]:(state, action)=>{
                  console.log('Data fetched Succesfully..!')
                  return action.payload.todos;
              },
          } ,
});

export const {addTodo,toggleComplete,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;