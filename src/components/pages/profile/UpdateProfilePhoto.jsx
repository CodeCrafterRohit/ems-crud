import React from "react";
import { HiOutlineCamera, HiOutlineCloudUpload } from "react-icons/hi";

const UpdateProfilePhoto = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-2">
          <HiOutlineCamera className="text-5xl" />
          Update Profile Photo
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center bg-white rounded-3xl px-10 py-5">
        <div className="relative group">
          <div className="w-56 h-56 rounded-full border-4 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-indigo-300">
            <HiOutlineCamera className="text-5xl text-slate-300" />
            <span className="text-slate-400 font-medium text-sm text-center px-6">
              Preview will appear here
            </span>
          </div>

          <div className="absolute bottom-2 right-6 bg-indigo-600 p-3 rounded-full border-4 border-white text-white shadow-lg">
            <HiOutlineCloudUpload size={20} />
          </div>
        </div>

        <div className="mt-6 w-full max-w-md">
          <label className="block text-indigo-900 text-sm font-bold uppercase mb-2 ml-1 text-center">
            Select an image from your device
          </label>

          <div className="w-full p-2 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center gap-3">
            <label className="bg-indigo-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-indigo-700 transition-all font-semibold shadow-md shadow-indigo-100">
              Choose File
              <input type="file" className="hidden" accept="image/*" />
            </label>
            <span className="text-slate-500 font-medium truncate">
              No file chosen
              {/* Here we have to write ternary logic, file is present name of the file otherwise no file chosen */}
            </span>
          </div>

          <p className="text-center text-slate-400 text-xs mt-4">
            Supported formats: JPG, PNG, JPEG (Max 2MB)
          </p>

          <button className="w-full mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
            <HiOutlineCloudUpload className="text-2xl" />
            Update Profile Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePhoto;
