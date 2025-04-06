"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddSkillsModal from "./AddSkillsModal";
import AddEducationModal from "./AddEducationModal";
import AddWorkModal from "./AddWorkModal";
import AddCertificationsModal from "./AddCertificationsModal";
import { useDispatch, useSelector } from "react-redux";
import {
  openEducationModal,
  openSkillsModal,
  removeCertification,
  removeEducation,
  removeSkill,
  removeWorkExperience,
} from "@/redux/slices/modalSlice"; // <-- Make sure removeSkill is defined in slice

const CreateResume = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingWork, setIsEditingWork] = useState(false);
  const [isEditingCerts, setIsEditingCerts] = useState(false);

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.modal.data?.skills || []);
  const education = useSelector((state) => state.modal.data?.education || []);
  const workExperience = useSelector(
    (state) => state.modal.data?.workExperience || []
  );
  const certifications = useSelector(
    (state) => state.modal.data?.certifications || []
  );

  const handleDeleteSkill = (index) => {
    dispatch(removeSkill(index));
  };

  return (
    <div className="flex flex-col items-start justify-center p-10 gap-5 font-PublicSans-Regular">
      {/* Header Section */}
      <div className="flex flex-col items-start justify-center gap-1">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-[1.13rem]">My Resume</h1>
          <div className="relative w-6 h-6">
            <Image src="/icons/badge.png" alt="badge" width={24} height={24} />
          </div>
        </div>
        <p className="text-[#606060] text-[0.9rem]">
          We use these details to uplift your profile.
        </p>
      </div>

      {/* Qualifications Section */}
      <h1 className="text-[1.13rem]">Qualifications</h1>
      <div className="w-full flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-y-7 gap-x-16 w-full font-PublicSans-Medium">
          {/* Add Skills */}
          <div className="flex flex-col">
            <div
              className="w-full p-5 rounded-lg text-gray-500 flex items-center justify-between px-4 bg-[#F9F9F9] cursor-pointer"
              onClick={() => dispatch(openSkillsModal())}
            >
              <h1 className="text-[#5446BC] text-[1.13rem]">Add skills</h1>
              <div className="flex gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image
                    src="/icons/black_plus.png"
                    alt="+"
                    width={24}
                    height={24}
                  />
                </div>
                {skills.length > 0 && (
                  <div
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingSkills(!isEditingSkills);
                    }}
                  >
                    <Image
                      src="/icons/profile-edit.png" // <- your edit icon source here
                      alt="edit"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            </div>

            {skills.length > 0 && (
              <div className="bg-[#F9F9F9] rounded-lg p-5 mt-2">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-1"
                  >
                    <p className="text-black text-base font-PublicSans-Regular">
                      {skill.name}
                      {skill.experience && (
                        <span className="text-[#717171] text-[0.9rem]">
                          , {skill.experience} year
                          {skill.experience > 1 ? "s" : ""}
                        </span>
                      )}
                    </p>

                    {isEditingSkills && (
                      <div
                        className="relative w-5 h-5 cursor-pointer"
                        onClick={() => handleDeleteSkill(idx)}
                      >
                        <Image
                          src="/icons/profile-delete.png" // <- your delete icon source here
                          alt="delete"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Education */}
          <div className="flex flex-col">
            <div
              onClick={() => dispatch(openEducationModal())}
              className="w-full p-5 rounded-lg text-gray-500 flex items-center justify-between px-4 bg-[#F9F9F9] cursor-pointer"
            >
              <h1 className="text-[#5446BC] text-[1.13rem]">Add education</h1>
              <div className="flex gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image
                    src="/icons/black_plus.png"
                    alt="Add"
                    width={24}
                    height={24}
                  />
                </div>
                {education.length > 0 && (
                  <div
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingEducation(!isEditingEducation);
                    }}
                  >
                    <Image
                      src="/icons/profile-edit.png"
                      alt="edit"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            </div>

            {education.length > 0 && (
              <div className="bg-[#F9F9F9] rounded-lg p-5 mt-2">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-1"
                  >
                    <p className="text-black text-base font-PublicSans-Regular">
                      {edu.educationLevel}{" "}
                      {edu.fieldOfStudy && (
                        <span className="text-[#717171]">
                          - {edu.fieldOfStudy}
                        </span>
                      )}
                    </p>

                    {isEditingEducation && (
                      <div
                        className="relative w-5 h-5 cursor-pointer"
                        onClick={() => dispatch(removeEducation(idx))}
                      >
                        <Image
                          src="/icons/profile-delete.png"
                          alt="delete"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Work Experience */}
          <div className="flex flex-col">
            <div
              onClick={() => setIsWorkOpen(true)}
              className="w-full p-5 rounded-lg text-gray-500 flex items-center justify-between px-4 bg-[#F9F9F9] cursor-pointer"
            >
              <h1 className="text-[#5446BC] text-[1.13rem]">
                Add most recent work experience
              </h1>
              <div className="flex gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image
                    src="/icons/black_plus.png"
                    alt="Add"
                    width={24}
                    height={24}
                  />
                </div>
                {workExperience.length > 0 && (
                  <div
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingWork(!isEditingWork);
                    }}
                  >
                    <Image
                      src="/icons/profile-edit.png"
                      alt="edit"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            </div>

            {workExperience.length > 0 && (
              <div className="bg-[#F9F9F9] rounded-lg p-5 mt-2">
                {workExperience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-1"
                  >
                    <p className="text-black text-base font-PublicSans-Regular">
                      {exp.jobTitle}{" "}
                      {exp.companyName && (
                        <span className="text-[#717171]">
                          at {exp.companyName}
                        </span>
                      )}
                    </p>

                    {isEditingWork && (
                      <div
                        className="relative w-5 h-5 cursor-pointer"
                        onClick={() => dispatch(removeWorkExperience(idx))}
                      >
                        <Image
                          src="/icons/profile-delete.png"
                          alt="delete"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add Certifications */}
          <div className="flex flex-col">
            <div
              onClick={() => setIsCertOpen(true)}
              className="w-full p-5 rounded-lg text-gray-500 flex items-center justify-between px-4 bg-[#F9F9F9] cursor-pointer"
            >
              <h1 className="text-[#5446BC] text-[1.13rem]">
                Add certifications
              </h1>
              <div className="flex gap-2 items-center">
                <div className="relative w-6 h-6">
                  <Image
                    src="/icons/black_plus.png"
                    alt="Add"
                    width={24}
                    height={24}
                  />
                </div>
                {certifications.length > 0 && (
                  <div
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditingCerts(!isEditingCerts);
                    }}
                  >
                    <Image
                      src="/icons/profile-edit.png"
                      alt="edit"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
              </div>
            </div>

            {certifications.length > 0 && (
              <div className="bg-[#F9F9F9] rounded-lg p-5 mt-2">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between mb-1"
                  >
                    <p className="text-black text-base font-PublicSans-Regular">
                      {cert.name}
                      {!cert.doesNotExpire && cert.issuer && (
                        <span className="text-[#717171]"> - {cert.issuer}</span>
                      )}
                      {!cert.doesNotExpire &&
                        (cert.expiryMonth || cert.expiryYear) && (
                          <span className="text-[#717171] text-[0.8rem]">
                            {cert.issuer ? "," : " -"}{" "}
                            {cert.expiryMonth && `${cert.expiryMonth} `}
                            {cert.expiryYear && cert.expiryYear}
                          </span>
                        )}
                    </p>

                    {isEditingCerts && (
                      <div
                        className="relative w-5 h-5 cursor-pointer"
                        onClick={() => dispatch(removeCertification(idx))}
                      >
                        <Image
                          src="/icons/profile-delete.png"
                          alt="delete"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddSkillsModal
        isOpen={isSkillsOpen}
        onClose={() => setIsSkillsOpen(false)}
      />
      <AddEducationModal
        isOpen={isEducationOpen}
        onClose={() => setIsEducationOpen(false)}
      />
      <AddWorkModal isOpen={isWorkOpen} onClose={() => setIsWorkOpen(false)} />
      <AddCertificationsModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
      />
    </div>
  );
};

export default CreateResume;
