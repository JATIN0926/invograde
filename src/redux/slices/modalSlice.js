// store/slices/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: {
    skillsModalOpen: false,
    educationModalOpen: false,
    workModalOpen: false,
    certificationsModalOpen: false,
  },
  data: {
    skills: [],
    education: [],
    workExperience: [],
    certifications: [],
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setResumeData(state, action) {
      state.data = action.payload;
    },
    openSkillsModal(state) {
      state.modals.skillsModalOpen = true;
    },
    closeSkillsModal(state) {
      state.modals.skillsModalOpen = false;
    },
    openEducationModal(state) {
      state.modals.educationModalOpen = true;
    },
    closeEducationModal(state) {
      state.modals.educationModalOpen = false;
    },
    openWorkModal(state) {
      state.modals.workModalOpen = true;
    },
    closeWorkModal(state) {
      state.modals.workModalOpen = false;
    },
    addSkill(state, action) {
      state.data.skills.push(action.payload);
    },
    removeSkill(state, action) {
      state.data.skills.splice(action.payload, 1);
    },
    addEducation(state, action) {
      if (!state.data) {
        state.data = { skills: [], education: [] };
      }
      if (!state.data.education) {
        state.data.education = [];
      }
      state.data.education.push(action.payload);
    },

    removeEducation(state, action) {
      state.data.education.splice(action.payload, 1);
    },
    addWorkExperience(state, action) {
      if (!state.data.workExperience) {
        state.data.workExperience = [];
      }
      state.data.workExperience.push(action.payload);
    },
    removeWorkExperience(state, action) {
      state.data.workExperience.splice(action.payload, 1);
    },
    openCertificationsModal(state) {
      state.modals.certificationsModalOpen = true;
    },
    closeCertificationsModal(state) {
      state.modals.certificationsModalOpen = false;
    },
    addCertification(state, action) {
      if (!state.data) {
        state.data = { skills: [], education: [] };
      }
      if (!state.data.certifications) {
        state.data.certifications = [];
      }
      state.data.certifications.push(action.payload);
    },
    removeCertification(state, action) {
      state.data.certifications.splice(action.payload, 1);
    },
  },
});

export const {
  openSkillsModal,
  closeSkillsModal,
  openEducationModal,
  closeEducationModal,
  openCertificationsModal,
  closeCertificationsModal,
  addSkill,
  removeSkill,
  addEducation,
  removeEducation,
  openWorkModal,
  closeWorkModal,
  addWorkExperience,
  removeWorkExperience,
  addCertification,
  removeCertification,
  setResumeData,
} = modalSlice.actions;

export default modalSlice.reducer;
