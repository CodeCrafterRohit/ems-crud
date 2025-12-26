import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { __AUTH } from "../backend/firebaseConfig";

export let AuthUserContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  let [authUser, setAuthUser] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    //! Firebase listener - runs on refresh, login, logout
    const unsubscribe = onAuthStateChanged(__AUTH, (user) => {
      if (user?.emailVerified) {
        //! User is logged in
        setAuthUser(user);
        localStorage.setItem("Access Token", user.accessToken);
      } else {
        //! User is not logged in OR not verified
        setAuthUser(null);
        localStorage.removeItem("Access Token");
      }

      //! Firebase has finished checking login status
      setLoading(false);
    });

    //! Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  //! Logout function
  const logout = async () => {
    await signOut(__AUTH);
    localStorage.removeItem("Access Token");
    window.location.replace("/");
  };

  return (
    <AuthUserContext.Provider value={{ authUser, loading, logout }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthContextProvider;
