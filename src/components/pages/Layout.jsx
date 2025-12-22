import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="grow p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
