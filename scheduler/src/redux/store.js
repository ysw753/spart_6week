import { configureStore } from "@reduxjs/toolkit";
import dayDataSlice from "./dayDataSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    dayData: dayDataSlice,
    userData: userSlice,
  },
});
