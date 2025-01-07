import { createSlice } from "@reduxjs/toolkit";
import { getFullUserInfo } from "./usersOperation";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    avatar: "",
    phone: "",
    token: "" || localStorage.getItem("token"),
  },
  userAvatar: "",
  isLoading: false,
};

const usersSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setAvatar(state, action) {
      state.userAvatar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullUserInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFullUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(getFullUserInfo.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setAvatar } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
