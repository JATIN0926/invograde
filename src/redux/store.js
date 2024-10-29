// store/index.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  project: projectReducer,
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
  whitelist: ["project"], // Only persist project slice; include additional slices as needed
  timeout: 1000,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
