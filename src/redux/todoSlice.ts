import {createSlice} from '@reduxjs/toolkit';

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


    },
});

export const {addTodo,toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;