import React, { useContext } from "react";
import { AuthUserContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let { authUser } = useContext(AuthUserContext);
  console.log(authUser);

  if (!authUser) {
    return <Navigate to={"/auth/login"} replace />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoutes;
