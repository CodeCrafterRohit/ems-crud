import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineSave, HiOutlineUserCircle } from "react-icons/hi";
import Languages from "./json/languages.json";
import { Country, State, City } from "country-state-city";
import { doc, setDoc } from "firebase/firestore";
import { __DB } from "../../../backend/firebaseConfig";
import { AuthUserContext } from "../../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  let navigate = useNavigate();
  let { authUser } = useContext(AuthUserContext);
  let uid = authUser?.uid;

  //! State for userDetails
  let [userFormData, setUserFormData] = useState({
    fullName: "",
    contactNumber: "",
    gender: "",
    dob: "",
    age: "",
    lang: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });

  //! State for loading
  let [loading, setLoading] = useState(false);

  //! State for countryCode
  let [countryCode, setCountryCode] = useState("");

  //! State for stateCode
  let [stateCode, setStateCode] = useState("");

  //! Destructure the userFormData
  let {
    fullName,
    contactNumber,
    gender,
    dob,
    age,
    lang,
    country,
    state,
    city,
    address,
  } = userFormData;

  //! handleInputChange
  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //~ Storing the userFormData inside the firebase database
      //! Step-1: Create the document reference inside the database (firestore database)
      //? Syntax: db(db_instance, "collection_name", uid)

      let userDocRef = doc(__DB, "users_details", uid);

      //! Step-2: Create the payload (actual data which is sent to be the database)
      //~ Extracting the optional data which is sent with payload (email, photoURL, displayName, uid)
      let { email, photoURL, displayName } = authUser;

      let payload = {
        ...userFormData,
        email,
        photoURL,
        displayName,
        uid,
      };

      //! Step-3: Add the payload inside the database with help of setDoc() function
      //? Syntax: setDoc(db_ref, payload);
      //? Return Type: Promise
      await setDoc(userDocRef, payload);
      toast.success("User Details Added Successfully");
      navigate("/profile");
    } catch (error) {
      console.log("Error while adding user:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  //! Clear Form Data Logic
  let clearFormData = () => {
    setUserFormData({
      fullName: "",
      contactNumber: "",
      gender: "",
      dob: "",
      age: "",
      lang: "",
      country: "",
      state: "",
      city: "",
      address: "",
    });
  };
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mb-5 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-2">
          <HiOutlineUserCircle className="text-5xl" />
          Complete Your Profile
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
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
              value={contactNumber}
              name="contactNumber"
              onChange={handleInputChange}
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
                  checked={gender === "male"}
                  onChange={handleInputChange}
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
                  checked={gender === "female"}
                  onChange={handleInputChange}
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
                  checked={gender === "other"}
                  onChange={handleInputChange}
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
              value={dob}
              name="dob"
              onChange={handleInputChange}
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
              value={age}
              name="age"
              onChange={handleInputChange}
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
              list="languages"
              name="lang"
              value={lang}
              onChange={handleInputChange}
            />
            <datalist id="languages">
              {Languages.map((language, index) => {
                return <option key={index}>{language}</option>;
              })}
            </datalist>
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
              list="countries"
              value={country}
              name="country"
              onChange={(e) => {
                const selectedCountry = Country.getAllCountries().find(
                  (c) => c.name === e.target.value
                );
                setUserFormData({ ...userFormData, country: e.target.value });
                setCountryCode(selectedCountry?.isoCode || "");
                setStateCode("");
              }}
            />
            <datalist id="countries">
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.name} />
              ))}
            </datalist>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              State
            </label>
            <input
              type="text"
              placeholder="e.g. Gujarat"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
              list="states"
              value={state}
              name="state"
              onChange={(e) => {
                const selectedState = State.getStatesOfCountry(
                  countryCode
                ).find((s) => s.name === e.target.value);
                setUserFormData({ ...userFormData, state: e.target.value });
                setStateCode(selectedState?.isoCode || "");
              }}
            />
            <datalist id="states">
              {State.getStatesOfCountry(countryCode).map((state) => (
                <option key={state.isoCode} value={state.name} />
              ))}
            </datalist>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-indigo-900 uppercase ml-1">
              City
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 shadow-sm"
              list="cities"
              value={city}
              name="city"
              onChange={handleInputChange}
            />
            <datalist id="cities">
              {City.getCitiesOfState(countryCode, stateCode).map((city) => (
                <option key={city.name} value={city.name} />
              ))}
            </datalist>
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
            value={address}
            name="address"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="flex justify-end items-center gap-4 pt-6 border-t border-slate-100">
          <button
            onClick={clearFormData}
            type="button"
            className="px-8 py-3 rounded-xl font-bold bg-rose-500 hover:bg-rose-600 cursor-pointer text-white transition-all duration-200 ease-linear"
          >
            Clear
          </button>
          <button
            type="submit"
            className="px-12 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 cursor-pointer transition-all flex items-center gap-2"
          >
            <HiOutlineSave className="text-xl" />
            {loading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;
