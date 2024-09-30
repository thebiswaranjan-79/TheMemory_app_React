import { configureStore } from "@reduxjs/toolkit";
import pasteReducers from "./redux/pasteSlice";

export const store = configureStore({
  reducer: {
    paste: pasteReducers,
  },
});
