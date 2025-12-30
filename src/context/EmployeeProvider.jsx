import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { __DB } from "../backend/firebaseConfig";

//! Step-1: Create a context for employee
export let FetchEmployeeContext = createContext(null);

const EmployeeProvider = ({ children }) => {
  //! State for AllEmployeeList
  let [allEmployeeList, setAllEmployeeList] = useState([]);

  //! Fetching the all employees from the firebase
  useEffect(() => {
    const q = query(
      collection(__DB, "employee_profiles"),
      orderBy("eCreatedAt", "desc")
    );
    let unsubscribe = onSnapshot(q, (employeeSnapshot) => {
      let employeeList = employeeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllEmployeeList(employeeList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FetchEmployeeContext.Provider value={allEmployeeList}>
      {children}
    </FetchEmployeeContext.Provider>
  );
};

//! Custom Hook
export let useEmployees = () => useContext(FetchEmployeeContext);

export default EmployeeProvider;
