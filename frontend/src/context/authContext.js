import { createContext, useState } from "react";

export const userAuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  return (
    <userAuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </userAuthContext.Provider>
  );
};

export default AuthProvider;
