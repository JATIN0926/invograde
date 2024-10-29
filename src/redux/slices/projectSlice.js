// redux/slices/projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "",
  image: null,
  title: "",
  skills: [],
  domain: "",
  currentStep: "description",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setDomain: (state, action) => {
      state.domain = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      const steps = ["description", "title", "skills", "domain"];
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex < steps.length - 1) {
        state.currentStep = steps[currentIndex + 1];
      }
    },
    previousStep: (state) => {
      const steps = ["description", "title", "skills", "domain"];
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex > 0) {
        state.currentStep = steps[currentIndex - 1];
      }
    },
  },
});

export const {
  setDescription,
  setImage,
  setTitle,
  setSkills,
  setDomain,
  setCurrentStep,
  nextStep,
  previousStep,
} = projectSlice.actions;

export default projectSlice.reducer;
