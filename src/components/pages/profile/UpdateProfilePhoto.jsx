import axios from "axios";
import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineCamera, HiOutlineCloudUpload } from "react-icons/hi";
import { AuthUserContext } from "../../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfilePhoto = () => {
  let navigate = useNavigate();
  let { authUser } = useContext(AuthUserContext);

  let [loading, setLoading] = useState(false);
  //! State for photoFile
  let [photoFile, setPhotoFile] = useState(null);

  //! State for photoPreview
  let [photoPreview, setPhotoPreview] = useState(null);

  //! handleInputChange
  let handleInputChange = (e) => {
    let file = e.target.files[0];

    //~ If file is present then only we will set the photoFile and photoPreview.
    if (file) {
      setPhotoFile(file);
      //! URL.createObjectURL(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!photoFile) {
        toast.error("Please select a file first.");
        return;
      }

      //! Now we will convert the image into the binary64 with the help of FormData() API
      //* Step-1: Create the object or instance of the FormData() API.
      let fileData = new FormData();

      //* Step-2: Attach the file to the fileData with the help of .append()
      //? Syntax: append(name, value);
      fileData.append("file", photoFile);
      fileData.append("upload_preset", "user_profiles");
      fileData.append("cloud_name", "rohitadhav");

      //* Step-3: Send the fileData to the cloundinary
      let imageData = await axios.post(
        "https://api.cloudinary.com/v1_1/rohitadhav/image/upload",
        fileData
      );
      // console.log(imageData);
      let uploadedImageUrl = imageData?.data?.url;
      console.log(uploadedImageUrl);

      //* Step-4: Set the uploadedImageUrl to the updateProfile -> photoURL
      await updateProfile(authUser, {
        photoURL: uploadedImageUrl,
      });

      toast.success("Profile Photo Updated Successfully");
      navigate("/profile");
    } catch (error) {
      console.log("Error While Updating Profile Photo:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
            {photoPreview === null ? (
              <>
                <HiOutlineCamera className="text-5xl text-slate-300 transition-transform group-hover:scale-110 duration-300" />
                <span className="text-slate-400 font-medium text-sm text-center px-6">
                  Preview will appear here
                </span>
              </>
            ) : (
              <div className="relative w-full h-full animate-in fade-in zoom-in duration-300">
                <img
                  className="w-full h-full object-fill rounded-full border-2 border-indigo-50 shadow-inner"
                  src={photoPreview}
                  alt="User preview"
                />
                <div className="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            )}
          </div>

          <div className="absolute bottom-2 right-6 bg-indigo-600 p-3 rounded-full border-4 border-white text-white shadow-lg">
            <HiOutlineCloudUpload size={20} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-6 w-full max-w-md">
            <label className="block text-indigo-900 text-sm font-bold uppercase mb-2 ml-1 text-center">
              Select an image from your device
            </label>

            <div className="w-full p-2 bg-slate-50 border-2 border-slate-100 rounded-2xl flex items-center gap-3">
              <label className="bg-indigo-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-indigo-700 transition-all font-semibold shadow-md shadow-indigo-100">
                Choose File
                <input
                  onChange={handleInputChange}
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
              <span className="text-slate-500 font-medium truncate">
                {photoFile ? photoFile?.name : "No file chosen"}
              </span>
            </div>

            <p className="text-center text-slate-400 text-xs mt-4">
              Supported formats: JPG, PNG, JPEG, WEBP (Max 5MB)
            </p>

            <button className="w-full mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all shadow-xl shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
              <HiOutlineCloudUpload className="text-2xl" />
              {loading ? "Uploading..." : "Update Profile Photo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePhoto;
