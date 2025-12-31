import React from "react";
import { HiOutlineCog } from "react-icons/hi";

const Settings = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-2">
          <HiOutlineCog className="text-5xl p-3 bg-indigo-100 rounded-2xl text-indigo-600" />
          Settings
        </h2>
      </div>
    </div>
  );
};

export default Settings;
