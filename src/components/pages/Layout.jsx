import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
