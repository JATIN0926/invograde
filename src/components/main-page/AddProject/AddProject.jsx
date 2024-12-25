"use client";
import Image from "next/image";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css"; // Add Draft.js styles
import TitleSection from "./TitleSection";
import SkillsSection from "./SkillsSection";
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
import DomainSection from "./DomainSection";
import TagsSection from "./TagsSection";

const AddProject = () => {
  const dispatch = useDispatch();
  const { description, image, currentStep, title, skills, domain } =
    useSelector((state) => state.project);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const fileInputRef = useRef();
  const [previewUrl, setPreviewUrl] = useState("");
  const textAreaRef = useRef();

  const saveDescription = () => {
    const content = editorState.getCurrentContent();
    const plainText = content.getPlainText(); // Convert content to plain text
    dispatch(setDescription(plainText));
  };

  const handleImgChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      console.log("Base64", base64);

      dispatch(setImage(base64)); // Save the base64 string to Redux
      setPreviewUrl(base64); // Set preview URL locally for immediate feedback

      console.log("image", image);
      console.log("previewUrl", previewUrl);
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

  const handleFormatting = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleAlignment = (alignment) => {
    setEditorState(RichUtils.toggleBlockType(editorState, alignment));
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

  const handleSkillsChange = (updatedSkills) => {
    dispatch(setSkills(updatedSkills));
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

  const handleClose = () => {
    dispatch(setCurrentStep(null)); // or set to "" based on your logic
  };

  const applyTextFormat = (format) => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0); // Get the current range

    if (range && !selection.isCollapsed) {
      // Text is selected
      const wrapper = document.createElement(format === "bold" ? "b" : "i");

      // Check if the range already has the format
      const parent = selection.anchorNode.parentElement;
      if (
        (format === "bold" && parent.tagName === "B") ||
        (format === "italic" && parent.tagName === "I")
      ) {
        // Remove formatting
        const formattedText = parent.innerHTML;
        parent.replaceWith(document.createTextNode(formattedText));
      } else {
        // Apply formatting
        range.surroundContents(wrapper);
      }
    } else {
      // No text is selected, apply to whole content
      const currentContent = textAreaRef.current.innerHTML;
      if (format === "bold") {
        // Check if already bold
        if (textAreaRef.current.innerHTML.startsWith("<b>")) {
          textAreaRef.current.innerHTML = currentContent.replace(/<\/?b>/g, "");
        } else {
          textAreaRef.current.innerHTML = `<b>${currentContent}</b>`;
        }
      } else if (format === "italic") {
        // Check if already italic
        if (textAreaRef.current.innerHTML.startsWith("<i>")) {
          textAreaRef.current.innerHTML = currentContent.replace(/<\/?i>/g, "");
        } else {
          textAreaRef.current.innerHTML = `<i>${currentContent}</i>`;
        }
      }
    }

    // Update Redux store
    dispatch(setDescription(textAreaRef.current.innerHTML));
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
              <div className="relative w-full h-full overflow-hidden rounded-xl group">
                <Image
                  src={image || previewUrl} // Use Redux state or local state for preview
                  alt="uploaded file preview"
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Hover Overlay */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => fileInputRef.current.click()}
                >
                  <div className="w-full h-full flex items-center justify-center gap-3 ">
                    <p className="text-white text-lg font-PublicSans-Medium">
                      Browse/Change Your File
                    </p>
                    <Image
                      src="/icons/img_edit_icon.png"
                      alt="uploaded file preview"
                      width={30}
                      height={30}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
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
              <TitleSection
                title={title}
                onTitleChange={handleTitleChange}
                onNext={handleNext}
                onClose={handleClose}
              />
            )}

            {currentStep === "skills" && (
              <SkillsSection
                skills={skills}
                onSkillsChange={handleSkillsChange}
                onNext={handleNext}
                onClose={handleClose}
              />
            )}

            {currentStep === "domain" && (
              <DomainSection onNext={handleNext} onClose={handleClose} />
            )}
            {currentStep === "tags" && (
              <TagsSection onNext={handleNext} onClose={handleClose} />
            )}
          </div>
          <div className="relative h-[15rem] w-full">
            {/* Draft.js Text Editor */}
            <div className="border-2 border-[#3A3084] rounded-lg p-4 text-[#3A3084] h-[70%] overflow-y-auto">
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                onBlur={saveDescription}
              />
            </div>
            {/* Formatting Toolbar */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <Image
                src="/icons/bold.png"
                alt="bold"
                width={35}
                height={35}
                className="cursor-pointer"
                onClick={() => handleFormatting("BOLD")}
              />
              <Image
                src="/icons/italic.png"
                alt="italic"
                width={20}
                height={5}
                className="cursor-pointer"
                onClick={() => handleFormatting("ITALIC")}
              />
              <Image
                src="/icons/underline.png"
                alt="underline"
                width={30}
                height={30}
                className="cursor-pointer"
                onClick={() => handleFormatting("UNDERLINE")}
              />
              <Image
                src="/icons/align-left.png"
                alt="align-left"
                width={30}
                height={30}
                className="cursor-pointer"
                onClick={() => handleAlignment("left")}
              />
              <Image
                src="/icons/align-center.png"
                alt="align-center"
                width={30}
                height={30}
                className="cursor-pointer"
                onClick={() => handleAlignment("center")}
              />
              <Image
                src="/icons/align-right.png"
                alt="align-right"
                width={30}
                height={30}
                className="cursor-pointer"
                onClick={() => handleAlignment("right")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
