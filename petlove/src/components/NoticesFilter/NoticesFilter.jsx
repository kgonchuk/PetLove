// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import {
//   BtnRadio,
//   ContainerRadio,
//   customDropDownStyle,
//   customDropDownStyles,
//   customStylesLocation,
//   FilterBtn,
//   FilterCategoryGenderWrap,
//   FilterContainer,
//   FilterLabel,
//   FilterLocationWrap,
//   FilterSpan,
//   FilterTypeWrap,
//   FootCon,
//   FootInp,
//   FootLabel,
//   FootSpan,
//   FootSvg,
//   FootWrap,
//   FormWrap,
//   HorizontalLine,
//   IconRadio,
//   InputField,
//   InputRadio,
//   LabelRadio,
//   LocationIcon,
//   LocationLoupeIcon,
//   RadioBtnContainer,
//   RadioBtnWrap,
//   RadioIcon,
//   RadioInput,
//   RadioLabel,
//   RadioSpan,
//   SelectDropDown,
//   SortingButton,
// } from "./NoticesFilter.styled";
// import AsyncSelect from "react-select/async";
// import SearchField from "../SearchField/SearchField";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   selectFilters,
//   selectFiltersLocation,
//   selectNotices,
// } from "../../redux/notices/noticesSelector";

// import {
//   changeSortWord,
//   clearLocations,
//   resetFilters,
//   resetNoticesState,
//   resetSortFilters,
//   saveSortParam,
//   setCategory,
//   setGender,
//   setPopularity,
//   setResetFilters,
//   setType,
//   updateFilters,
// } from "../../redux/notices/noticesSlice";
// import icon from "../../images/sprite.svg";
// import {
//   fetchAllLocations,
//   fetchCategories,
//   fetchLocations,
//   fetchNotices,
//   fetchSex,
//   fetchSpecies,
// } from "../../redux/notices/noticesOperation";

// const NoticesFilter = () => {
//   const dispatch = useDispatch();
//   const { categories, sex, species, filters } = useSelector(selectNotices);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedType, setSelectedType] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [selectedOption, setSelectedOption] = useState("");
//   const allFilters = useSelector(selectFilters);
//   const [valueChecked, setValueChecked] = useState(null);

//   const locations = useSelector(selectFiltersLocation);

//   const categoryOptions = categories.map((category) => ({
//     value: category,
//     label: category.charAt(0).toUpperCase() + category.slice(1),
//   }));

//   const genderOptions = sex.map((sex) => ({
//     value: sex,
//     label: sex.charAt(0).toUpperCase() + sex.slice(1),
//   }));

//   const speciesOptions = species.map((species) => ({
//     value: species,
//     label: species.charAt(0).toUpperCase() + species.slice(1),
//   }));

//   const locationOptions = locations.map((location) => ({
//     value: location._id,
//     label: `${location.cityEn}, ${location.stateEn}, ${location.countyEn}`,
//   }));
//   const isFiltersActive = Object.values(allFilters).some(
//     (value) => value !== null && value !== ""
//   );

//   const handleSearch = (keyword) => {
//     dispatch(updateFilters({ ...filters, keyword }));
//   };

//   useEffect(() => {
//     dispatch(fetchCategories());
//     dispatch(fetchSex());
//     dispatch(fetchSpecies());
//   }, [dispatch]);

//   const loadOptions = useCallback(
//     (inputValue, callback) => {
//       if (!inputValue) {
//         dispatch(fetchAllLocations()).then((action) => {
//           const options = action.payload.map((location) => ({
//             value: location._id,
//             label: `${location.cityEn}, ${location.stateEn}, ${location.countyEn}`,
//           }));
//           callback(options);
//         });
//       } else {
//         dispatch(fetchLocations(inputValue)).then((action) => {
//           const options = Array.isArray(action.payload)
//             ? action.payload.map((location) => ({
//                 value: location._id,
//                 label: `${location.cityEn}, ${location.stateEn}, ${location.countyEn}`,
//               }))
//             : [];
//           callback(options);
//         });
//       }
//     },
//     [dispatch]
//   );

//   const handleInputChange = (newValue) => {
//     dispatch(clearLocations());
//     return newValue;
//   };

//   const handleLocationChange = (option) => {
//     setSelectedLocation(option);
//     handleChange("locationId", option ? option.value : "");
//   };

