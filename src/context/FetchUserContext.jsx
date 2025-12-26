import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthUserContext } from "./AuthContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { __DB } from "../backend/firebaseConfig";

//! Step-1: Create the context
export let BackendUserContext = createContext(null);

const FetchUserContext = ({ children }) => {
  let { authUser } = useContext(AuthUserContext);
  //! State for storing the userData which is coming from the firebase
  let [userData, setUserData] = useState({});
  let uid = authUser?.uid;

  //! Logic For Fetch User Details from database
  let fetchUserDetails = async () => {
    //! Provide the reference from where you want to get that data
    let userDataRef = doc(__DB, "users_details", uid);
    onSnapshot(userDataRef, (userInfo) => {
      if (userInfo?.exists()) {
        setUserData(userInfo?.data());
      } else {
        console.log("User Data is Not Found!");
      }
    });
  };

  useEffect(() => {
    if (!uid) {
      return;
    }
    fetchUserDetails();
  }, [uid]);
  
  return (
    <BackendUserContext.Provider value={{ userData }}>
      {children}
    </BackendUserContext.Provider>
  );
};

export default FetchUserContext;
