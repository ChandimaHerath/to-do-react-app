import React from 'react';

const TodoItem = ( { id,title,completed,expireDate}:any ) => {
	return (
		<li key={id} className={`list-group-item ${expireDate<= Date.now() && 'list-group-item-danger'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div> 
		</li>
	);
};

export default TodoItem;
