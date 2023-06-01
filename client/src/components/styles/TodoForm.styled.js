import styled from "styled-components";

export const StyledTodoForm = styled.form``;

export const TitleContainer = styled.div`
  display: flex;
  gap: 5px;

  input {
    flex-grow: 1;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 10px;
  gap: 5px;
`;

export const Button = styled.button`
  --primary: #117fe6;
  background-color: var(--primary);
  color: white;
  padding: 5px;
  border: 1px solid var(--primary);
  transition: all ease .8s;

  &:hover {
    background-color: white;
    color: var(--primary);
  }

  &:disabled {
    opacity: .8;
    pointer-events: none;
  }
`;