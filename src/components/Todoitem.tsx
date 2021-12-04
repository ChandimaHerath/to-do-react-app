import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync,deleteTodo } from '../redux/todoSlice';

const TodoItem = ( { id,title,completed,expireDate}:any ) => {
	const dispatch = useDispatch();
    
	const handleCompleteClick = ()=>{
		dispatch(toggleCompleteAsync({id:id,completed:!completed}))
	} 

	const handleDelete = () =>{
		dispatch(deleteTodo({id:id}))
	}

	return (
		<li key={id} className={`list-group-item ${expireDate<= Date.now() && 'list-group-item-danger'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' onChange={handleCompleteClick} checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
			</div> 
		</li>
	);
};

export default TodoItem;
