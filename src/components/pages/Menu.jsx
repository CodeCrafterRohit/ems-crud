import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextProvider";

const Menu = () => {
  let { authUser, logout } = useContext(AuthUserContext);

  //! Anonoymous User => Login, SignUp
  let AnonymousUser = () => {
    return (
      <>
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
      </>
    );
  };

  //! Authenticated User => Profile, Logout
  let AuthenticatedUser = () => {
    return (
      <>
        <li>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => {
              return `${
                isActive
                  ? "bg-indigo-700 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-50"
              } px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold`;
            }}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <button
            onClick={logout}
            className={
              "px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold"
            }
          >
            Logout
          </button>
        </li>
      </>
    );
  };
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
        {authUser ? <AuthenticatedUser /> : <AnonymousUser />}
      </ul>
    </header>
  );
};

export default Menu;
