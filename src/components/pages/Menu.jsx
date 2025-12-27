import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextProvider";
import { HiOutlineLogout } from "react-icons/hi";
import { BackendUserContext } from "../../context/FetchUserContext";

const Menu = () => {
  let { authUser, logout } = useContext(AuthUserContext);
  let { userData } = useContext(BackendUserContext);

  let linkClasses = ({ isActive }) => {
    return `${
      isActive
        ? "bg-indigo-700 text-white shadow-md"
        : "text-indigo-600 hover:bg-indigo-100"
    } px-4 py-2 text-base cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold`;
  };

  //! Anonoymous User => Login, SignUp
  let AnonymousUser = () => {
    return (
      <>
        <li>
          <NavLink to={"/auth/login"} className={linkClasses}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to={"/auth/sign-up"} className={linkClasses}>
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
        {userData?.role === "admin" && (
          <li>
            <NavLink to={"/"} className={linkClasses}>
              Admin
            </NavLink>
          </li>
        )}
        <li className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-indigo-50">
            <img
              className="w-full h-full object-cover"
              src={authUser?.photoURL}
              alt={authUser?.displayName}
            />
          </div>
          <NavLink to={"/profile"} className={linkClasses}>
            {authUser?.displayName}
          </NavLink>
        </li>
        <li>
          <button
            onClick={logout}
            className="px-4 py-2 text-base cursor-pointer rounded-lg transition-all duration-300 ease-in-out font-semibold text-rose-600 hover:bg-rose-600 hover:text-white flex items-center gap-2"
          >
            Logout
            <HiOutlineLogout className="text-xl" />
          </button>
        </li>
      </>
    );
  };
  return (
    <header className="h-full">
      <ul className="h-full flex gap-4 items-center">
        <li>
          <NavLink to={"/"} className={linkClasses}>
            Home
          </NavLink>
        </li>
        {authUser ? <AuthenticatedUser /> : <AnonymousUser />}
      </ul>
    </header>
  );
};

export default Menu;
