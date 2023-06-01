import { createContext, useState } from "react";

export const authContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem("token"));

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};
