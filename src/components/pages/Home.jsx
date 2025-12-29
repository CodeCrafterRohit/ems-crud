import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextProvider";
import { FaUsers, FaUserCog, FaChartLine, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const { authUser } = useContext(AuthUserContext);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-800 p-4">
            Employee Management System
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your workforce management. Efficiently track, manage, and
            grow your team with our modern solution.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            {authUser === null ? (
              <>
                <NavLink
                  to="/auth/login"
                  className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started <FaArrowRight />
                </NavLink>
                <NavLink
                  to="/auth/sign-up"
                  className="px-8 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-full font-semibold shadow-md hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/employees"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Go to Dashboard <FaArrowRight />
              </NavLink>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group mt-4">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
              <FaUsers className="text-2xl text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Employees</h3>
            <p className="text-gray-500 mb-4">
              View and manage your entire workforce in one centralized modular
              table.
            </p>
            <NavLink
              to="/"
              className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              View Employees <FaArrowRight className="text-sm" />
            </NavLink>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group mt-4">
            <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-300 ">
              <FaUserCog className="text-2xl text-violet-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Role Management
            </h3>
            <p className="text-gray-500 mb-4">
              Admin-controlled access ensuring secure and organized data
              handling.
            </p>
            <NavLink
              to="/profile"
              className="text-violet-600 font-semibold hover:text-violet-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
            >
              Manage Profile <FaArrowRight className="text-sm" />
            </NavLink>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group mt-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
              <FaChartLine className="text-2xl text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Analytics</h3>
            <p className="text-gray-500 mb-4">
              Visual insights into your team structure and growth over time.
            </p>
            <span className="text-green-600 font-semibold cursor-pointer hover:text-green-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Reports <FaArrowRight className="text-sm" />
            </span>
          </div>
        </div>

        <div className="space-y-8 animate-fade-in-up">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              New Arrivals
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Meet Our Latest Members
            </h2>
            <p className="text-gray-500 max-w-xl">
              We are growing fast! Check out the newest additions to our
              talented team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
