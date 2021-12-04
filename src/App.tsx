import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Form from './components/Form';
import TodoList from './components/Todolist';


function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
     <h1>TO DO</h1>
     <Form/>
     <TodoList/>
    </div>
  );
}

export default App;
