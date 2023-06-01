import styled from "styled-components";

export const StyledTodoItem = styled.div`
  background-color: #eee;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 1px 8px 5px rgba(0, 0, 0, 0.5);
  padding: 20px;

  &.disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;
