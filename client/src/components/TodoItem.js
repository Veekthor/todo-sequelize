import React, { useState } from "react";
import { Button, ButtonContainer } from "./styles/Button.styled";
import { StyledTodoItem } from "./styles/TodoItem.styled";
import TodoForm from "./TodoForm";

function TodoItem({ todo, toggleComplete, editTodo, deleteTodo, idx }) {
  const [isEditing, setEditing] = useState(false);
  const [loading, setLoading] = useState("");

  const handleToggleComplete = () => {
    setLoading("toggleComplete");
    toggleComplete(todo.id, () => setLoading(""));
  };

  const handleSave = (latestTodo) => {
    editTodo(todo.id, latestTodo);
    setEditing(false);
  };

  const handleDelete = () => {
    setLoading("delete");
    setTimeout(() => {
      deleteTodo(todo.id);
      setLoading("");
    }, 3000);
  };

  return (
    <StyledTodoItem className={!!loading ? "disabled" : ""}>
      {isEditing ? (
        <TodoForm
          addTodo={handleSave}
          setEditing={setEditing}
          todo={todo}
          editState
        />
      ) : (
        <div>
          <div>
            <h2>{todo.title}</h2>
            <div>{todo.description}</div>
            <input
              type="checkbox"
              id="markComplete"
              checked={todo.completed}
              onChange={handleToggleComplete}
            />
            {"  "}
            <label htmlFor="markComplete">Mark Complete</label>
          </div>
          <ButtonContainer>
            <Button onClick={() => setEditing(true)}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </ButtonContainer>
        </div>
      )}
    </StyledTodoItem>
  );
}

export default TodoItem;
