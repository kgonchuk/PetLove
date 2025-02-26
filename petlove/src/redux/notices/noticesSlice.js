import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchAllLocations,
  fetchCategories,
  fetchCities,
  fetchGender,
  fetchNotices,
  fetchSpecies,
} from "./noticesOperation";

const initialState = {
  isLoading: false,
  error: null,
  notices: [],
  allNotices: [],
  noticesViewed: [],
  filterWord: "",
  categories: [],
  selectedCategory: "",
  gender: [],
  selectedGender: "",
  species: [],
  selectedSpecies: "",
  cities: [],
  locations: [],
  selectedLocation: "",
  currentPage: 1,
  hasMore: true,
  totalPages: 0,
  maxPopularity: 0,
  filters: {
    keyword: null,
    category: "",
    sex: "",
    species: "",
    locationId: "",
    sortBy: "",
  },
};
const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    clearLocations(state) {
      state.locations = [];
    },
    updateFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetNotices: (state) => {
      state.notices = [];
      state.allNotices = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.totalPages = 0;
      state.filterWord = "";
      state.species = [];
      state.categories = [];
      state.gender = [];
      state.cities = [];
      state.selectedCategory = "";
      state.selectedGender = "";
      state.selectedSpecies = "";
      state.selectedLocation = "";
      state.locations = [];
    },
    setAllNotices: (state, { payload }) => {
      state.allNotices = payload;
      state.notices = payload;
    },
    setCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setGender: (state, { payload }) => {
      state.selectedGender = payload;
    },
    setSpecies: (state, { payload }) => {
      state.selectedSpecies = payload;
    },
    setLocation(state, { payload }) {
      state.selectedLocation = payload;
    },
    setFilterWord: (state, { payload }) => {
      state.filterWord = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload.results;
        state.hasMore = payload.page < payload.totalPages;
        state.currentPage = payload.page;
        state.totalPages = payload.totalPages;
        // Оновлюємо maxPopularity
        const maxPopularity = Math.max(
          ...payload.results.map((notice) => notice.popularity || 0)
        );
        state.maxPopularity = maxPopularity;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      })
      .addCase(fetchGender.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.gender = payload;
      })
      .addCase(fetchSpecies.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.species = payload;
        state.filters.species = payload;
      })
      .addCase(fetchAllLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })

      .addMatcher(
        isAnyOf(
          fetchNotices.pending,
          fetchCategories.pending,
          fetchGender.pending,
          fetchSpecies.pending,
          fetchCities.pending,
          fetchAllLocations.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNotices.rejected,
          fetchCategories.rejected,
          fetchGender.rejected,
          fetchSpecies.rejected,
          fetchCities.rejected,
          fetchAllLocations.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
export const {
  resetNotices,
  setAllNotices,
  setFilterWord,
  setCategory,
  setSpecies,
  setGender,
  setLocation,
  updateFilters,
  clearLocations,
} = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
