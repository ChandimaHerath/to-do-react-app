import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { strictEqual } from 'assert';

export const getTodoAsync:any = createAsyncThunk(
    'todos/getTodosAsync',
     async()=>{
     const response = await fetch('http://localhost:3000/');
     if (response.ok){
         const todos = await response.json();
         return{todos} 
     }   
})

export const toggleCompleteAsync:any = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload:any) => {
		const resp = await fetch(`http://localhost:3000/put/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		}); 

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const addTodoAsync:any = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload:any) => {
		const resp = await fetch('http://localhost:3000/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: payload.title,
            id: Date.now(),
            createdDate:Date.now() }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);
export const deleteTodoAsync:any = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload:any) => {
		const resp = await fetch(`http://localhost:3000/del/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

const todoSlice = createSlice({
    name : 'todos',
    initialState:[
       
    ],
    reducers:{
        addTodo:(state:any,action) =>{
            const newTodo = {
                id: Date.now(),
                title:action.payload.title,
                completed : false,
                expireDate: Date.now()+50000
            };
            state.push(newTodo);
        },

        toggleComplete:(state:any, action) =>{
            const index = state.findIndex(
                (todo:any)=>todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed
        },

         deleteTodo: (state:any,action) =>{
             return state.filter((todo:any)=> todo.id !== action.payload.id);
         } 
    },

   
          extraReducers:{
              [getTodoAsync.pending]:(state,action) =>{
                   console.log('Fetching Data..') 
              },
              [getTodoAsync.fulfilled]:(state, action)=>{
                  return action?.payload?.todos;
              },

              [addTodoAsync.fulfilled]:(state:any, action) =>{
                  state.push(action?.payload?.todo);
              },


              [toggleCompleteAsync.fulfilled]: (state:any, action) => {
                const index = state.findIndex(
                    (todo:any) => todo.id === action?.payload?.todo.id
                );
                state[index].completed = action?.payload?.todo?.completed;
                state[index].completed = action?.payload?.todo?.completed;
               },

               [deleteTodoAsync.fulfilled]: (state, action) => {
                return state.filter((todo:any) => todo.id !== action?.payload?.id);
                },

          } ,
});

export const {addTodo,toggleComplete,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;