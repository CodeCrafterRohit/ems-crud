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
                isActive ? "bg-blue-700 text-white" : ""
              } px-6 py-2 text-blue-600 hover:text-white hover:bg-blue-600 text-lg cursor-pointer rounded-lg transition-all duration-100 ease-linear font-semibold`;
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
                isActive ? "bg-blue-700 text-white" : ""
              } px-6 py-2 text-blue-600 hover:text-white hover:bg-blue-600 text-lg cursor-pointer rounded-lg transition-all duration-100 ease-linear font-semibold`;
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
                isActive ? "bg-blue-700 text-white" : ""
              } px-6 py-2 text-blue-600 hover:text-white hover:bg-blue-600 text-lg cursor-pointer rounded-lg transition-all duration-100 ease-linear font-semibold`;
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
