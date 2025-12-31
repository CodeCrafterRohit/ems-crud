import { updatePassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  HiOutlineLockClosed,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { AuthUserContext } from "../../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //! state for formData
  let [passwordFormData, setPasswordFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  let { password, confirmPassword } = passwordFormData;

  //! handleInputChange
  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setPasswordFormData({ ...passwordFormData, [name]: value });
  };

  //! handleSubmit
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //! Logic to update password
      if (password === confirmPassword) {
        await updatePassword(authUser, password);
        toast.success("New Password Updated Successfully");
        navigate("/profile");
      } else {
        toast.error("New Password does not matches with Confirm New Password");
      }
    } catch (error) {
      console.log("Error while updating password:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-2">
          <HiOutlineLockClosed className="text-5xl p-3 bg-indigo-100 rounded-2xl text-indigo-600" />
          Update your password
        </h2>
      </div>

      <div className="max-w-xl mx-auto bg-white p-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Min 6 characters"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 cursor-pointer"
              >
                {showNewPassword ? (
                  <HiOutlineEye size={20} />
                ) : (
                  <HiOutlineEyeOff size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <HiOutlineEye size={20} />
                ) : (
                  <HiOutlineEyeOff size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-bold text-indigo-600 uppercase mr-1">
                Note:
              </span>
              Password must be at least 6 characters long and include a mix of
              letters and numbers.
            </p>
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-30 rounded-2xl text-lg transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <HiOutlineShieldCheck className="text-xl" />
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
