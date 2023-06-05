import { InputContainer } from "./styles/TextInputField.styled";

const TextInputField = ({ label, isUserPage, ...props }) => (
  <InputContainer isUserPage={isUserPage}>
    <label htmlFor={props.id}>{label}: </label>
    <input {...props} />
  </InputContainer>
);

export default TextInputField;
