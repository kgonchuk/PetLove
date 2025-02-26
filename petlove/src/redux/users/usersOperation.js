import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFullUserInfo = createAsyncThunk(
  "userProfile/getFullUserInfo",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("users/current/full");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserInfo = createAsyncThunk(
  "user/editUserInfo",
  async (editData, thunkAPI) => {
    try {
      const resp = await axios.patch("/users/current/edit", editData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
