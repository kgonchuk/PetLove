import { createSlice } from "@reduxjs/toolkit";
import { getAllFriends } from "./friends-operation";

const initialState = {
  friends: [],
  isLoading: false,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllFriends.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload;
      })
      .addCase(getAllFriends.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
