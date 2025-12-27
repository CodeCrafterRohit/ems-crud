import React from "react";
import EMSLogo from "../assets/EMS-Logo.png";

const Logo = () => {
  return (
    <div className="w-[15%] h-full flex justify-center items-center">
      <img src={EMSLogo} alt="" className="w-36" />
    </div>
  );
};

export default Logo;
