import React from "react";
import EMSLogo from "../assets/EMS-Logo.png";

const Logo = () => {
  return (
    <div className="w-[15%] h-full flex justify-center items-center">
      <img src={EMSLogo} alt="" className="w-20 rotate-8" />
      {/* <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 tracking-tight">
        EMS
      </h2> */}
    </div>
  );
};

export default Logo;
