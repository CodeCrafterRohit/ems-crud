import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import myRoutes from "./routes/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <RouterProvider router={myRoutes} />
  </>
);