//   const handleCategoryChange = (selectedOption) => {
//     setSelectedCategory(selectedOption);
//     if (selectedOption.value === "show all") {
//       dispatch(setCategory(null));
//     } else {
//       dispatch(setCategory(selectedOption.value));
//     }
//   };

//   const handleGenderChange = (selectedOption) => {
//     setSelectedGender(selectedOption);
//     if (selectedOption.value === "show all") {
//       dispatch(setGender(null));
//     } else {
//       dispatch(setGender(selectedOption.value));
//     }
//   };

//   const handleTypeChange = (selectedOption) => {
//     setSelectedType(selectedOption);
//     if (selectedOption.value === "show all") {
//       dispatch(setType(null));
//     } else {
//       dispatch(setType(selectedOption.value));
//     }
//   };

//   const handleChange = useCallback(
//     (name, value) => {
//       dispatch(updateFilters({ ...filters, [name]: value }));
//     },
//     [dispatch, filters]
//   );

//   const handleSortChange = (event) => {
//     const { value } = event.target;

//     if (value === "popular") {
//       handleChange("byPopularity", false);
//     } else if (value === "unpopular") {
//       handleChange("byPopularity", true);
//     } else {
//       handleChange("sortBy", value);
//     }
//   };

//   const handlePriceChange = (event) => {
//     const { value } = event.target;

//     if (value === "cheap") {
//       handleChange("byPrice", false);
//     } else if (value === "expensive") {
//       handleChange("byPrice", true);
//     } else {
//       handleChange("sortBy", value);
//     }
//   };

//   const handleSortReset = () => {
//     dispatch(resetSortFilters());
//   };
//   const handleResetFilters = () => {
//     setSelectedCategory(null);
//     setSelectedGender(null);
//     setSelectedType(null);

//     setValueChecked(null);
//     dispatch(setResetFilters(""));
//   };

//   const handleValueChange = (e) => {
//     setValueChecked(e.target.name);
//     dispatch(setPopularity(e.target.name));
//   };
//   const handleClearSorting = (e) => {
//     setValueChecked(null);
//     dispatch(setPopularity(null));
//   };

//   return (
//     <FilterContainer>
//       <SearchField onSearchSubmit={handleSearch} />
//       <FilterCategoryGenderWrap>
//         <FilterLabel>
//           <SelectDropDown
//             options={categoryOptions}
//             name="category"
//             placeholder="Category"
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//             styles={customDropDownStyle}
//           />
//         </FilterLabel>

//         <FilterLabel>
//           <SelectDropDown
//             options={genderOptions}
//             name="gender"
//             placeholder="By gender"
//             value={selectedGender}
//             onChange={handleGenderChange}
//             styles={customDropDownStyles}
//           />
//         </FilterLabel>
//       </FilterCategoryGenderWrap>
//       <FilterTypeWrap>
//         <FilterLabel>
//           <SelectDropDown
//             options={speciesOptions}
//             name="type"
//             placeholder="By type"
//             value={selectedType}
//             onChange={handleTypeChange}
//             styles={customDropDownStyles}
//           />
//         </FilterLabel>
//       </FilterTypeWrap>
//       <FilterLocationWrap>
//         <AsyncSelect
//           // isClearable
//           cacheOptions
//           defaultOptions={locationOptions}
//           loadOptions={loadOptions}
//           onInputChange={handleInputChange}
//           onChange={handleLocationChange}
//           value={selectedLocation}
//           onFocus={() => loadOptions("", () => {})}
//           placeholder="Location"
//           styles={customStylesLocation}
//           classNamePrefix="testSelect"
//           components={{
//             DropdownIndicator: () => (
//               <LocationLoupeIcon width="18px" height="18px">
//                 <use xlinkHref={`${icon}#loupe`} />
//               </LocationLoupeIcon>
//             ),
//             ClearIndicator: () => (
//               <LocationIcon
//                 width="18px"
//                 height="18px"
//                 onClick={() => handleLocationChange(null)}
//               >
//                 <use xlinkHref={`${icon}#icon-cross-small`} />
//               </LocationIcon>
//             ),
//           }}
//         />

