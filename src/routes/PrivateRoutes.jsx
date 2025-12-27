import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../helper/Spinner";

const PrivateRoutes = ({ children }) => {
  const { authUser, loading } = useContext(AuthUserContext);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // Once Firebase says loading is done and user exists
    if (!loading && authUser) {
      // Wait 3 seconds for the Spinner animation to reach the Tick Mark
      const timer = setTimeout(() => {
        setShowApp(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading, authUser]);

  if (loading || (authUser && !showApp)) {
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
