import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  }

  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }
  const toggleComplete = (id, cb) => {
    markComplete(id);
    // First mark true,
    setTimeout(() => {
      if(cb) cb();
    }, 3000)
    // Make API call
    // Unmark if unsuccessful
  }

  const editTodo = (id, newTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return newTodo;
      }
      return todo;
    }));
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.length !== 0 && todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoPage;
