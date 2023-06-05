import React, { useContext, useState } from "react";
import TextInputField from "../components/TextInputField";
import { Button, ButtonContainer } from "../components/styles/Button.styled";
import { authContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { apiCall } from "../api";
import { parseJwt } from "../utils";
import { toast } from "react-toastify";
import { UserForm } from "../components/styles/UserPage.styled";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const path = isSignUp ? "/users/signup" : "/users/signin";
    const { data, error } = await apiCall({
      path,
      method: "POST",
      body: {
        username: userName,
        password,
      },
    });
    setLoading(false);
    toast.warn("Loading!");
    if (data) {
      toast.success(data.message);
      navigate("/");
      console.log("Token: ", data.token);
      localStorage.setItem("token", data.token);
      setUser(parseJwt(data.token));
    }
    if (error) {
      toast.error(error.message || "Something Went Wrong!");
      console.log("Error Msg: ", error.message);
    }
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
    <UserForm onSubmit={handleSubmit}>
      <TextInputField
        label="Username"
        type="userName"
        name="userName"
        id="userName"
        placeholder="User Name"
        value={userName}
        onChange={handleChange}
        isUserPage
        required
      />

      <TextInputField
        label="Password"
        type="password"
        name="password"
        placeholder={passwordPlaceHolder}
        value={password}
        onChange={handleChange}
        isUserPage
        required
      />
      <ButtonContainer>
        <Button type="submit">
          {isLoading ? <BsFillGearFill className="rotate" /> : submitBtnVal}
        </Button>
        <Link to={linkHref}>{linkText}</Link>
      </ButtonContainer>
    </UserForm>
  );
};

export default UserPage;
