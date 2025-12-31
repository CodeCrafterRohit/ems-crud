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
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-base ${
      isActive
        ? "bg-white text-indigo-700 shadow-sm border-l-4 border-indigo-900"
        : "text-white hover:bg-indigo-50 hover:text-indigo-700"
    }`;

  return (
    <aside className="basis-[20%] bg-indigo-700 border-r border-slate-200 h-[calc(100vh-80px)] p-6 flex flex-col justify-between">
      <nav className="flex flex-col gap-3">
        <NavLink to="/profile" className={linkClasses} end>
          <HiOutlineUser className="text-2xl" />
          My Account
        </NavLink>

        <NavLink to="add-profile" className={linkClasses}>
          <HiOutlineUserPlus className="text-2xl" />
          Add Profile
        </NavLink>

        <NavLink to="update-photo" className={linkClasses}>
          <HiOutlineCamera className="text-2xl" />
          Update Profile Photo
        </NavLink>

        <NavLink to="change-password" className={linkClasses}>
          <HiOutlineLockClosed className="text-2xl" />
          Change Password
        </NavLink>

        <NavLink to="settings" className={linkClasses}>
          <HiOutlineCog className="text-2xl" />
          Settings
        </NavLink>
      </nav>

      <div className="pt-6 border-t border-slate-100">
        <NavLink
          to={"delete-user-account"}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:text-rose-600 bg-rose-600 text-white font-semibold text-base hover:bg-rose-100 transition-all duration-300"
        >
          <HiOutlineTrash className="text-2xl" />
          Delete Account
        </NavLink>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
