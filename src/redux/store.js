import { configureStore } from '@reduxjs/toolkit';
import languageReducer from "../redux/slices/LanguageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});