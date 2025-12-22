import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="w-full h-18 bg-white shadow-xl border-b border-gray-100 flex justify-between items-center px-10">
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
