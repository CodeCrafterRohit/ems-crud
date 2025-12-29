import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800 uppercase">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-red-600 hover:bg-red-100 p-2 rounded-lg transition-colors"
          >
            <RiCloseCircleFill />
          </button>
        </div>

        <div className="p-6 max-h-[90vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
