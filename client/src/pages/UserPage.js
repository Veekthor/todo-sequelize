import React, { useContext, useState } from "react";
import TextInputField from "../components/TextInputField";
import { Button, ButtonContainer } from "../components/styles/Button.styled";
import { authContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";

const UserPage = ({ isSignUp }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "userName") setUserName(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
      setUser(userName);
    }, 2000);
  };

  const submitBtnVal = isSignUp ? "Sign Up" : "Log In";
  const linkText = isSignUp
    ? "Have an account? Log In"
    : "Don't have an account? Sign Up";
  const linkHref = isSignUp ? "/login" : "/signup";
  const passwordPlaceHolder = isSignUp
    ? "Enter your password"
    : "Choose a password";

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField
        label="User Name"
        type="userName"
        name="userName"
        id="userName"
        placeholder="User Name"
        value={userName}
        onChange={handleChange}
        required
      />

      <TextInputField
        label="Password"
        type="password"
        name="password"
        placeholder={passwordPlaceHolder}
        value={password}
        onChange={handleChange}
        required
      />
      <ButtonContainer>
        <Button type="submit">
          {isLoading ? <BsFillGearFill className="rotate" /> : submitBtnVal}
        </Button>
        <Link to={linkHref}>{linkText}</Link>
      </ButtonContainer>
    </form>
  );
};

export default UserPage;
