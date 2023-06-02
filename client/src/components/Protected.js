import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context";

const Protected = ({ children }) => {
  const { user } = useContext(authContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
