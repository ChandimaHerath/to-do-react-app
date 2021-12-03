import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Form from './components/Form';

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
     <h1>TO DO</h1>
     <Form/>
    </div>
  );
}

export default App;
