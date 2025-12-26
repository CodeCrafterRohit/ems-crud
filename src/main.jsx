import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/routes";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider";
import FetchUserContext from "./context/FetchUserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthContextProvider>
      <FetchUserContext>
        <Toaster />
        <RouterProvider router={myRoutes} />
      </FetchUserContext>
    </AuthContextProvider>
  </>
);
