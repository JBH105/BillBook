import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    // setUser(userInfo?.user);
    // if (!userInfo) router.push("/brand/login");
  }, [router]);

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
