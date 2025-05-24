// store/index.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice.js";
import sidebarReducer from "./slices/sidebarSlice.js";
import modalReducer from "./slices/modalSlice.js";
import userReducer from "./slices/userSlice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  project: projectReducer,
  sidebar: sidebarReducer,
  modal: modalReducer,
  user: userReducer,
});

const createNoopStorage = () => {
  return {
    getItem: () => Promise.resolve(null),
    setItem: () => Promise.resolve(),
    removeItem: () => Promise.resolve(),
  };
};

const storageEngine =
  typeof window !== "undefined" ? storage : createNoopStorage();

const persistConfig = {
  key: "root",
  storage: storageEngine,
  version: 1,
  whitelist: ["project", "sidebar", "modal", "user"],
  timeout: 1000,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
