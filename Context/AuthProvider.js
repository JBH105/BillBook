import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      fetch("/api/set_cookie", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
