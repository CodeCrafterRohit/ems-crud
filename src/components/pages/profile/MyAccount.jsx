import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
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

  let handleCopy = (value) => {
    if (!value) return;
    window.navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12">
      <header className="relative w-full h-38 bg-linear-to-r from-indigo-600 to-indigo-500 rounded-3xl shadow-sm mb-10">
        <div className="absolute top-3 left-10 flex items-center gap-6">
          <div className="relative w-32 h-32">
            <img
              src={authUser?.photoURL}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl bg-slate-100"
            />
            <NavLink
              to={"/profile/update-photo"}
              className="absolute -bottom-1 -right-1 p-2 bg-white text-indigo-600 rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white border border-slate-100 hover:border-white transition-all"
            >
              <TbPhotoEdit size={18} />
            </NavLink>
          </div>
          <div className="mb-2">
            <h1 className="text-4xl font-extrabold text-white mb-1">
              {authUser?.displayName}
            </h1>
            <p className="text-white/90 font-medium text-sm flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </span>

              {authUser?.email}
            </p>
          </div>
        </div>
      </header>

      {userData == null ? (
        <div className="w-full max-w-2xl mx-auto mt-10 text-center p-10 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <HiOutlineUserAdd className="text-5xl text-slate-200 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-800 mb-6">
            Setup Your Profile
          </h3>
          <button
            onClick={() => navigate("/profile/add-profile")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
          >
            Add User Details
          </button>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl uppercase font-bold text-indigo-800">
              Personal Details
            </h3>
            <NavLink
              to={"/profile/add-profile"}
              state={userData}
              className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-indigo-700 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-200 transition-all font-bold text-sm shadow-sm"
            >
              <FaEdit />
              <span>Edit Details</span>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Name", value: userData?.fullName },
              { label: "Contact", value: userData?.contactNumber },
              { label: "Gender", value: userData?.gender },
              { label: "DOB", value: userData?.dob },
              { label: "Age", value: userData?.age },
              { label: "Lang", value: userData?.lang },
              { label: "Country", value: userData?.country },
              { label: "State", value: userData?.state },
              { label: "City", value: userData?.city },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-stretch bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-all shadow-sm"
              >
                <span className="flex items-center justify-center font-bold text-xs uppercase text-white bg-indigo-600 w-22 shrink-0">
                  {item.label}
                </span>
                <div className="flex justify-between items-center w-full px-4 py-3">
                  <span className="text-slate-700 font-semibold text-sm truncate">
                    {item.value || "—"}
                  </span>
                  <button
                    onClick={() => handleCopy(item.value)}
                    className="p-1.5 text-indigo-500 opacity-0 group-hover:opacity-100 hover:bg-indigo-50 rounded-md transition-all cursor-pointer"
                  >
                    <HiOutlineDuplicate size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="group mt-4 flex items-stretch bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-all shadow-sm">
            <span className="flex items-center justify-center font-bold text-xs uppercase text-white bg-indigo-600 w-22 shrink-0">
              Address
            </span>
            <div className="flex justify-between items-center w-full px-4 py-4">
              <span className="text-slate-700 font-semibold text-sm leading-relaxed">
                {userData?.address}
              </span>
              <button
                onClick={() => handleCopy(userData?.address)}
                className="p-2 text-indigo-500 opacity-0 group-hover:opacity-100 hover:bg-indigo-50 rounded-md transition-all cursor-pointer ml-4"
              >
                <HiOutlineDuplicate size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
