import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="w-full h-18 shadow-xl flex justify-between items-center px-4">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
