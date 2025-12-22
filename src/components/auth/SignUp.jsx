import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  let [showPassword1, setShowPassword1] = useState(false);
  let [showPassword2, setShowPassword2] = useState(false);

  let togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  let togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <section className="w-full min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-gray-900 text-white p-5 rounded-lg">
        <header>
          <h1 className="text-4xl text-center p-3 font-bold">Sign Up</h1>
        </header>
        <main className="p-3">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-xl">
                Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your name"
                className="bg-gray-300 p-2 rounded text-black outline-none focus:ring-3 focus:ring-indigo-500 placeholder:text-black transition-all duration-150 ease-linear text-lg placeholder:text-md"
              />
            </div>
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
                type={showPassword1 ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="bg-gray-300 p-2 rounded text-black outline-none focus:ring-3 focus:ring-indigo-500 placeholder:text-black transition-all duration-150 ease-linear text-lg placeholder:text-md"
              />
              <span
                onClick={togglePassword1}
                className="absolute right-3 top-12 text-black text-xl cursor-pointer"
              >
                {showPassword1 ? <IoEye /> : <IoEyeOff />}
              </span>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="confirmPassword" className="text-xl">
                Confirm Password
              </label>
              <input
                type={showPassword2 ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confrim your password again"
                className="bg-gray-300 p-2 rounded text-black outline-none focus:ring-3 focus:ring-indigo-500 placeholder:text-black placeholder:text-md transition-all duration-150 ease-linear text-lg"
              />
              <span
                onClick={togglePassword2}
                className="absolute right-3 top-12 text-black text-xl cursor-pointer"
              >
                {showPassword2 ? <IoEye /> : <IoEyeOff />}
              </span>
            </div>
            <div className="flex mt-4">
              <button className="w-full p-2 text-xl bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer transition-all duration-150 ease-out">
                Sign Up
              </button>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <span className=" flex gap-1">
                Already have an account?
                <NavLink
                  to={"/auth/login"}
                  className={"hover:text-indigo-500 underline transition-all"}
                >
                  Login
                </NavLink>
              </span>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default SignUp;
