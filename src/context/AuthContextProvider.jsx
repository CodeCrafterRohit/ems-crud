import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { __AUTH } from "../backend/firebaseConfig";

//! 1. Create Context for User
export let AuthUserContext = createContext(null | {});

const AuthContextProvider = ({ children }) => {
  //! State for User Data
  let [authUser, setAuthUser] = useState(null);

  //! 2. Provide the context
  useEffect(() => {
    onAuthStateChanged(__AUTH, (user) => {
      // console.log("User in Context:", user);
      if (user?.emailVerified === true) {
        setAuthUser(user);
        window.localStorage.setItem("Access Token", user?.accessToken);
      } else {
        setAuthUser(null);
        window.localStorage.removeItem("Access Token");
      }
    });
  }, []);

  //! logout functionality
  let logout = async () => {
    await signOut(__AUTH);
    window.localStorage.removeItem("Access Token");
    window.location.reload();
  };

  return (
    <AuthUserContext.Provider value={{ authUser, logout }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthContextProvider;
