import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <div>
      <h1 className='Todo'>TO DO</h1>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} To Do's</h2>
    </div> 
    
  );
}

export { TodoCounter };
