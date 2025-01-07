// import { createSelector } from "@reduxjs/toolkit";

// export const selectNotices = (state) => state.notices;
// export const selectNoticesItems = (state) => state.notices.items;
// export const selectNoticesTotalPages = (state) => state.notices.totalPages;
// export const selectNoticesCurrentPage = (state) => state.notices.currentPage;
// export const selectNoticesHasMore = (state) => state.notices.hasMore;
// export const selectFilters = (state) => state.notices.filters;
// export const selectFiltersLocation = (state) => state.notices.locations;

// export const selectActiveCategory = (state) => state.notices.filters.category;
// export const selectSortLabel = (state) => state.notices.sortLabel;

// export const selectAllNotices = (state) => state.notices.notices;
// export const selectAllCategories = (state) => state.notices.categories;
// export const selectAllSex = (state) => state.notices.sex;
// export const selectAllSpecies = (state) => state.notices.species;

// export const selectTotalPages = (state) => state.notices.totalPages;

// export const selectFilteredNotices = createSelector(
//   [selectFilters, selectAllNotices],
//   (filters, notices) => {
//     return notices
//       .filter((notice) => {
//         if (filters.category && filters.category !== notice.category) {
//           return false;
//         }
//         if (filters.gender && filters.gender !== notice.sex) {
//           return false;
//         }
//         if (filters.type && filters.type !== notice.species) {
//           return false;
//         }
//         return true;
//       })
//       .sort((a, b) => {
//         if (filters.popularity === "unpopular") {
//           return a.popularity - b.popularity;
//         } else if (filters.popularity === "popular") {
//           return b.popularity - a.popularity;
//         } else {
//           return 0;
//         }
//       });
//   }
// );
export const selectNotices = (state) => state.notices.notices;
export const selectAllNotices = (state) => state.notices;
export const selectNoticesCurrentPage = (state) => state.notices.currentPage;
export const selectNoticesHasMore = (state) => state.notices.hasMore;
export const selectNoticesTotalPages = (state) => state.notices.totalPages;
export const selectFilterWord = (state) => state.notices.filterWord;
export const selectCategory = (state) => state.notices.categories;
export const selectSearchCategory = (state) => state.notices.selectedCategory;
export const selectGender = (state) => state.notices.gender;
export const selectSearchGender = (state) => state.notices.selectedGender;
export const selectSpecies = (state) => state.notices.species;
export const selectSearchSpecies = (state) => state.notices.selectedSpecies;
export const selectCities = (state) => state.notices.cities;
export const selectSearchLocation = (state) => state.notices.selectedLocation;
export const selectFiltersLocation = (state) => state.notices.locations;
export const selectFilters = (state) => state.notices.filters;
export const SelectGetSpecies = (state) => state.notices.filters.species;
