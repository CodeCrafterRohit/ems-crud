import React from "react";
import EMSLogo from "../assets/EMS-Logo.png";

const Logo = () => {
  return (
    <aside className="w-[15%] h-full flex justify-center items-center">
      {/* <img src={EMSLogo} alt="EMS" className="w-50" /> */}
      <h2 className="text-5xl font-semibold text-indigo-700 tracking-wide">
        EMS
      </h2>
    </aside>
  );
};

export default Logo;
