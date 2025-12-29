import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { __DB } from "../../backend/firebaseConfig";
import axios from "axios";

const AddEmployeeModal = ({ onCancel }) => {
  //! Logic to generate the Auto-ID
  const generateEmsId = () => `EMS-${Math.floor(1000 + Math.random() * 9000)}`;

  //! To access the today's date
  const today = new Date().toISOString().split("T")[0];

  //! State for Loading
  let [loading, setLoading] = useState(false);

  const [employeeDetails, setEmployeeDetails] = useState({
    eId: generateEmsId(),
    eName: "",
    eMail: "",
    ePhone: "",
    eGender: "",
    eDob: "",
    eRole: "",
    eDept: "",
    eSalary: "",
    eAge: "",
    eProfilePhoto: null,
    eIsActive: "Active",
    eJoiningDate: today,
    eCreatedAt: serverTimestamp(),
    eAddress: "",
  });

  //! Destructure the employeeDetails
  let {
    eId,
    eName,
    eMail,
    ePhone,
    eGender,
    eDob,
    eRole,
    eDept,
    eSalary,
    eAge,
    eProfilePhoto,
    eIsActive,
    eJoiningDate,
    eAddress,
  } = employeeDetails;

  //! Calculate Age Logic Based on DOB.
  useEffect(() => {
    if (eDob) {
      const birthDate = new Date(eDob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setEmployeeDetails({ ...employeeDetails, eAge: age > 0 ? age : 0 });
    }
  }, [eDob]);

  //! handleInputChange for all fields except file
  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prev) => ({ ...prev, [name]: value }));
  };

  //! handleFileChange for file
  let handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployeeDetails((prev) => ({ ...prev, eProfilePhoto: file }));

      //! Optional: file size for validation
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size is too large. (Max 5MB)");
        return;
      }
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //! Uploading the employee profile photo on cloudinary
      //! Now we will convert the image into the binary64 with the help of FormData() API
      //* Step-1: Create the object or instance of the FormData() API.
      let fileData = new FormData();

      //* Step-2: Attach the file to the fileData with the help of .append()
      //? Syntax: append(name, value);
      fileData.append("file", eProfilePhoto);
      fileData.append("upload_preset", "user_profiles");
      //! Change your cloud name instead of my cloud name
      fileData.append("cloud_name", "rohitadhav");

      //* Step-3: Send the fileData to the cloundinary
      let imageData = await axios.post(
        "https://api.cloudinary.com/v1_1/rohitadhav/image/upload",
        fileData
      );

      let uploadedEmployeeImageUrl = imageData?.data?.url;

      //! Create the payload
      let payload = {
        ...employeeDetails,
        eProfilePhoto: uploadedEmployeeImageUrl,
      };

      //! Now we will store the payload (employeeDetails + URL) inside the firebase

      //* Step-1: Create the collection -> employee_profiles
      let employeeCollectionRef = collection(__DB, "employee_profiles");

      //* Step-2: Store the document inside the collection
      await addDoc(employeeCollectionRef, payload);

      console.log("Final Employee Data:", employeeDetails);
      toast.success("New Employee Added Successfully");
      setTimeout(() => {
        onCancel();
      }, 500);
    } catch (error) {
      console.log("Error while adding employee:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const labelStyle =
    "text-[12px] font-bold text-slate-600 uppercase tracking-tight";
  const inputStyle =
    "w-full p-2 text-sm bg-slate-50 border border-slate-200 rounded-md focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all";

  const selectStyle = `${inputStyle} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fxml%3E')] bg-[length:10px_auto] bg-[right_10px_center] bg-no-repeat`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        <div className="space-y-1">
          <label className={labelStyle}>Employee ID</label>
          <input
            name="eId"
            type="text"
            value={eId}
            readOnly
            className={`${inputStyle} bg-slate-100 text-indigo-600 font-mono font-bold cursor-not-allowed`}
          />
        </div>
        <div className="space-y-1">
          <label className={labelStyle}>Full Name</label>
          <input
            name="eName"
            type="text"
            value={eName}
            onChange={handleInputChange}
            className={inputStyle}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Email Address</label>
          <input
            name="eMail"
            type="email"
            value={eMail}
            onChange={handleInputChange}
            className={inputStyle}
            placeholder="john@company.com"
            required
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Phone Number</label>
          <input
            name="ePhone"
            type="text"
            value={ePhone}
            onChange={handleInputChange}
            className={inputStyle}
            placeholder="+1 234 567 890"
            required
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Date of Birth</label>
          <input
            name="eDob"
            type="date"
            value={eDob}
            onChange={handleInputChange}
            className={inputStyle}
            required
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Age</label>
          <input
            name="eAge"
            type="number"
            value={eAge}
            readOnly
            className={`${inputStyle} bg-slate-100 cursor-not-allowed`}
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Gender</label>
          <select
            name="eGender"
            value={eGender}
            onChange={handleInputChange}
            className={selectStyle}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Department</label>
          <select
            name="eDept"
            value={eDept}
            onChange={handleInputChange}
            className={selectStyle}
          >
            <option value="">Select Dept</option>
            <option value="IT">IT</option>
            <option value="Product">Product</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Job Role</label>
          <select
            name="eRole"
            value={eRole}
            onChange={handleInputChange}
            className={selectStyle}
            required
          >
            <option value="">Select Role</option>

            <optgroup label="Management">
              <option value="Manager">Manager</option>
              <option value="Team Lead">Team Lead</option>
            </optgroup>

            <optgroup label="Engineering">
              <option value="Software Engineer">Software Engineer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="QA Engineer">QA Engineer</option>
            </optgroup>

            <optgroup label="Product & Design">
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Graphic Designer">Graphic Designer</option>
            </optgroup>

            <optgroup label="Operations">
              <option value="HR Specialist">HR Specialist</option>
              <option value="Sales Executive">Sales Executive</option>
            </optgroup>
          </select>
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Salary (Annual)</label>
          <input
            name="eSalary"
            type="number"
            value={eSalary}
            onChange={handleInputChange}
            className={inputStyle}
            placeholder="50000"
            required
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Joining Date</label>
          <input
            name="eJoiningDate"
            type="date"
            value={eJoiningDate}
            onChange={handleInputChange}
            className={inputStyle}
          />
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Status</label>
          <select
            name="eIsActive"
            value={eIsActive}
            onChange={handleInputChange}
            className={selectStyle}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className={labelStyle}>Profile Photo</label>
          <input
            name="eProfilePhoto"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={`${inputStyle} file:mr-4 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100`}
            required
          />
        </div>

        <div className="lg:col-span-2 space-y-1">
          <label className={labelStyle}>Residential Address</label>
          <input
            name="eAddress"
            type="text"
            value={eAddress}
            onChange={handleInputChange}
            className={inputStyle}
            placeholder="Street, City, State, Zip"
            required
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
        <button
          onClick={onCancel}
          className="px-6 py-2 text-sm text-red-600 font-semibold hover:bg-red-50 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button className="px-8 py-2 text-sm bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95">
          {loading ? "Saving..." : "Save Employee"}
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeModal;
