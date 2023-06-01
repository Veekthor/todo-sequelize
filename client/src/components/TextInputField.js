import { InputContainer } from "./styles/TextInputField.styled";

const TextInputField = ({ label, ...props }) => (
  <InputContainer>
    <label htmlFor={props.id}>{label}: </label>
    <input {...props} />
  </InputContainer>
);

export default TextInputField;
