import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoPage;
