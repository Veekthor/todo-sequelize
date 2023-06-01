import React, { useState } from 'react';
import { BsFillGearFill } from 'react-icons/bs'
import { DescContainer, StyledTodoForm } from './styles/TodoForm.styled';
import { Button, ButtonContainer } from './styles/Button.styled';
import TextInputField from './TextInputField';

const TodoForm = ({ addTodo, todo, editState, setEditing }) => {
  const isEditMode = editState ? "Edit" : "";
  const [newTodo, setTodo] = useState(() => todo || {
    id: "",
    title: "",
    description: "",
    completed: false
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo.title.trim()) {
      setLoading(true);
      setTimeout(() => {
        const newTodoObj = {...newTodo}
        if(!editState) newTodoObj.id = Date.now();
        addTodo(newTodoObj);
        setTodo({ ...newTodo, title: "", description: "" });
        setLoading(false);
      }, 3000);
    }
  };

  const submitBtnVal = editState ? "Save" : "Add Todo";

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <TextInputField
        label="Title"
        name="title"
        id={`todoTitle${isEditMode}`}
        type="text"
        value={newTodo.title}
        disabled={loading}
        required
        onChange={e => setTodo({ ...newTodo, title: e.target.value })}
      />
      <DescContainer>
        <label htmlFor={`todoDesc${isEditMode}`}>Description (optional): </label>
        <textarea
          name="description"
          id={`todoDesc${isEditMode}`}
          value={newTodo.description}
          disabled={loading}
          onChange={e => setTodo({ ...newTodo, description: e.target.value })}
        />
      </DescContainer>
      <ButtonContainer>
        {editState && <Button onClick={() => setEditing(false)}>Cancel</Button>}
        <Button type="submit" disabled={loading}>{loading ? (<BsFillGearFill className="rotate" />) : submitBtnVal}</Button>
      </ButtonContainer>
    </StyledTodoForm>
  );
}

export default TodoForm;
