import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  getFullUserInfo,
  editUserInfo,
  addNoticeToViewed,
  deleteFavoriteNotice,
  addFavoriteNotice,
  addMyPet,
  removeMyPet,
  getNoticesById,
  addToFavorite,
  removeFromFavorite,
} from "./authOperation";
import Notiflix from "notiflix";

const initialState = {
  name: "auth",
  initialState: {
    user: {
      token: "" || localStorage.getItem("token"),
      avatar: "",
      name: "",
      email: "",
      phone: "",
      noticesViewed: [],
      noticesFavorites: [],
      pets: [],
      id: null,
    },
    noticesFavorites: [],
    petsList: [],
    isLoading: false,
    error: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   setAvatar(state, action) {
  //     state.userAvatar = action.payload;
  //   },
  // },
  reducers: {
    setViewedNotices(state, action) {
      const exists = state.viewedNotices.some(
        (notice) => notice._id === action.payload._id
      );
      if (!exists) {
        state.viewedNotices.push(action.payload);
      }
    },
    removeViewedNotices(state, action) {
      const updatedViewed = state.viewedNotices.filter(
        (notice) => notice._id !== action.payload._id
      );
      state.viewedNotices = updatedViewed;
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

      .addCase(getFullUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFullUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.user.noticesViewed = action.payload.noticesViewed;
        state.user.noticesFavorites = action.payload.noticesFavorites;
        state.user.pets = action.payload.pets;
        state.user.id = action.payload._id;
      })

      .addCase(getFullUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.avatar = action.payload.avatar;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.noticesFavorites = action.payload.noticesFavorites;
      })
      .addCase(editUserInfo.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.payload;
      })
      // .addCase(addFavoriteNotice.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.user.noticesFavorites = action.payload;
      // })
      // .addCase(addFavoriteNotice.pending, (state, action) => {
      //   state.isLoading = true;
      //   state.error = false;
      // })
      // .addCase(addFavoriteNotice.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = true;
      // })
      // .addCase(deleteFavoriteNotice.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.user.noticesFavorites = action.payload;
      // })
      // .addCase(deleteFavoriteNotice.pending, (state, action) => {
      //   state.isLoading = true;
      //   state.error = false;
      // })
      // .addCase(deleteFavoriteNotice.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = true;
      // })
      .addCase(addToFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.noticesFavorites = action.payload;

        state.isLoading = false;
      })
      .addCase(addToFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        Notiflix.Notify.error(action.payload);
      })
      .addCase(removeFromFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        state.noticesFavorites = state.noticesFavorites.filter(
          (el) => el !== action.payload
        );

        state.user.noticesFavorites = state.user.noticesFavorites.filter(
          (el) => el._id !== action.payload
        );

        state.isLoading = false;
      })
      .addCase(removeFromFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        Notiflix.Notify.error(action.payload);
      })
      .addCase(addMyPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMyPet.fulfilled, (state, action) => {
        state.user.pets = action.payload.pets;

        state.isLoading = false;
      })
      .addCase(addMyPet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        Notiflix.Notify.error(action.payload);
      })
      .addCase(removeMyPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeMyPet.fulfilled, (state, action) => {
        state.user.pets = state.user.pets.filter(
          (el) => el._id !== action.payload
        );

        state.isLoading = false;
      })
      .addCase(removeMyPet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        Notiflix.Notify.error(action.payload);
      })

      .addCase(addNoticeToViewed.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.noticesViewed = action.payload;
      })
      .addCase(addNoticeToViewed.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addNoticeToViewed.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getNoticesById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNoticesById.fulfilled, (state, action) => {
        state.petsList = action.payload;
        state.isLoading = false;
      })
      .addCase(getNoticesById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;

        Notiflix.Notify.error(action.payload);
      });
  },
});

export const { setViewedNotices, removeViewedNotices } = authSlice.actions;
export const authReducer = authSlice.reducer;
