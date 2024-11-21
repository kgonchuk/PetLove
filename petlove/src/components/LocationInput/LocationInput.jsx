import { useDispatch, useSelector } from "react-redux";
import { clearLocations, setLocation } from "../../redux/notices/noticesSlice";
import AsyncSelect from "react-select/async";
import { useCallback, useEffect, useState } from "react";
import icon from "../../images/sprite.svg";
import {
  fetchAllLocations,
  fetchCities,
  fetchLocations,
} from "../../redux/notices/noticesOperation";
import { selectCities } from "../../redux/notices/noticesSelector";

import {
  customStylesLocation,
  LocationIcon,
  LocationLoupeIcon,
} from "./LocationInput.styled";

export const LocationInput = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities); // Вибірка міст з Redux

  const [isCitiesLoaded, setIsCitiesLoaded] = useState(false); // Стейт для перевірки, чи завантажені міста

  useEffect(() => {
    if (!isCitiesLoaded) {
      dispatch(fetchCities())
        .then(() => setIsCitiesLoaded(true))
        .catch((err) => console.error("Failed to load cities:", err));
    }
  }, [dispatch, isCitiesLoaded]);

  const handleChange = (selectedOption) => {
    dispatch(setLocation(selectedOption ? selectedOption.value : ""));
  };
  const loadOptions = useCallback(
    (inputValue, callback) => {
      if (!inputValue) {
        dispatch(fetchAllLocations()).then((action) => {
          const options = action.payload.map((location) => ({
            value: location._id,
            label: `${location.cityEn}, ${location.stateEn}, ${location.countyEn}`,
          }));
          callback(options);
        });
      } else {
        dispatch(fetchLocations(inputValue)).then((action) => {
          const options = Array.isArray(action.payload)
            ? action.payload.map((location) => ({
                value: location._id,
                label: `${location.cityEn}, ${location.stateEn}, ${location.countyEn}`,
              }))
            : [];
          callback(options);
        });
      }
    },
    [dispatch]
  );

  return (
    <>
      <AsyncSelect
        isClearable
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        // onInputChange={handleInputChange}
        onChange={handleChange}
        placeholder="Location"
        onFocus={() => loadOptions("", () => {})}
        styles={customStylesLocation}
        components={{
          DropdownIndicator: () => (
            <LocationLoupeIcon width="18px" height="18px">
              <use xlinkHref={`${icon}#loupe`} />
            </LocationLoupeIcon>
          ),
          // ClearIndicator: () => (
          //   <LocationIcon width="18px" height="18px">
          //     {" "}
          //     <use xlinkHref={`${icon}#icon-cross-small`} />
          //   </LocationIcon>
          // ),
        }}
      />
    </>
  );
};
