import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthUserContext } from "./AuthContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { __DB } from "../backend/firebaseConfig";

//! Step-1: Create the context
export let BackendUserContext = createContext(null);

const FetchUserContext = ({ children }) => {
  let { authUser } = useContext(AuthUserContext);
  //! State for storing the userData which is coming from the firebase
  let [userData, setUserData] = useState(null);
  let [userDataLoading, setUserDataLoading] = useState(true);
  let uid = authUser?.uid;

  //! Logic For Fetch User Details from database
  let fetchUserDetails = async () => {
    //! Start loading when we begin fetching
    setUserDataLoading(true);
    //! Provide the reference from where you want to get that data
    let userDataRef = doc(__DB, "users_details", uid);
    onSnapshot(userDataRef, (userInfo) => {
      if (userInfo?.exists()) {
        setUserData(userInfo?.data());
      } else {
        console.log("User Data is Not Found!");
      }
      //! Data is fetched (or confirmed not found), so stop loading
      setUserDataLoading(false);
    });
  };

  useEffect(() => {
    if (!uid) {
      //! If no User, we aren't loading user data
      setUserDataLoading(false);
      return;
    }
    fetchUserDetails();
  }, [uid]);

  return (
    <BackendUserContext.Provider value={{ userData, userDataLoading }}>
      {children}
    </BackendUserContext.Provider>
  );
};

export default FetchUserContext;
