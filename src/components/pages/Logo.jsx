import React from "react";
import EMSLogo from "../assets/EMS-Logo.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="w-[15%] h-full flex justify-center items-center">
      <NavLink to={"/"}>
        <img src={EMSLogo} alt="" className="w-36" />
      </NavLink>
    </div>
  );
};

export default Logo;
