import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MyProjects from "../MyProjects/MyProjects";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";
import { setUser } from "@/redux/slices/userSlice";

const ProfilePage = ({ isOpen }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const user = useSelector((state) => state.user.user);

  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState("");
  const [careerType, setCareerType] = useState("");
  const [gender, setGender] = useState("");
  const [isStudent, setIsStudent] = useState("");
  const [resumeData, setResumeData] = useState(user?.resume || null);

  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/api/profile");

      if (res.data.success) {
        const u = res.data.data.user;
        dispatch(setUser(u));
        setUsername(u.username || "");
        setCareerType(u.careerType || "");
        setGender(u.gender || "");
        setIsStudent(u.isStudent || "");
        setResumeData(u.resume || null);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed To load User Details , Please Reload!");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSaveOrEdit = async () => {
    if (isEditing) {
      const toastId = toast.loading("Updating profile...");

      try {
        const payload = {
          fullName: username,
          specialization: careerType,
          gender,
          isStudent,
        };

        const res = await axiosInstance.put("/api/profile", payload);

        if (res.data.success) {
          toast.success("Profile updated successfully", { id: toastId });
          dispatch(setUser(res.data.data));
        } else {
          toast.error(res.data.message || "Update failed", { id: toastId });
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
    }

    setIsEditing((prev) => !prev);
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (!file) return;

    const toastId = toast.loading("Uploading resume...");

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const res = await axiosInstance.post(
        "/api/profile/upload/resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("res", res.data);

      if (res.data.success) {
        toast.success("Resume uploaded successfully", { id: toastId });
        setResumeData(res.data.data.resume);
        dispatch(
          setUser((prev) => ({ ...prev, resume: res.data.data.resume }))
        );
      } else {
        toast.error(res.data.message || "Upload failed", { id: toastId });
      }
    } catch (err) {
      toast.error("Error uploading resume", { id: toastId });
    }
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-[80%]" : "w-full"
      } p-10 flex flex-col gap-8 overflow-y-auto z-[40]`}
    >
      <div className="flex flex-col items-start justify-center gap-6">
        <h1>Welcome, {user?.username || "User"}!</h1>

        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-20 relative cursor-pointer">
              <Image src="/images/ProfileAvatar.png" alt="ProfileAvatar" fill />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="font-PublicSans-SemiBold text-[1.2rem]">
                {user?.username}
              </h2>
              <h3 className="font-PublicSans-Regular text-[0.9rem] text-gray-600">
                {user?.email}
              </h3>
            </div>
          </div>
          <button
            onClick={handleSaveOrEdit}
            className="bg-[#774FCC] px-8 p-2 text-white font-PublicSans-Light text-[0.87rem] flex items-center gap-2 rounded-lg"
          >
            <p>{isEditing ? "Save" : "Edit"}</p>
          </button>
        </div>

        {/* Form */}
        <div className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-y-7 gap-x-16 w-full font-PublicSans-Medium">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">Full Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                readOnly={!isEditing}
                placeholder="Your First Name"
                className={`w-full p-3 rounded-lg bg-[#F9F9F9] ${
                  isEditing ? "text-black" : "text-gray-500"
                } outline-none border-none placeholder:text-[0.9rem] placeholder:font-light`}
              />
            </div>

            {/* Specialization */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">
                Specialization
              </label>
              <input
                type="text"
                value={careerType}
                onChange={(e) => setCareerType(e.target.value)}
                readOnly={!isEditing}
                placeholder="Designer/ Developer"
                className={`w-full p-3 rounded-lg bg-[#F9F9F9] ${
                  isEditing ? "text-black" : "text-gray-500"
                } outline-none border-none placeholder:text-[0.9rem] placeholder:font-light`}
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={!isEditing}
                className="w-full p-3 rounded-lg bg-[#F9F9F9] text-gray-500 outline-none border-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Student */}
            <div className="flex flex-col">
              <label className="text-gray-800 text-[0.9rem]">
                Are you a student?
              </label>
              <select
                value={isStudent}
                onChange={(e) => setIsStudent(e.target.value)}
                disabled={!isEditing}
                className="w-full p-3 rounded-lg bg-[#F9F9F9] text-gray-500 outline-none border-none"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className="text-gray-800 text-[0.9rem] font-PublicSans-Regular">
            My Resume
          </h2>
          {resumeData ? (
            <div className="border-[#774FCC] bg-[#F9F9F9] p-6 rounded-lg flex flex-col items-center justify-center gap-3 text-center font-PublicSans-Regular border-2 border-dashed">
              <div className="text-5xl text-[#774FCC]">
                📄{" "}
                {/* or use react-icons like <FiFileText /> from react-icons/fi */}
              </div>
              <p className="text-gray-800 text-[0.9rem]">
                {resumeData.filename}
              </p>
              <a
                href={resumeData.s3Url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5446BC] text-sm underline"
              >
                View / Download
              </a>
            </div>
          ) : (
            <div
              className="border-[#774FCC] bg-[#F9F9F9] p-6 rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer text-center font-PublicSans-Regular border-2 border-dashed"
              onClick={handleFileUploadClick}
            >
              <div className="relative h-7 w-7">
                <Image src="/icons/file_icon.png" alt="Upload Icon" fill />
              </div>
              <p className="text-[0.9rem]">
                <span className="text-[#5446BC]">Click to upload</span> or Drag
                & Drop
              </p>
              <p className="text-gray-400 text-[0.9rem]">
                PDF, DOC, or DOCX (max 5MB)
              </p>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleResumeUpload}
          />

          {!resumeData && (
            <p className="text-black text-[0.9rem] font-PublicSans-Regular text-center">
              Don’t have a PDF file?{" "}
              <span className="text-[#5446BC] cursor-pointer hover:underline">
                <a href="/profile/create-resume">Create Resume</a>
              </span>
            </p>
          )}
        </div>
      </div>

      <MyProjects />
    </div>
  );
};

export default ProfilePage;
