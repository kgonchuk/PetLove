import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  userAvatar: "",
  isLoading: false,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setAvatar(state, action) {
      state.userAvatar = action.payload;
    },
  },
});

export const { setAvatar } = userProfileSlice.actions;

export const userProfileReducer = userProfileSlice.reducer;
