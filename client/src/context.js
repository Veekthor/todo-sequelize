import { createContext, useState } from "react";
import { parseJwt } from "./utils";

export const authContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(() => (token ? parseJwt(token) : null));

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};
