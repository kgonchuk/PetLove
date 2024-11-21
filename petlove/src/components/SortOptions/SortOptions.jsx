import { useState } from "react";
import {
  IconSortClear,
  OptionResetBtn,
  SortFiltersLabel,
  SortOptionBtn,
  SortOptionWrapper,
} from "./SortOptions.styled";
import icon from "../../images/sprite.svg";

export const SortOptions = ({ onChangeSortOrder }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onChangeSortOrder(value);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedOption("");
    onChangeSortOrder("");
  };

  return (
    <SortOptionWrapper>
      {["popular", "unpopular", "cheap", "expensive"].map((option) => (
        <SortFiltersLabel key={option}>
          <SortOptionBtn>
            <input
              type="radio"
              value={option}
              name="sort"
              checked={selectedOption === option}
              onChange={handleSortChange}
              className="radio-input"
            />
            <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            {selectedOption === option && (
              <OptionResetBtn onClick={handleReset}>
                <IconSortClear width="18px" height="18px">
                  <use xlinkHref={`${icon}#icon-cross-small`} />
                </IconSortClear>
              </OptionResetBtn>
            )}
          </SortOptionBtn>
        </SortFiltersLabel>
      ))}
    </SortOptionWrapper>
  );
};