//         {selectedLocation && (
//           <LocationIcon
//             width="18px"
//             height="18px"
//             onClick={() => handleLocationChange(null)}
//           >
//             <use xlinkHref={`${icon}#icon-cross-small`} />
//           </LocationIcon>
//         )}
//       </FilterLocationWrap>

//       <HorizontalLine></HorizontalLine>

//       <ContainerRadio>
//         <SortingButton
//           type="radio"
//           name="popular"
//           checked={valueChecked === "popular"}
//           onChange={handleValueChange}
//         >
//           Popular
//           {valueChecked === "popular" && (
//             <IconRadio
//               onClick={handleClearSorting}
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <use xlinkHref={`${icon}#icon-cross-small`} />
//             </IconRadio>
//           )}
//         </SortingButton>

//         {/* <InputField
//           type="radio"
//           id="popular"
//           name="popular"
//           checked="popular"
//           onChange={handleSortChange}
//         />
//         <LabelRadio htmlFor="popular">
//           Popular
//           <BtnRadio type="button" onClick={handleSortReset}>
//             <IconRadio width="18px" height="18px">
//               <use xlinkHref={`${icon}#icon-cross-small`} />
//             </IconRadio>
//           </BtnRadio>
//         </LabelRadio> */}

//         <SortingButton
//           type="button"
//           name="unpopular"
//           checked={valueChecked === "unpopular"}
//           onChange={handleValueChange}
//         >
//           Unpopular
//           {valueChecked === "unpopular" && (
//             <IconRadio
//               onClick={handleClearSorting}
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <use xlinkHref={`${icon}#icon-cross-small`} />
//             </IconRadio>
//           )}
//         </SortingButton>

//         {/* <InputField
//           type="radio"
//           id="unpopular"
//           name="sort"
//           value="unpopular"
//           onChange={handleSortChange}
//           // checked={selectedOption}
//         />
//         <LabelRadio htmlFor="unpopular">
//           Unpopular
//           <BtnRadio type="button" onClick={handleSortReset}>
//             <IconRadio width="18px" height="18px">
//               <use xlinkHref={`${icon}#icon-cross-small`} />
//             </IconRadio>
//           </BtnRadio>
//         </LabelRadio> */}

//         <InputField
//           type="radio"
//           id="cheap"
//           name="sort"
//           value="cheap"
//           onChange={handlePriceChange}
//         />
//         <LabelRadio htmlFor="cheap">
//           Cheap
//           <BtnRadio type="button" onClick={handleSortReset}>
//             <IconRadio width="18px" height="18px">
//               <use xlinkHref={`${icon}#icon-cross-small`} />
//             </IconRadio>
//           </BtnRadio>
//         </LabelRadio>

//         <InputField
//           type="radio"
//           id="expensive"
//           name="sort"
//           value="expensive"
//           onChange={handlePriceChange}
//         />
//         <LabelRadio htmlFor="expensive">
//           Expensive
//           <BtnRadio type="button">
//             <IconRadio width="18px" height="18px">
//               <use xlinkHref={`${icon}#icon-cross-small`} />
//             </IconRadio>
//           </BtnRadio>
//         </LabelRadio>
//         {isFiltersActive && (
//           <FilterBtn type="button" onClick={handleResetFilters}>
//             Reset
//           </FilterBtn>
//         )}
//       </ContainerRadio>
//     </FilterContainer>
//   );
// };

// export default NoticesFilter;

import {
  customDropDownStyle,
  FilterCategoryGenderWrap,
  FilterContainer,
  FilterLabel,
  FilterLabelGender,
  FilterLabelType,
  HorizontalLine,
  SelectDropDown,
  SortingButton,
} from "./NoticesFilter.styled";
import React, { useEffect, useState } from "react";
import SearchField from "../SearchField/SearchField";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllNotices,
  selectCategory,
  selectFilters,
  selectFiltersLocation,
  selectFilterWord,
  selectGender,
  selectNotices,
  selectSearchCategory,
  selectSearchGender,
  selectSearchLocation,
  selectSearchSpecies,
  selectSpecies,
} from "../../redux/notices/noticesSelector";
import {
  fetchAllLocations,
  fetchCategories,
  fetchGender,
  fetchLocations,
  fetchNotices,
  fetchSpecies,
} from "../../redux/notices/noticesOperation";
import {
  clearLocations,
  setCategory,
  setFilterWord,
  setGender,
  setLocation,
  setSpecies,
  updateFilters,
} from "../../redux/notices/noticesSlice";

