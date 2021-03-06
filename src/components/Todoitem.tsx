import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync,deleteTodoAsync, getTodoAsync } from '../redux/todoSlice';

const TodoItem = ( { id,title,completed,expireDate}:any ) => {
	const dispatch = useDispatch();
    
	const handleCompleteClick = ()=>{
		dispatch(toggleCompleteAsync({id:id,completed:!completed}))
		dispatch(getTodoAsync());
	} 

	const handleDelete = () =>{
		dispatch(deleteTodoAsync({ id }));
	};
    


	return (
		<li key={id} className={`list-group-item ${expireDate<= Date.now() && 'list-group-item-danger'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input style={{marginRight:'10px'}} type='checkbox' className='mr-3' onChange={handleCompleteClick} checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
			</div> 
		</li>
	);
};

export default TodoItem;
