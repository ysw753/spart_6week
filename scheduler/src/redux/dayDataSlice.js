import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  schedule: [
    {
      dayId: "dayidakxxx",
      contents: "리액트를 공부하기",
      title: "공부하기",
    },
    {
      dayId: "ccc",
      contents: "스프링을 공부하기",
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
    createSchedule: (state, action) => {
      state.schedule.push(action.payload);
    },
    deleteSchedule: (state, action) => {
      const getid = action.payload;
      const dataArr = state.schedule.filter((item) => item.dayId !== getid);
      console.log(dataArr);
      state.schedule = dataArr;
    },
    updateSchedule: (state, action) => {
      const updatedDataobj = action.payload;
      console.log(updatedDataobj);
      const dataArr = state.schedule.map((item) =>
        updatedDataobj.dayId === item.dayId ? updatedDataobj : item
      );
      console.log(dataArr);
      state.schedule = dataArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { load, createSchedule, deleteSchedule, updateSchedule } =
  dayDataSlice.actions;

export default dayDataSlice.reducer;
