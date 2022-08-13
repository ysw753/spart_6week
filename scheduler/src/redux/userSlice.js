import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      userid: "useridawdxxa",
      nickname: "yoo",
      username: "유성원",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    exist: (state) => {
      return state;
    },
    create: (state, action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { exist, create } = userSlice.actions;

//reducer내보냄
export default userSlice.reducer;
