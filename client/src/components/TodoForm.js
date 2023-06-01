import React, { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs'
import { Button, DescContainer, StyledTodoForm, TitleContainer } from './styles/TodoForm.styled';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    completed: false
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.title.trim()) {
      setLoading(true);
      setTimeout(() => {
        addTodo({ ...todo, id: Date.now() });
        setTodo({ ...todo, title: "", description: "" });
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <TitleContainer>
        <label htmlFor='todoTitle'>Title: </label>
        <input
          name="title"
          id="todoTitle"
          type="text"
          value={todo.title}
          disabled={loading}
          required
          onChange={e => setTodo({ ...todo, title: e.target.value })}
        />
      </TitleContainer>
      <DescContainer>
        <label htmlFor='todoDesc'>Description (optional): </label>
        <textarea
          name="description"
          id="todoDesc"
          value={todo.description}
          disabled={loading}
          onChange={e => setTodo({ ...todo, description: e.target.value })}
        />
      </DescContainer>
      <Button type="submit" disabled={loading}>{loading ? (<BsFillGearFill className="rotate" />) : "Add Todo"}</Button>
    </StyledTodoForm>
  );
}

export default TodoForm;
