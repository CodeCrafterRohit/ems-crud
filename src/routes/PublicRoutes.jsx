import React, { useContext } from "react";
import { AuthUserContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  let { authUser } = useContext(AuthUserContext);

  if (authUser) {
    return <Navigate to={"/profile"} replace />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoutes;
