import { createSlice } from "@reduxjs/toolkit";
import { getAllNews } from "../news/newsOperation";

const initialState = {
  news: [],
  totalPages: 1,
  keyword: null,
  isLoading: false,
  currentPage: 1,
  lastPage: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.lastPage = action.payload.totalPages;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setKeyword, setCurrentPage } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
