import React, { useContext, useEffect, useState } from "react";
import { BackendUserContext } from "../../context/FetchUserContext";
import toast from "react-hot-toast";
import {
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaUserCircle,
  FaBriefcase,
} from "react-icons/fa";
import { MdEmail, MdMoreVert } from "react-icons/md";
import Modal from "../Modal";
import AddEmployeeModal from "../modals/AddEmployeeModal";
import EditEmployeeModal from "../modals/EditEmployeeModal";
import DeleteEmployeeModal from "../modals/DeleteEmployeeModal";
import ViewEmployeeModal from "../modals/ViewEmployeeModal";
import { __DB } from "../../backend/firebaseConfig";
import { useEmployees } from "../../context/EmployeeProvider";
import ExportActions from "../exports/ExportActions";
import Pagination from "../pagination/Pagination";

const Employees = () => {
  const { userData } = useContext(BackendUserContext);
  const allEmployeeList = useEmployees();

  //~ States for Add Employee
  //! State to control the visibility of the Add Modal
  let [isAddModalOpen, setIsAddModalOpen] = useState(false);
  //! Function to close the modal
  let handleCloseModal = () => setIsAddModalOpen(false);

  //~ States for Edit Employee
  //! State for edit Modal open or not
  let [isEditModalOpen, setIsEditModalOpen] = useState(false);
  //! State for which employee you want to update or edit
  let [selectedEmployee, setSelectedEmployee] = useState(null);

  //~ States for Delete Employee
  //! State to open the delete employee modal or not
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  //! State for which employee you want to delete
  let [targetEmployee, setTargetEmployee] = useState(null);

  //~ States for View Employee
  //! State to open view employee modal or not
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  //! State for which employee you want to view
  const [selectedViewEmployee, setSelectedViewEmployee] = useState(null);

  //! State for search employee by their name, email, or id
  let [searchTerm, setSearchTerm] = useState("");

  //! Filter the employees by their name, id, role, dept, status
  let filteredEmployeeList = allEmployeeList.filter((emp) => {
    let term = searchTerm.toLowerCase();

    return (
      emp?.eName?.toLowerCase().includes(term) ||
      emp?.eId?.toLowerCase().includes(term) ||
      emp?.eRole?.toLowerCase().includes(term) ||
      emp?.eDept?.toLowerCase().includes(term) ||
      emp?.eIsActive?.toLowerCase().includes(term)
    );
  });

  //! Function to handleEditClick
  let handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  };

  //! Function to openDeleteModal
  let openDeleteModal = (emp) => {
    setTargetEmployee(emp);
    setIsDeleteModalOpen(true);
  };

  //! Function to handleViewClick
  const handleViewClick = (emp) => {
    setSelectedViewEmployee(emp);
    setIsViewModalOpen(true);
  };

  //! State for selection
  const [selectedIds, setSelectedIds] = useState([]);

  //! Toggle Single Selection
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  //! Toggle Select All
  const handleSelectAll = () => {
    if (selectedIds.length === allEmployeeList?.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allEmployeeList.map((emp) => emp.eId));
    }
  };

  //! Filter data to send to exoprt
  const selectedDataForExport = allEmployeeList?.filter((emp) =>
    selectedIds.includes(emp.eId)
  );

  const [itemOffset, setItemOffset] = useState(0);
  //! Adjust this number as needed
  const itemsPerPage = 5;

  //! Calculate end offset
  const endOffset = itemOffset + itemsPerPage;
  //! This is the sliced list you will actually map over in your table
  const currentItems = filteredEmployeeList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredEmployeeList.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % filteredEmployeeList.length;
    setItemOffset(newOffset);
  };

  //! Reset to page 1 when searching
  useEffect(() => {
    setItemOffset(0);
  }, [searchTerm]);

  if (userData?.role !== "admin") {
    toast.error("Unauthorized Access!");
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-slate-400 font-medium text-lg">
          Verifying permissions...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Team Directory
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Displaying {filteredEmployeeList.length} total team members across
              all departments.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ExportActions selectedData={selectedDataForExport} />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-indigo-200 active:scale-[0.98] font-medium text-sm"
            >
              <FaPlus size={12} />
              Add New Employee
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
            <h2 className="text-base font-semibold text-slate-700">
              All Employees
            </h2>
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email or ID..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              />
              <FaSearch
                className="absolute left-3.5 top-3 text-slate-400"
                size={13}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-[11px] uppercase tracking-widest font-bold border-b border-slate-100">
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                        onChange={handleSelectAll}
                        checked={
                          allEmployeeList?.length > 0 &&
                          selectedIds.length === allEmployeeList?.length
                        }
                      />
                      <span>Employee Details</span>
                    </div>
                  </th>
                  <th className="px-6 py-4">Role & Department</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-center">Joined Date</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentItems.map((emp, index) => (
                  <tr
                    key={index}
                    className={`group hover:bg-slate-100/50 transition-colors ${
                      selectedIds.includes(emp.eId) ? "bg-indigo-50/50" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
                          checked={selectedIds.includes(emp.eId)}
                          onChange={() => handleSelect(emp.eId)}
                        />
                        <div className="relative w-10 h-10 rounded-full shrink-0">
                          <img
                            src={emp.eProfilePhoto}
                            alt="P"
                            className="w-full h-full object-cover rounded-full bg-slate-100"
                          />
                          <span
                            className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                              emp.eIsActive === "Active"
                                ? "bg-emerald-500"
                                : emp.eIsActive === "On Leave"
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                          ></span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm leading-tight">
                            {emp.eName}
                          </p>
                          <p className="text-slate-400 text-xs mt-1 font-medium">
                            {emp.eId}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        {emp.eRole}
                      </p>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-0.5">
                        <FaBriefcase size={10} />
                        {emp.eDept}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      {emp.eIsActive == "Active" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                          {emp.eIsActive}
                        </span>
                      ) : emp.eIsActive === "On Leave" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-100">
                          {emp.eIsActive}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-100">
                          {emp.eIsActive}
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-medium text-slate-600 italic">
                        {emp.eJoiningDate}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleViewClick(emp)}
                          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-md transition-all"
                        >
                          <FaEye size={15} />
                        </button>
                        <button
                          onClick={() => handleEditClick(emp)}
                          className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-100 rounded-md transition-all"
                        >
                          <FaEdit size={14} />
                        </button>
                        <button
                          onClick={() => openDeleteModal(emp)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-100 rounded-md transition-all"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                      <button className="sm:hidden text-slate-300">
                        <MdMoreVert size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 font-medium order-2 sm:order-1">
              Showing {itemOffset + 1} to{" "}
              {Math.min(endOffset, filteredEmployeeList.length)} of{" "}
              {filteredEmployeeList.length} entries
            </p>

            <div className="order-1 sm:order-2">
              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            </div>
          </div>
        </div>

        {/* AddEmployeeModal Passed as a children to the Modal */}
        <Modal
          isOpen={isAddModalOpen}
          onClose={handleCloseModal}
          title="Add New Employee"
        >
          <AddEmployeeModal onCancel={handleCloseModal} />
        </Modal>

        {/* EditEmployeeModal Passed as a children to the Modal */}
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Update Employee Information"
        >
          <EditEmployeeModal
            onCancel={() => setIsEditModalOpen(false)}
            employeeToEdit={selectedEmployee}
          />
        </Modal>

        {/* DeleteEmployeeModal Passed as a children to the Modal */}
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          title="Confirm Deletion"
        >
          <DeleteEmployeeModal
            onCancel={() => setIsDeleteModalOpen(false)}
            employeeToDelete={targetEmployee}
          />
        </Modal>

        {/* ViewEmployeeModal Passed as a children to the Modal */}
        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          title="Employee Profile"
        >
          <ViewEmployeeModal
            employee={selectedViewEmployee}
            onCancel={() => setIsViewModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Employees;