import { LocationInput } from "../LocationInput/LocationInput";

const NoticesFilter = ($isNoticesPage) => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const filterWord = useSelector(selectFilterWord);
  const categories = useSelector(selectCategory);
  const gender = useSelector(selectGender);
  const species = useSelector(selectSpecies);
  const selectedCategory = useSelector(selectSearchCategory);
  const selectedGender = useSelector(selectSearchGender);
  const selectedSpecies = useSelector(selectSearchSpecies);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGender());
    dispatch(fetchSpecies());
  }, [dispatch]);

  const handleFilterChange = (type, selectedOption) => {
    const value = selectedOption ? selectedOption.value : "";

    if (value === "all" || value === "") {
      switch (type) {
        case "category":
          dispatch(setCategory(""));
          break;
        case "gender":
          dispatch(setGender(""));
          break;
        case "species":
          dispatch(setSpecies(""));
          break;
        case "location":
          dispatch(setLocation(""));
          break;
        default:
          return;
      }
    } else {
      switch (type) {
        case "category":
          dispatch(setCategory(value));
          break;
        case "gender":
          dispatch(setGender(value));
          break;
        case "species":
          dispatch(setSpecies(value));
          break;
        case "location":
          dispatch(setLocation(value));
          break;
        default:
          return;
      }
    }
    dispatch(
      fetchNotices({
        page: 1,
        limit: 6,
        category:
          type === "category"
            ? value === "all"
              ? ""
              : value
            : selectedCategory,
        sex:
          type === "gender" ? (value === "all" ? "" : value) : selectedGender,
        species:
          type === "species" ? (value === "all" ? "" : value) : selectedSpecies,
        locationId:
          type === "location"
            ? value === "all"
              ? ""
              : value
            : selectedLocation,
        keyword: filterWord,
      })
    );
  };

  const handleSearch = (filterWord) => {
    dispatch(setFilterWord(filterWord));
    dispatch(
      fetchNotices({
        page: 1,
        limit: 6,
        category: selectedCategory,
        sex: selectedGender,
        species: selectedSpecies,
        locationId: selectedLocation,
        keyword: filterWord,
      })
    );
  };
  const options = [
    { value: "all", label: "Show all" },
    ...categories.map((category) => ({
      value: category,
      label: category,
    })),
  ];
  const optionsGender = [
    { value: "all", label: "Show all" },
    ...gender.map((item) => ({
      value: item,
      label: item,
    })),
  ];

  const optionsSpecies = [
    { value: "all", label: "Show all" },
    ...species.map((item) => ({ value: item, label: item })),
  ];

  const selectedCategoryOption =
    options.find((option) => option.value === selectedCategory) || null;

  const selectedGenderOption =
    optionsGender.find((option) => option.value === selectedGender) || null;

  const selectedSpeciesOption =
    optionsSpecies.find((option) => option.value === selectedSpecies) || null;

  return (
    <FilterContainer>
      <SearchField
        onFilterSubmit={handleSearch}
        $isNoticesPage={$isNoticesPage}
      />
      <FilterCategoryGenderWrap>
        <FilterLabel>
          <SelectDropDown
            value={selectedCategoryOption}
            onChange={(option) => handleFilterChange("category", option)}
            options={options}
            name="category"
            placeholder="Category"
            styles={customDropDownStyle}
          />
        </FilterLabel>
        <FilterLabelGender>
          <SelectDropDown
            value={selectedGenderOption}
            onChange={(option) => handleFilterChange("gender", option)}
            options={optionsGender}
            name="gender"
            placeholder="By gender"
            styles={customDropDownStyle}
          />
        </FilterLabelGender>
      </FilterCategoryGenderWrap>

      <FilterLabelType>
        <SelectDropDown
          value={selectedSpeciesOption}
          onChange={(option) => handleFilterChange("species", option)}
          options={optionsSpecies}
          name="species"
          placeholder="By type"
          styles={customDropDownStyle}
        />
      </FilterLabelType>

      <LocationInput />
      <HorizontalLine></HorizontalLine>
    </FilterContainer>
  );
};

export default NoticesFilter;
