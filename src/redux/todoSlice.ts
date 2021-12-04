import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name : 'todos',
    initialState:[
        { id: 1, title: 'todo6', completed: false, expireDate:1638554916470 },
        { id: 2, title: 'todo7', completed: false,  expireDate:1638554916470 },
		{ id: 3, title: 'todo8', completed: true ,  expireDate:1638554916470},
		{ id: 4, title: 'todo9', completed: false,  expireDate:1638554916470 },
		{ id: 5, title: 'todo10', completed: false,  expireDate:1699999999999 },
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


    },
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;