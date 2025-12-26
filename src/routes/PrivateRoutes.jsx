import React, { useContext } from "react";
import { AuthUserContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let { authUser, loading } = useContext(AuthUserContext);
  // console.log(authUser);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  //! If the user is not logged in → redirect to login
  if (!authUser) {
    return <Navigate to={"/auth/login"} replace />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoutes;
