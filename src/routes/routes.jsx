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
        path: "/profile",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRoutes>
                <MyAccount />
               </PrivateRoutes>
            ),
          },
          {
            path: "add-profile",
            element: (
              <PrivateRoutes>
                <AddProfile />
              </PrivateRoutes>
            ),
          },
          {
            path: "update-photo",
            element: (
              <PrivateRoutes>
                <UpdateProfilePhoto />
              </PrivateRoutes>
            ),
          },
          {
            path: "change-password",
            element: (
              <PrivateRoutes>
                <ChangePassword />
              </PrivateRoutes>
            ),
          },
          {
            path: "settings",
            element: (
              <PrivateRoutes>
                <Settings />
              </PrivateRoutes>
            ),
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
