import React, { useState } from "react";
import {
  IconSearch,
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchWraper,
} from "./SearchField.styled";
import icon from "../../images/sprite.svg";

const SearchField = ({ onSearchSubmit }) => {
  const [searchWorld, setSearchWord] = useState("");

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchWorld);
    setSearchWord("");
  };
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchWorld}
        onChange={handleSearchChange}
      />
      <SearchButton>
        <IconSearch>
          <use href={`${icon}#loupe`} />
        </IconSearch>
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchField;
