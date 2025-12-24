import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-20 bg-white shadow-xl flex justify-between items-center px-10 border-b border-gray-100">
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
