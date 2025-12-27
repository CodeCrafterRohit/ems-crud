import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../context/AuthContextProvider";
import { BackendUserContext } from "../context/FetchUserContext";
import { Navigate } from "react-router-dom";
import Spinner from "../helper/Spinner";

const PrivateRoutes = ({ children }) => {
  const { authUser, loading: authLoading } = useContext(AuthUserContext);
  const { userDataLoading } = useContext(BackendUserContext);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  //! Minimum animation time for the spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading =
    authLoading || (authUser && userDataLoading) || !minTimeElapsed;

  if (isLoading) {
    return (
      <div
        key="loader-overlay"
        className="fixed inset-0 flex items-center justify-center bg-slate-50"
      >
        <Spinner />
      </div>
    );
  }

  if (!authUser) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
};

export default PrivateRoutes;
