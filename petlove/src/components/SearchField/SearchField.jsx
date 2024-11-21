import React, { useState } from "react";
import {
  ClearBtn,
  IconClear,
  IconSearch,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./SearchField.styled";
import icon from "../../images/sprite.svg";

const SearchField = ({ onFilterSubmit, $isNoticesPage }) => {
  const [filterWord, setFilterWord] = useState("");

  const handleFilterChange = (e) => {
    setFilterWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterSubmit(filterWord);
    setFilterWord("");
  };
  const handleClear = () => {
    setFilterWord("");
    onFilterSubmit("");
  };
  return (
    <SearchContainer onSubmit={handleSubmit} $isNoticesPage={$isNoticesPage}>
      <SearchInput
        type="text"
        placeholder="Search"
        value={filterWord}
        onChange={handleFilterChange}
        $isNoticesPage={$isNoticesPage}
      />
      <SearchButton type="submit" $isNoticesPage={$isNoticesPage}>
        <IconSearch>
          <use href={`${icon}#loupe`} />
        </IconSearch>
      </SearchButton>
      {filterWord && (
        <ClearBtn
          type="button"
          onClick={handleClear}
          $isNoticesPage={$isNoticesPage}
        >
          <IconClear width="14" height="14">
            <use xlinkHref={`${icon}#icon-cross-small`} />
          </IconClear>
        </ClearBtn>
      )}
    </SearchContainer>
  );
};

export default SearchField;
