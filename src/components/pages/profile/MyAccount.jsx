import React from "react";
import { FaEdit, FaUserSlash } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { TbPhotoEdit } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MyAccount = () => {
  // Logic here

  return (
    <div className="flex flex-col gap-4">
      <header className="relative w-full h-40 bg-linear-to-r from-indigo-600 to-indigo-500 rounded-3xl shadow-md">
        <div className="absolute top-3 left-10 flex items-center gap-6">
          <div className="relative">
            <img
              src=""
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
            />
            <NavLink
              to={"/profile/update-photo"}
              className="absolute bottom-1 right-1 p-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-all border-2 border-white hover:scale-105"
            >
              <TbPhotoEdit size={18} />
            </NavLink>
          </div>
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-white mb-2">Display Name</h1>
            <p className="text-white text-lg font-medium">Email</p>
          </div>
        </div>
      </header>

      <div className="w-full mt-2">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 uppercase tracking-wide">
            Personal Details
          </h2>
          <NavLink
            to={"/profile/add-profile"}
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-md shadow-indigo-100"
          >
            <span>Edit</span>
            <FaEdit />
          </NavLink>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                Name
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">
                  name
                </span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                Contact
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">CN</span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                Gender
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">
                  Gender
                </span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                DOB
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">dob</span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                Age
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">age</span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                Language
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">
                  Lang
                </span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                Country
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">
                  country
                </span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                State
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">
                  state
                </span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
              <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
                City
              </span>
              <div className="flex justify-between items-center w-full px-4">
                <span className="text-slate-700 font-medium truncate">
                  city
                </span>
                <button
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center bg-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
            <span className="font-bold text-white bg-indigo-600 py-4 px-6 min-w-28 text-center border-r border-slate-200">
              Address
            </span>
            <div className="flex justify-between items-center w-full px-4">
              <span className="text-slate-700 font-medium">
                Your Address Here
              </span>
              <button className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer">
                <HiOutlineDuplicate size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
