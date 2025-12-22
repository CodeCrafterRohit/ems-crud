import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header className="w-[40%] h-full">
      <ul className="w-full h-full flex justify-evenly items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "bg-indigo-700 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-50"
              } px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold`;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/login"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "bg-indigo-700 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-50"
              } px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold`;
            }}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/sign-up"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "bg-indigo-700 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-50"
              } px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold`;
            }}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
