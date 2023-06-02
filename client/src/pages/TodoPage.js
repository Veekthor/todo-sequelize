import React, { useContext, useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { authApiCall } from '../api';
import { toast } from 'react-toastify';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = async(todo, cb) => {
    const body = {
      ...todo,
    }
    toast.warn("Creating Task!");
    const {data, error} = await authApiCall({
      path: "/todos/create",
      method: "POST",
      body,
    })
    if(cb) cb(!!data);
    if(data) {
      setTodos([data.data, ...todos]);
      toast.success(data.message);
    }
    if(error) {
      toast.error(error.message || "Something Went Wrong!");
      console.log("Error Msg: ", error.message)
    };
  }

  const markComplete = (id, original = null) => {
    console.log("I ram")
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: original ?? !todo.completed };
      }
      return todo;
    }));
  }
  const toggleComplete = async (id, originalState, cb) => {
    markComplete(id);
    toast.warn("Marking Task Complete!");
    const {data, error} = await authApiCall({
      path: `/todos/toggleComplete/${id}`,
      method: "POST",
      body: {
        completed: !originalState,
      }
    })
    if(cb) cb(!!data);
    if(data) {
      toast.success(data.message);
    }
    if(error) {
      markComplete(id, originalState);
      toast.error(error.message || "Something Went Wrong!");
      console.log("Error Msg: ", error.message)
    };
  }

  const editTodo = async (id, newTodo, cb) => {
    const body = {
      title: newTodo.title,
      description: newTodo.description || "",
    }
    toast.warn("Updating Task!");
    const {data, error} = await authApiCall({
      path: `/todos/${id}`,
      method: "PUT",
      body,
    });
    if(cb) cb(!!data);
    if(data) {
      toast.success(data.message);
      setTodos(todos.map(todo => {
        if (todo.id === id) {
          return data.data;
        }
        return todo;
      }));
    }
    if(error) {
      toast.error(error.message || "Something Went Wrong!");
      console.log("Error Msg: ", error.message)
    };
  }

  const deleteTodo = async (id, cb) => {
    toast.warn("Deleting Task!");
    const {data, error} = await authApiCall({
      path: `/todos/${id}`,
      method: "DELETE",
    });
    if(cb) cb(!!data);
    if(data) {
      toast.success(data.message);
      // Show alerts data.message holds message
      setTodos(todos.filter(todo => todo.id !== id));
    }
    if(error) {
      toast.error(error.message || "Something Went Wrong!");
      console.log("Error Msg: ", error.message)
    };
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
