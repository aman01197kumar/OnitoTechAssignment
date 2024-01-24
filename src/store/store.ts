import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myObjectSlice from "./details";
import myArraySlice from "./combinedDataStore";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  myObject: myObjectSlice,
  myArray: myArraySlice,
  // Add other reducers here if you have more slices
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type IRootState = ReturnType<typeof store.getState>;
