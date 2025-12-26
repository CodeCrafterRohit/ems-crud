import React, { useContext } from "react";
import { FaEdit, FaUserSlash } from "react-icons/fa";
import {
  HiOutlineDuplicate,
  HiOutlineExclamationCircle,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { TbPhotoEdit } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthUserContext } from "../../../context/AuthContextProvider";
import { BackendUserContext } from "../../../context/FetchUserContext";
import toast from "react-hot-toast";

const MyAccount = () => {
  let navigate = useNavigate();
  let { authUser } = useContext(AuthUserContext);
  let { userData } = useContext(BackendUserContext);

  //! handleCopy
  let handleCopy = (value) => {
    window.navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="relative w-full h-40 bg-linear-to-r from-indigo-600 to-indigo-500 rounded-3xl shadow-md">
        <div className="absolute top-3 left-10 flex items-center gap-6">
          <div className="relative">
            <img
              src={authUser?.photoURL}
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
            <h1 className="text-3xl font-bold text-white mb-2">
              {authUser?.displayName}
            </h1>
            <p className="text-white text-lg font-medium">{authUser?.email}</p>
          </div>
        </div>
      </header>

      {userData == null ? (
        <div className="w-2xl mx-auto h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-6 w-full transition-all hover:border-indigo-300 group">
            <div className="relative mb-5">
              <div className="w-40 h-40 rounded-full bg-white shadow-inner flex items-center justify-center border-4 border-white overflow-hidden">
                <HiOutlineUserAdd className="text-7xl text-slate-200 group-hover:text-indigo-200 transition-colors" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-400 p-2 rounded-full border-4 border-white text-white">
                <HiOutlineExclamationCircle size={24} />
              </div>
            </div>

            <div className="text-center mb-5">
              <h3 className="text-2xl font-bold text-indigo-900 mb-2">
                No Profile Details Found
              </h3>
              <p className="text-slate-500 mx-auto">
                It looks like you haven't set up your personal details yet.{" "}
                <br />
                Complete your profile to get started.
              </p>
            </div>

            <button
              onClick={() => navigate("/profile/add-profile")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center gap-3 cursor-pointer group-hover:-translate-y-1"
            >
              <HiOutlineUserAdd className="text-2xl" />
              Add User Details
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full mt-2">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-indigo-900 uppercase tracking-wide">
              Personal Details
            </h2>
            <NavLink
              to={"/profile/add-profile"}
              state={userData}
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
                    {userData?.fullName}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.fullName)}
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
                  <span className="text-slate-700 font-medium truncate">
                    {userData?.contactNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.contactNumber)}
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
                    {userData?.gender}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.gender)}
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
                  <span className="text-slate-700 font-medium truncate">
                    {userData?.dob}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.dob)}
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
                  <span className="text-slate-700 font-medium truncate">
                    {userData?.age}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.age)}
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
                    {userData?.lang}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.lang)}
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
                    {userData?.country}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.country)}
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
                    {userData?.state}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.state)}
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
                    {userData?.city}
                  </span>
                  <button
                    onClick={() => handleCopy(userData?.city)}
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
                  {userData?.address}
                </span>
                <button
                  onClick={() => handleCopy(userData?.address)}
                  className="p-1 hover:bg-slate-200 rounded text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <HiOutlineDuplicate size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
