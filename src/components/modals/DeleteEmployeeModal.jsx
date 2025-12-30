import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaExclamationTriangle } from "react-icons/fa";
import { __DB } from "../../backend/firebaseConfig";

const DeleteEmployeeModal = ({ onCancel, employeeToDelete }) => {
  //! State for Loading
  let [loading, setLoading] = useState(false);

  let handleDelete = async () => {
    setLoading(true);
    try {
      //! deleteDoc(id);
      let employeeToBeDeletedRef = doc(
        __DB,
        "employee_profiles",
        employeeToDelete.id
      );
      await deleteDoc(employeeToBeDeletedRef);
      toast.success(`${employeeToDelete.eName} has been removed.`);
      onCancel();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center py-4">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 animate-bounce-short">
        <FaExclamationTriangle className="text-red-600 text-3xl" />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">Are you sure?</h2>
      <p className="text-slate-500 max-w-sm mb-8">
        You are about to delete
        <span className="ml-1 font-bold text-slate-700">
          {employeeToDelete?.eName}.
        </span>
        <br />
        This action is permanent and cannot be undone.
      </p>

      <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
          {employeeToDelete?.eName?.charAt(0)}
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-slate-700">
            {employeeToDelete?.eName}
          </p>
          <p className="text-xs text-slate-500">
            {employeeToDelete?.eId} • {employeeToDelete?.eRole}
          </p>
        </div>
      </div>

      <div className="flex w-full gap-3">
        <button
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-slate-100 text-slate-600 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
        >
          No, Keep it
        </button>
        <button
          onClick={handleDelete}
          disabled={loading}
          className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 shadow-lg shadow-red-200 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? "Deleting..." : "Yes, Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteEmployeeModal;
