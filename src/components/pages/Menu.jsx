import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextProvider";
import { HiOutlineLogout } from "react-icons/hi";

const Menu = () => {
  let { authUser, logout } = useContext(AuthUserContext);
  // console.log("authUser", authUser);

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
        <li className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-indigo-600 flex items-center justify-center overflow-hidden bg-indigo-50">
            <img src={authUser?.photoURL} alt={authUser?.displayName} />
          </div>
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
            {authUser?.displayName}
          </NavLink>
        </li>
        <li>
          <button
            onClick={logout}
            className="px-6 py-2 text-lg cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold text-rose-600 hover:bg-rose-600 hover:text-white flex items-center gap-2"
          >
            Logout
            <HiOutlineLogout className="text-xl" />
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
