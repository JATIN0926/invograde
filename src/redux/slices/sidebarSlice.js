// sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
    isProjectsActive: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setProjectsActive: (state, action) => {
      state.isProjectsActive = action.payload;
    },
  },
});

export const { toggleSidebar, setProjectsActive } = sidebarSlice.actions;
export default sidebarSlice.reducer;
