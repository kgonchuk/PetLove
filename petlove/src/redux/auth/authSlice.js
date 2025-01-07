import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  getAllUserInfo,
  addPet,
} from "./authOperation";

const initialState = {
  user: {
    name: "",
    email: "",
    avatar: "",
    phone: "",
    token: "" || localStorage.getItem("token"),
    isLoggedIn: false,
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
  },

  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAvatar(state, action) {
      state.user.avatar = action.payload;
    },
  },
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
      })

      // .addCase(getAllUserInfo.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(getAllUserInfo.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.user = action.payload;
      //   state.user.avatar = action.payload.avatar;
      //   state.user.name = action.payload.name;
      //   state.user.email = action.payload.email;
      //   state.user.phone = action.payload.phone;
      //   state.user.noticesViewed = action.payload.noticesViewed;
      //   state.user.noticesFavorites = action.payload.noticesFavorites;
      //   state.user.pets = action.payload.pets;
      // })

      // .addCase(getAllUserInfo.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })

      .addCase(addPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      });
  },
});

export const { setAvatar } = authSlice.actions;
export const authReducer = authSlice.reducer;
