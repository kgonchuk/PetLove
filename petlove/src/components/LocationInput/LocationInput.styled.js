import styled from "styled-components";
import color from "../../global/globalColors";

export const customStylesLocation = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "30px",

    boxShadow: "none",
    minHeight: "42px",
    height: "42px",
    width: "100%",
    border: "none",
    // paddingRight: "40px",
    "@media (min-width: 768px)": {
      width: "190px",
      height: "48px",
    },
    "@media (min-width: 1260px)": {
      width: "227px",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "42px",
    padding: "0 12px",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    borderColor: state.isSelected ? "rgba(246, 184, 61, 1)" : "transparent",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "42px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0",
    paddingRight: "12px",
    color: "#262626",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: "0",
    paddingRight: "32px",
    color: "#262626",
  }),

  placeholder: (provided) => ({
    ...provided,
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "1.28",
    letterSpacing: "-0.03em",
    color: "#262626",
    "@media (min-width: 768px)": {
      fontSize: "16px",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "15px",
    border: "none",
    marginTop: "4px",
    width: "280px",
    "@media (min-width: 768px)": {
      width: "190px",
    },
    "@media (min-width: 1216px)": {
      width: "227px",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: "15px",
    padding: "0",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "8px",
    color: "rgba(38, 38, 38, 0.6)",
    cursor: "pointer",
    borderColor: state.isSelected ? "rgba(246, 184, 61, 1)" : "transparent",
    backgroundColor: state.isSelected ? "transparent" : "white",
    "&:hover": {
      color: "#f6b83d",
    },
  }),
};
export const LocationLoupeIcon = styled.svg`
  stroke: ${color.black};

  position: absolute;
  right: 12px;
`;
export const LocationIcon = styled.svg`
  stroke: ${color.black};

  position: absolute;
  right: 34px;
  top: 12px;
`;
