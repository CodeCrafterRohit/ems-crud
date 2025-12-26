import React from "react";
import { Outlet } from "react-router-dom";

const ProfileContent = () => {
  return (
    <main className="basis-[85%] bg-slate-50 p-5 h-[calc(100vh-80px)]">
      <section className="w-full h-full bg-white border border-slate-200 rounded-xl shadow-sm p-5">
        <Outlet />
      </section>
    </main>
  );
};

export default ProfileContent;
