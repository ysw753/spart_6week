import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      userid: "useridawdxxa",
      dayId: "dayidakxxx",
      text: "리액트를 공부하기",
      title: "공부하기",
    },
  ],
};

export const dayDataSlice = createSlice({
  name: "dayData",
  initialState,
  reducers: {
    load: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { load } = dayDataSlice.actions;

export default dayDataSlice.reducer;
