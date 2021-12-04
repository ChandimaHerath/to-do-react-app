import React, {useEffect} from 'react';
import TodoItem from './Todoitem'; 
import { useSelector, useDispatch } from 'react-redux';
import { getTodoAsync } from '../redux/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state:any)=>state.todos);
	
	useEffect(()=>{
		dispatch(getTodoAsync());
	},[dispatch]);
	
	// const todos = [
	// 	{ id: 1, title: 'todo1', completed: false, expireDate:1638554916470 },
    //     { id: 2, title: 'todo2', completed: false,  expireDate:1638554916470 },
	// 	{ id: 3, title: 'todo3', completed: true ,  expireDate:1638554916470},
	// 	{ id: 4, title: 'todo4', completed: false,  expireDate:1638554916470 },
	// 	{ id: 5, title: 'todo5', completed: false,  expireDate:1699999999999 },
	// ];

	return (
		<ul className='list-group'>
			{todos.map((todo:any) => (
				<TodoItem id={todo?.id} title={todo?.title} completed={todo?.isCompleted} expireDate={todo?.expireDate} />
			))}
		</ul>
	);
};

export default TodoList;
