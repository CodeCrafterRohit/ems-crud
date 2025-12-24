import React from "react";
import {
  HiOutlineCamera,
  HiOutlineCog,
  HiOutlineLockClosed,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const ProfileSidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm lg:text-base ${
      isActive
        ? "bg-white text-indigo-700 shadow-lg"
        : "text-white hover:bg-indigo-50 hover:text-indigo-700"
    }`;

  return (
    <aside className="basis-[20%] bg-indigo-700 border-r border-slate-200 h-[calc(100vh-72px)] p-6 flex flex-col justify-between">
      <nav className="flex flex-col gap-3">
        <NavLink to="/profile" className={linkClasses}>
          <HiOutlineUser className="text-xl" />
          My Account
        </NavLink>

        <NavLink to="add-profile" className={linkClasses}>
          <HiOutlineUserPlus className="text-xl" />
          Add Profile
        </NavLink>

        <NavLink to="update-photo" className={linkClasses}>
          <HiOutlineCamera className="text-xl" />
          Update Profile Photo
        </NavLink>

        <NavLink to="change-password" className={linkClasses}>
          <HiOutlineLockClosed className="text-xl" />
          Change Password
        </NavLink>

        <NavLink to="settings" className={linkClasses}>
          <HiOutlineCog className="text-xl" />
          Settings
        </NavLink>
      </nav>

      <div className="pt-6 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:text-rose-600 bg-rose-600 text-white font-semibold hover:bg-rose-50 transition-all duration-300">
          <HiOutlineTrash className="text-xl" />
          Delete Account
        </button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
