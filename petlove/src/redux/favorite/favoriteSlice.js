import { createSlice } from "@reduxjs/toolkit";
import { getFavorites } from ".//favoriteOperations";

const initialState = {
  favorites: [],
  viewedNotices: [],
  isLoading: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
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
      .addCase(getFavorites.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload.noticesFavorites;
        // state.viewedNotices = action.payload.noticesViewed;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setViewedNotices, removeViewedNotices } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
