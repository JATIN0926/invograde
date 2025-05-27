// components/TagsPopup.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "@/redux/slices/projectSlice";
import toast from "react-hot-toast";
import axiosInstance from "@/utils/axiosInstance";
import { toggleSidebar } from "@/redux/slices/sidebarSlice";
import { useRouter } from "next/navigation";

const TagsSection = ({ onClose }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tags = useSelector((state) => state.project.tags) || [];
  const ProjectData = useSelector((state) => state.project);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e) => {
    if (
      e.key === "Enter" &&
      tagInput.trim() &&
      !tags.includes(tagInput.trim()) &&
      tags.length < 5
    ) {
      const formattedTag = formatTag(tagInput); // save tag without `#`
      dispatch(addTag(formattedTag));
      setTagInput("");
    }
  };

  const formatTag = (input) => {
    return input.replace(/#/g, "").trim(); // remove all `#` symbols
  };

  function base64ToFile(base64, filename) {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const handleSubmit = async () => {
    if (!ProjectData.title?.trim()) {
      return toast.error("Title is required.");
    }

    if (!ProjectData.description?.trim()) {
      return toast.error("Description is required.");
    }

    if (!ProjectData.image) {
      return toast.error("Thumbnail image is required.");
    }

    if (!Array.isArray(ProjectData.skills) || ProjectData.skills.length === 0) {
      return toast.error("Please add at least one skill.");
    }

    if (!Array.isArray(ProjectData.tags) || ProjectData.tags.length === 0) {
      return toast.error("Please add at least one tag.");
    }

    if (
      !Array.isArray(ProjectData.categories) ||
      ProjectData.categories.length === 0
    ) {
      return toast.error("Please select at least one category.");
    }
    const toastId = toast.loading("Creating project...");
    const imageFile = base64ToFile(ProjectData.image, "upload.png");

    const formData = new FormData();

    for (const [key, value] of Object.entries(ProjectData)) {
      if (key === "image") continue;

      if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item); // Send as key[]
        });
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    }

    formData.append("thumbnail", imageFile);

    try {
      const response = await axiosInstance.post("/api/projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("response", response.data);
      if (response.data.success) {
        dispatch(toggleSidebar());
        toast.success("Project created! View it in your profile.", {
          id: toastId,
        });
        router.push("/profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add project.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="absolute inset-0 p-4 bg-white rounded-md border-2 border-[#3A3084] shadow-lg w-[65%] h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className=" relative p-4">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.2rem] font-PublicSans-Medium text-center text-[#141520]">
            Make your content reachable !
          </h2>

          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder={` ${
              tags.length >= 5
                ? "Max Tags reached"
                : "For example: #fashion #beauty #audience"
            } `}
            className="w-full border-none outline-none focus:ring-0 caret-purple-500 font-PublicSans-Medium text-[#3A3084] text-xl text-center"
          />

          <div className="flex flex-wrap gap-2 mt-2 items-center justify-center">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 text-[#3A3084] font-PublicSans-Regular text-[1.1rem]"
              >
                #{tag}
                <button
                  onClick={() => dispatch(removeTag(tag))}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#5446BC] text-white px-4 py-2 rounded-md hover:bg-[#4a3ea8] transition-colors self-end"
          >
            I’m Ready
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagsSection;
