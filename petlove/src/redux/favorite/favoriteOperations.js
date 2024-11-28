import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorites = createAsyncThunk(
  "favorites/addFavorites",
  async (id, thunkAPI) => {
    try {
      await axios.post(`notices/favorites/add/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorites = createAsyncThunk(
  "favorites/removeFavorites",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`notices/favorites/remove/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
