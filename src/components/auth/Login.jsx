import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Login = () => {
  let [showPassword, setShowPassword] = useState(false);

  let togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="w-full min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-gray-900 text-white p-5 rounded-lg">
        <header>
          <h1 className="text-4xl text-center p-3 font-bold">Login</h1>
        </header>
        <main className="p-3">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter you email"
                className="bg-gray-300 p-2 rounded text-black outline-none focus:ring-3 focus:ring-indigo-500 placeholder:text-black transition-all duration-150 ease-linear text-lg placeholder:text-md"
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-300 p-2 rounded text-black outline-none focus:ring-3 focus:ring-indigo-500 placeholder:text-black transition-all duration-150 ease-linear text-lg placeholder:text-md"
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-12 text-black text-xl cursor-pointer"
              >
                {showPassword ? <IoEye /> : <IoEyeOff />}
              </span>
            </div>

            <div className="flex mt-4">
              <button className="w-full p-2 text-xl bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer transition-all duration-150 ease-out">
                Login
              </button>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <span className=" flex gap-1">
                Don't have an account?
                <NavLink
                  to={"/auth/sign-up"}
                  className={"hover:text-indigo-500 underline transition-all"}
                >
                  Sign Up
                </NavLink>
              </span>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Login;
