import React from 'react';
import TodoItem from './Todoitem'; 

const TodoList = () => {
	const todos = [
		{ id: 1, title: 'todo1', completed: false, expireDate:1638554916470 },
        { id: 2, title: 'todo2', completed: false,  expireDate:1638554916470 },
		{ id: 3, title: 'todo3', completed: true ,  expireDate:1638554916470},
		{ id: 4, title: 'todo4', completed: false,  expireDate:1638554916470 },
		{ id: 5, title: 'todo5', completed: false,  expireDate:1699999999999 },
	];

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} expireDate={todo.expireDate} />
			))}
		</ul>
	);
};

export default TodoList;
