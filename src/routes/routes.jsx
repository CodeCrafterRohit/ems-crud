import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/pages/Layout";
import Home from "../components/pages/Home";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import ForgotPassword from "../components/auth/ForgotPassword";
import UserProfile from "../components/pages/profile/UserProfile";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import MyAccount from "../components/pages/profile/MyAccount";
import AddProfile from "../components/pages/profile/AddProfile";
import UpdateProfilePhoto from "../components/pages/profile/UpdateProfilePhoto";
import ChangePassword from "../components/pages/profile/ChangePassword";
import Settings from "../components/pages/profile/Settings";
import Employees from "../components/employees/Employees";
import DeleteUserAccount from "../components/pages/profile/DeleteUserAccount";
import DataAnalytics from "../components/analytics/DataAnalytics";

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
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "/auth/sign-up",
        element: (
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>
        ),
      },
      {
        path: "/auth/forgot-password",
        element: (
          <PublicRoutes>
            <ForgotPassword />
          </PublicRoutes>
        ),
      },
      {
        path: "/admin/employees",
        element: (
          <PrivateRoutes>
            <Employees />
          </PrivateRoutes>
        ),
      },
      {
        path: "/admin/employee-analytics",
        element: (
          <PrivateRoutes>
            <DataAnalytics />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            element: <MyAccount />,
          },
          {
            path: "add-profile",
            element: <AddProfile />,
          },
          {
            path: "update-photo",
            element: <UpdateProfilePhoto />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "delete-user-account",
            element: <DeleteUserAccount />,
          },
        ],
      },
      {
        path: "*",
        element: <h1>404! Page Not Found.</h1>,
      },
    ],
  },
]);

export default myRoutes;
