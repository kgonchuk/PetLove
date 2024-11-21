// // import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// // import {
// //   fetchCategories,
// //   fetchAllLocations,
// //   fetchNotices,
// //   fetchSex,
// //   fetchSpecies,
// // } from "./noticesOperation";

// // const initialState = {
// //   items: [],
// //   isLoading: false,
// //   error: null,
// //   categories: [],
// //   sex: [],
// //   species: [],
// //   locations: [],
// //   sortWord: null,
// //   sort: [],
// //   filters: {
// //     keyword: "",
// //     category: "",
// //     sex: "",
// //     species: "",
// //     locationId: "",
// //     popularity: null,
// //     sortBy: "",
// //   },

// //   totalPages: 1,
// // };

// // const noticesSlice = createSlice({
// //   name: "notices",
// //   initialState,
// //   reducers: {
// //     updateFilters(state, action) {
// //       state.filters = { ...state.filters, ...action.payload };
// //     },
// //     setCategory(state, action) {
// //       state.filters.category = action.payload;
// //     },
// //     setGender(state, action) {
// //       state.filters.sex = action.payload;
// //     },
// //     setType(state, action) {
// //       state.filters.species = action.payload;
// //     },
// //     clearLocations(state) {
// //       state.locations = [];
// //     },
// //     setPopularity(state, action) {
// //       state.filters.popularity = action.payload;
// //     },
// //     setPrice(state, action) {
// //       state.filters.price = action.payload;
// //     },

// //     resetSortFilters: (state) => {
// //       state.filters = {
// //         sortBy: "",
// //       };
// //     },
// //     setResetFilters(state, action) {
// //       state.filters.keyword = action.payload;
// //       state.filters.category = action.payload;
// //       state.filters.gender = action.payload;
// //       state.filters.type = action.payload;
// //       state.filters.popularity = action.payload;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchNotices.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.items = action.payload;
// //         state.totalPages = action.payload.totalPages;
// //       })
// //       .addCase(fetchCategories.fulfilled, (state, action) => {
// //         state.categories = ["show all", ...action.payload];
// //       })
// //       .addCase(fetchSex.fulfilled, (state, action) => {
// //         state.sex = ["show all", ...action.payload];
// //       })
// //       .addCase(fetchSpecies.fulfilled, (state, action) => {
// //         state.species = ["show all", ...action.payload];
// //       })
// //       .addCase(fetchAllLocations.fulfilled, (state, action) => {
// //         state.locations = action.payload;
// //       })
// //       .addMatcher(
// //         isAnyOf(
// //           fetchNotices.pending,
// //           fetchCategories.pending,
// //           fetchSex.pending,
// //           fetchSpecies.pending,
// //           fetchAllLocations.pending
// //         ),
// //         (state) => {
// //           state.isLoading = true;
// //           state.error = null;
// //         }
// //       )
// //       .addMatcher(
// //         isAnyOf(
// //           fetchNotices.rejected,
// //           fetchCategories.rejected,
// //           fetchSex.rejected,
// //           fetchSpecies.rejected,
// //           fetchAllLocations.rejected
// //         ),
// //         (state, action) => {
// //           state.isLoading = false;
// //           state.error = action.error.message;
// //         }
// //       );
// //   },
// // });

// // export const {
// //   updateFilters,
// //   clearLocations,
// //   setCategory,
// //   setGender,
// //   setType,

// //   setPopularity,
// //   // changeSexValue,
// //   // saveSortParam,
// //   // resetSorting,

// //   resetSortFilters,
// //   setResetFilters,
// // } = noticesSlice.actions;
// // export default noticesSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// import {
//   fetchAllLocations,
//   fetchCategories,
//   fetchNotices,
//   fetchSex,
//   fetchSpecies,
// } from "./noticesOperation";

// const initialState = {
//   notices: [],
//   categories: [],
//   sex: [],
//   species: [],
//   locations: [],
//   totalPages: 1,

//   currentPage: 1,
//   lastPage: null,
//   isLoading: false,

//   filters: {
//     keyword: null,
//     category: null,
//     gender: null,
//     type: null,
//     popularity: null,
//     price: null,
//     // selectedLocation: null,
//     locationId: "",
//   },
// };

// const noticesSlice = createSlice({
//   name: "notices",
//   initialState,
//   reducers: {
//     updateFilters(state, action) {
//       state.filters = { ...state.filters, ...action.payload };
//     },
//     setKeyword(state, action) {
//       state.filters.keyword = action.payload;
//     },
//     setCategory(state, action) {
//       state.filters.category = action.payload;
//     },
//     setGender(state, action) {
//       state.filters.gender = action.payload;
//     },
//     setType(state, action) {
//       state.filters.type = action.payload;
//     },
//     setPopularity(state, action) {
//       state.filters.popularity = action.payload;
//     },
//     setPrice(state, action) {
//       state.filters.price = action.payload;
//     },
//     // setLocation(state, { payload }) {
//     //   state.filters.selectedLocation = payload;
//     // },
//     clearLocations(state) {
//       state.locations = [];
//     },
//     setResetFilters(state, action) {
//       state.filters.keyword = action.payload;
//       state.filters.category = action.payload;
//       state.filters.gender = action.payload;
//       state.filters.type = action.payload;
//       state.filters.popularity = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchNotices.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchNotices.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.notices = action.payload.results;
//         state.totalPages = action.payload.totalPages;
//       })
//       .addCase(fetchNotices.rejected, (state, action) => {
//         state.isLoading = false;
//       })

//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.categories = ["show all", ...action.payload];
//       })

//       .addCase(fetchSex.fulfilled, (state, action) => {
//         state.sex = ["show all", ...action.payload];
//       })

//       .addCase(fetchSpecies.fulfilled, (state, action) => {
//         state.species = ["show all", ...action.payload];
//       })
//       .addCase(fetchAllLocations.fulfilled, (state, action) => {
//         state.locations = action.payload;
//       });
//   },
// });

// export const {
//   setKeyword,
//   setCategory,
//   setGender,
//   setType,
//   setPopularity,
//   setResetFilters,
//   updateFilters,
//   clearLocations,
//   setPrice,
// } = noticesSlice.actions;

// export const noticesReducer = noticesSlice.reducer;

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
    keyword: "",
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
      })
      // .addCase(fetchCities.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.cities = payload;
      // })
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
