import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  currentUser,
  updateAvatar,
  updateUser,
  currentUserEdit,
  currentUserFull,
  editUserInfo,
  getAllUserInfo,
} from "./authOperation";

const initialState = {
  user: {
    name: "",
    email: "",
    avatar: "",
    phone: "",
    token: "" || localStorage.getItem("token"),
    isLoggedIn: false,
  },

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
    builder.addCase(editUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user.avatar = action.payload.avatar;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.petsList = action.payload.pets;
    });
    builder.addCase(editUserInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getAllUserInfo.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user.avatar = action.payload.avatar;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
    });
    builder.addCase(getAllUserInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
