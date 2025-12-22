import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import Home from "../components/pages/Home";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import ForgotPassword from "../components/auth/ForgotPassword";

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "*",
        element: <h1>404! Page Not Found.</h1>,
      },
    ],
  },
]);

export default myRoutes;
