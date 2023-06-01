import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 5px;
  border: 1px solid var(--primary);
  transition: all ease 0.8s;

  &:hover {
    background-color: white;
    color: var(--primary);
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
  }
`;
