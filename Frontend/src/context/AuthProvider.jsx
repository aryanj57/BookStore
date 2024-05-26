import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initUser = localStorage.getItem("users");
  const [currentUser, setCurrentUser] = useState(
    initUser ? JSON.parse(initUser) : undefined
  );

  return (
    <AuthContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
