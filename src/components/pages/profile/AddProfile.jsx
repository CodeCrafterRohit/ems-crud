import React from "react";
import { HiOutlineSave, HiOutlineUserCircle } from "react-icons/hi";

const AddProfile = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-2">
          <HiOutlineUserCircle className="text-5xl" />
          Complete Your Profile
        </h2>
      </div>

      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-900 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Gender
            </label>
            <div className="flex gap-6 items-center px-4 py-3 rounded-xl border border-slate-300 bg-white shadow-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="w-5 h-5 cursor-pointer accent-indigo-600 transition-all"
                />
                <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                  Male
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="w-5 h-5 cursor-pointer accent-indigo-600 transition-all"
                />
                <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                  Female
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="w-5 h-5 cursor-pointer accent-indigo-600 transition-all"
                />
                <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                  Other
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 cursor-pointer shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Age
            </label>
            <input
              type="number"
              placeholder="Years"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Preferred Language
            </label>
            <input
              type="text"
              placeholder="e.g. Gujarati, English"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Country
            </label>
            <input
              type="text"
              placeholder="India"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              State
            </label>
            <input
              type="text"
              placeholder="e.g. Gujarat"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              City
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
            Residential Address
          </label>
          <textarea
            placeholder="Enter your full home address here..."
            rows="2"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 resize-none shadow-sm"
          ></textarea>
        </div>

        <div className="flex justify-end items-center gap-4 pt-6 border-t border-slate-100">
          <button
            type="reset"
            className="px-8 py-3 rounded-xl font-bold bg-rose-500 hover:bg-rose-600 cursor-pointer text-white transition-all duration-200 ease-linear"
          >
            Clear
          </button>
          <button
            type="submit"
            className="px-12 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 cursor-pointer transition-all flex items-center gap-2"
          >
            <HiOutlineSave className="text-xl" />
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;
