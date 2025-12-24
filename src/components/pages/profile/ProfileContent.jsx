import React from "react";
import { Outlet } from "react-router-dom";

const ProfileContent = () => {
  return (
    <main className="basis-[85%] bg-slate-50 p-8 min-h-[calc(100vh-72px)]">
      <section className="w-full h-full bg-white border border-slate-200 rounded-4xl shadow-sm p-10">
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-4 mb-6">
          <Outlet />
        </h2>
      </section>
    </main>
  );
};

export default ProfileContent;
