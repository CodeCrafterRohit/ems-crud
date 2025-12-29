import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaIdBadge,
  FaMoneyBillWave,
  FaBirthdayCake,
  FaVenusMars,
} from "react-icons/fa";

const ViewEmployeeModal = ({ employee, onCancel }) => {
  if (!employee) return null;

  //! Destructure the employee
  let {
    eId,
    eName,
    eMail,
    eRole,
    eDept,
    eGender,
    eDob,
    eAge,
    eIsActive,
    eAddress,
    eJoiningDate,
    eProfilePhoto,
  } = employee;

  const InfoBlock = ({
    icon: Icon,
    label,
    value,
    color = "text-slate-400",
  }) => (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
      <div className={`mt-1 ${color}`}>
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-700">{value || "N/A"}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-slate-100">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-100 overflow-hidden">
            {eProfilePhoto ? (
              <img
                src={eProfilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              eName?.charAt(0)
            )}
          </div>
          <div
            className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-[10px] font-bold border-2 border-white shadow-sm ${
              eIsActive === "Active"
                ? "bg-emerald-500 text-white"
                : "bg-slate-400 text-white"
            }`}
          >
            {eIsActive}
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-slate-800">{eName}</h2>
          <p className="text-indigo-600 font-medium">{eRole}</p>
          <p className="text-slate-400 text-sm mt-1 flex items-center justify-center md:justify-start gap-1">
            <FaIdBadge size={12} /> {eId}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-1">
          <h3 className="px-3 text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-2">
            Work Information
          </h3>
          <InfoBlock
            icon={FaBuilding}
            label="Department"
            value={eDept}
            color="text-blue-500"
          />
          <InfoBlock
            icon={FaCalendarAlt}
            label="Joining Date"
            value={eJoiningDate}
            color="text-orange-500"
          />
          <InfoBlock
            icon={FaMoneyBillWave}
            label="Salary (Annual)"
            value={`$${Number(eSalary).toLocaleString()}`}
            color="text-emerald-500"
          />
        </div>

        <div className="space-y-1">
          <h3 className="px-3 text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-2">
            Contact Details
          </h3>
          <InfoBlock
            icon={FaEnvelope}
            label="Official Email"
            value={eMail}
            color="text-red-500"
          />
          <InfoBlock
            icon={FaPhone}
            label="Phone Number"
            value={ePhone}
            color="text-green-500"
          />
          <InfoBlock
            icon={FaMapMarkerAlt}
            label="Address"
            value={eAddress}
            color="text-purple-500"
          />
        </div>

        <div className="space-y-1">
          <h3 className="px-3 text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-2">
            Personal Details
          </h3>
          <InfoBlock
            icon={FaBirthdayCake}
            label="Date of Birth"
            value={`${eDob} (Age: ${eAge})`}
            color="text-pink-500"
          />
          <InfoBlock
            icon={FaVenusMars}
            label="Gender"
            value={eGender}
            color="text-indigo-500"
          />
          <InfoBlock
            icon={FaUser}
            label="Employment Type"
            value="Full-Time"
            color="text-slate-500"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 flex justify-end">
        <button
          onClick={onCancel}
          className="px-8 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
        >
          Close Profile
        </button>
      </div>
    </div>
  );
};

export default ViewEmployeeModal;
