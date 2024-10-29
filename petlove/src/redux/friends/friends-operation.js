import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllFriends = createAsyncThunk(
  "friends/getAllFriends",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("friends");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
