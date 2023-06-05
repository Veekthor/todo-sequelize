import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;

  ${({ isUserPage }) =>
    isUserPage
      ? `

    label {
      flex: 1.2;
    }
  `
      : ""}

  input {
    flex-grow: 1;
  }
`;
