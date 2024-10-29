import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllNews = createAsyncThunk(
  "news/getAllNews",
  async (reqData, thunkAPI) => {
    const { keyword, currentPage } = reqData;
    try {
      const res = await axios.get("news", {
        params: {
          keyword: keyword,
          page: currentPage,
          limit: 6,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
