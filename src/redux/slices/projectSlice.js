// redux/slices/projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: "",
  image: null,
  title: "",
  skills: [],
  domain: "",
  categories: [], // Field to store selected categories
  tags: [], // New field to store tags
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
    addCategory: (state, action) => {
      // Only add if the category isn't already selected and limit to 5 categories
      if (
        state.categories.length < 5 &&
        !state.categories.includes(action.payload)
      ) {
        state.categories.push(action.payload);
      }
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
    addTag: (state, action) => {
      if (!state.tags) {
        state.tags = [];
      }
      if (state.tags.length < 5 && !state.tags.includes(action.payload)) {
        state.tags.push(action.payload);
      }
    },

    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
    nextStep: (state) => {
      const steps = ["description", "title", "skills", "domain", "tags"];
      const currentIndex = steps.indexOf(state.currentStep);
      if (currentIndex < steps.length - 1) {
        state.currentStep = steps[currentIndex + 1];
      }
    },
    previousStep: (state) => {
      const steps = ["description", "title", "skills", "domain", "tags"];
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
  addCategory,
  removeCategory,
  addTag,
  removeTag,
  nextStep,
  previousStep,
} = projectSlice.actions;

export default projectSlice.reducer;
