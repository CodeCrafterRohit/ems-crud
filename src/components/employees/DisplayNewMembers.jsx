import React from "react";
import { useEmployees } from "../../context/EmployeeProvider";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const DisplayNewMembers = () => {
  const allEmployeeList = useEmployees();

  //! Extract only the first 5 members
  const newMembers = allEmployeeList?.slice(0, 5) || [];

  return (
    <div className="pt-4 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {newMembers.map((emp, index) => (
          <div
            key={index}
            className="group bg-white border border-slate-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full p-1.5 bg-linear-to-tr from-indigo-50 to-slate-100 group-hover:from-indigo-100 group-hover:to-indigo-50 transition-colors duration-300">
                <img
                  src={emp?.eProfilePhoto || "https://via.placeholder.com/150"}
                  alt={emp?.eName}
                  className="w-full h-full object-cover rounded-full shadow-inner bg-white"
                />
              </div>
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full shadow-sm"></span>
            </div>

            <div className="space-y-1 mb-5">
              <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                {emp?.eName}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                {emp?.eRole}
              </p>
            </div>

            <div className="w-full pt-5 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-center gap-2.5 text-[12px] text-slate-600 font-medium">
                <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
                  <FaBriefcase
                    className="text-slate-400 group-hover:text-indigo-500"
                    size={12}
                  />
                </div>
                <span className="truncate">{emp?.eDept}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-normal">
                <FaCalendarAlt size={10} />
                <span>Joined {emp?.eJoiningDate}</span>
              </div>
            </div>
          </div>
        ))}

        {newMembers.length === 0 && (
          <div className="col-span-full py-16 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBriefcase className="text-slate-300" size={24} />
            </div>
            <p className="text-slate-500 font-medium">
              No new team members found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayNewMembers;
