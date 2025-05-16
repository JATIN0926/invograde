// components/Redux-Provider/Providers.js
"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store.js";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
