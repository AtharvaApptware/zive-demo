import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session"; // Use session storage
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/persistedSlice";
import companyReducer from "./slices/companySlice";

// Persist configuration for redux-persist
const persistConfig = {
  key: "root",
  storage: sessionStorage, // Use session storage
  whitelist: ["userLoginData"], // Only persist the user slice
};

// Combine reducers using combineReducers
const rootReducer = combineReducers({
  counter: counterReducer,
  persistedSlice: userReducer,
  companySlice: companyReducer,
});

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

// Set up persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
