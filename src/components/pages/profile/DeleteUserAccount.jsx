import React, { useContext, useState } from "react";
import { FaExclamationTriangle, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { deleteUser } from "firebase/auth";
import { AuthUserContext } from "../../../context/AuthContextProvider";

const DeleteUserAccount = () => {
  let { authUser } = useContext(AuthUserContext);

  const [confirmationText, setConfirmationText] = useState("");
  const [loading, setLoading] = useState(false);

  //! Requirement: Only enable button if user types "DELETE"
  const isDisabled = confirmationText !== "DELETE";

  const handleDelete = async () => {
    if (isDisabled) return;
    setLoading(true);
    try {
      //! Firebase Logic for permanently deleting account
      await deleteUser(authUser);
      toast.success("Account deleted successfully");
    } catch (error) {
      console.log("Error while deleting user account:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="bg-white border border-red-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-red-50 p-6 border-b border-red-100 flex items-center gap-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
            <FaExclamationTriangle size={30} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Delete Account
            </h2>
            <p className="text-sm text-red-600 font-medium">
              This action is permanent and cannot be undone.
            </p>
          </div>
        </div>

        <div className="px-8 py-4">
          <div className="space-y-4 mb-8">
            <p className="text-slate-600 text-sm leading-relaxed">
              Once you delete your account, all of your data, including
              projects, team history, and personal settings, will be{" "}
              <strong>permanently removed</strong> from our servers.
            </p>

            <ul className="text-xs text-slate-500 space-y-2 list-disc pl-5">
              <li>Immediate loss of access to the admin dashboard.</li>
              <li>Deletion of all associated employee profiles.</li>
              <li>Removal from all active billing cycles.</li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              To verify, type{" "}
              <span className="text-red-600 select-none">DELETE</span> below:
            </label>
            <input
              type="text"
              value={confirmationText}
              onChange={(e) => setConfirmationText(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none text-sm font-medium"
            />
          </div>
        </div>

        <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3">
          <button
            className="px-6 py-2 text-sm font-semibold text-slate-600 hover:text-green-600 hover:bg-green-100 rounded-lg transition-all duration-100"
            onClick={() => setConfirmationText("")}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isDisabled || loading}
            className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm
              ${
                isDisabled || loading
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-red-200"
              }`}
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <FaTrashAlt size={14} />
            )}
            {loading ? "Processing..." : "Permanently Delete Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserAccount;
