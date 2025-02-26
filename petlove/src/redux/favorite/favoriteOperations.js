import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/users/current/full");
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
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
