"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDescription,
  setImage,
  setTitle,
  setSkills,
  setDomain,
  setCurrentStep,
  nextStep,
} from "@/redux/slices/projectSlice.js";

const AddProject = () => {
  const dispatch = useDispatch();
  const { description, image, currentStep, title, skills, domain } =
    useSelector((state) => state.project);
  const fileInputRef = useRef();
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImgChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      console.log("Base64", base64);

      dispatch(setImage(base64)); // Save the base64 string to Redux
      setPreviewUrl(base64); // Set preview URL locally for immediate feedback

      console.log("image",image)
      console.log("previewUrl",previewUrl)
    } else {
      dispatch(setImage(null));
      setPreviewUrl("");
    }
  };

  // Helper function to convert a file to a base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value));
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleSkillsChange = (e) => {
    dispatch(setSkills(e.target.value.split(","))); // Assuming a comma-separated list
  };

  useEffect(() => {
    if (image) {
      setPreviewUrl(image);
    } else {
      setPreviewUrl("");
    }
  }, [image]);
  const handleDomainChange = (e) => {
    dispatch(setDomain(e.target.value));
  };
  return (
    <div className="flex flex-col items-start justify-start flex-grow py-12 px-10 pl-16 overflow-y-auto relative">
      {/* File Upload Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImgChange}
        ref={fileInputRef}
        hidden
      />
      <div className="w-[95%] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-6 h-6 relative">
            <Image src="/icons/RedRocket.png" alt="RedRocket.png" fill />
          </div>
          <h1 className="text-[#3A3084] font-PublicSans-Medium text-[1.1rem]">
            Display your creations. Receive appreciation, and connect with
            communities
          </h1>
        </div>
        <button
          onClick={handleNext}
          className="bg-[#5446BC] px-3 p-1 text-white font-PublicSans-Medium flex items-center gap-2 rounded-lg"
        >
          <p>Next</p>
          <Image src="/icons/next.svg" width={20} height={20} alt="next" />
        </button>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center gap-5 w-[95%] py-10">
          <div
            className={` relative w-full h-[25rem] border-2 border-[#774FCC] hover:shadow-lg hover:shadow-[#774FCC] transition-all rounded-xl flex flex-col items-center gap-3`}
          >
            {image ? (
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={image || previewUrl} // Use Redux state or local state for preview
                  alt="uploaded file preview"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized // Add this attribute to handle base64 image correctly
                />
              </div>
            ) : (
              <div className="flex flex-col gap-7 w-full h-full justify-center items-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[6rem] h-[6rem] relative">
                    <Image src="/images/UploadFile.png" alt="uploadfile" fill />
                  </div>
                </div>
                <div className="flex flex-col items-center text-[#3A3084] font-PublicSans-Regular">
                  <h1 className="text-[1.2rem]">Drag & Drop file</h1>
                  <p>or</p>
                  <h2
                    className="underline cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Browse
                  </h2>
                </div>
                <p className="text-[0.9rem] font-PublicSans-Regular text-[#3A3084]">
                  png, jpg, jpeg, svg
                </p>
              </div>
            )}
            {currentStep === "title" && (
              <div className="bg-white p-6 rounded-lg w-[20%] flex flex-col items-center absolute z-20 inset-0">
                <h2 className="text-lg font-PublicSans-Medium mb-4">
                  Give it a Title
                </h2>
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Project Title"
                  className="border-2 p-2 w-full rounded"
                />
                <button
                  onClick={handleNext}
                  className="bg-[#5446BC] text-white p-2 mt-4 rounded"
                >
                  Next
                </button>
              </div>
            )}

            {currentStep === "skills" && (
              <div className="bg-white p-6 rounded-lg w-[20rem] flex flex-col items-center">
                <h2 className="text-lg font-PublicSans-Medium mb-4">
                  Skills Used
                </h2>
                <input
                  type="text"
                  value={skills.join(", ")}
                  onChange={handleSkillsChange}
                  placeholder="Enter skills, comma-separated"
                  className="border-2 p-2 w-full rounded"
                />
                <button
                  onClick={handleNext}
                  className="bg-[#5446BC] text-white p-2 mt-4 rounded"
                >
                  Next
                </button>
              </div>
            )}

            {currentStep === "domain" && (
              <div className="bg-white p-6 rounded-lg w-[60%] flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#3A3084]">
                <h2 className="text-lg font-PublicSans-Medium mb-4">
                  Choose Domain
                </h2>
                <input
                  type="text"
                  value={domain}
                  onChange={handleDomainChange}
                  placeholder="Domain"
                  className="border-2 p-2 w-full rounded"
                />
                <button
                  onClick={handleNext}
                  className="bg-[#5446BC] text-white p-2 mt-4 rounded"
                >
                  Finish
                </button>
              </div>
            )}
          </div>
          <textarea
            className="w-full border-[#787878] border-2 h-[12rem] rounded-lg p-4 text-[#3A3084] text-base font-PublicSans-Regular placeholder-[#787878] focus:outline-none transition-all resize-none"
            placeholder="Add details of your Project to make it more efficient and better"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
