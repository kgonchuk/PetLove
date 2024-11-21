import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
import Select from "react-select";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* padding-bottom: 20px;
  margin-bottom: 20px; */

  @media only screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }
`;
export const FilterCategoryGenderWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 16px;
  }
`;
export const FilterLabel = styled.label`
  display: flex;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 170px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    min-width: 200px;
  }
`;
export const FilterLabelGender = styled.label`
  display: flex;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 170px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    width: 190px;
  }
`;
export const FilterLabelType = styled.label`
  display: flex;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 190px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    width: 190px;
  }
`;

export const SelectDropDown = styled(Select)`
  border-radius: 30px;
  flex-grow: 1;
`;
export const FilterTypeWrap = styled.div`
  margin-top: 12px;
`;
export const customDropDownStyle = {
  control: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    fontSize: "14px",
    lineHeight: "1.25",
    letterSpacing: "-0.03em",
    borderRadius: "30px",
    border: "none",
    height: "42px",
    boxShadow: "none",

    "@media (min-width: 768px)": {
      height: "48px",
      fontSize: "16px",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0px",
    paddingLeft: "12px",

    "@media (min-width: 768px)": {
      paddingLeft: "14px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    textTransform: "capitalize",
    color: state.isFocused
      ? `${color.yellowPrimary};
 `
      : "rgba(38, 38, 38, 0.60)",
    backgroundColor: state.isFocused ? "transparent" : "transparent",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.29",
    letterSpacing: "-0.03em",
    color: "#262626",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.25",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "15px",
    overflow: "hidden",
    padding: "0 12px ",
    maxHeight: "216px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: "#262626",
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.29",
    textTransform: "capitalize",
    color: "#262626",

    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.25",
    },
  }),
  input: (provided) => ({
    ...provided,
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "216px !important",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "100px",
      paddingTop: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(0,0,0,0.2)",
      borderRadius: "10px",
    },
  }),
};

export const FilterLocationWrap = styled.div`
  margin-top: 12px;
  position: relative;
  margin-bottom: 20px;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(38, 38, 38, 0.1);
  margin-bottom: 20px;
`;

export const RadioBtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const RadioInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;
export const FilterSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${color.white};
  color: ${color.black};
  transition: 0.4s;
  border-radius: 30px;
  svg {
    display: none;
  }
`;
export const RadioIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: black;
`;
export const RadioLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 30px;
  cursor: pointer;
  background-color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.03em;
  color: #262626;
  transition: background-color 0.3s, color 0.3s;

  ${RadioInput}:checked + ${FilterSpan} {
    background-color: ${color.yellowPrimary};
    color: ${color.white};
    svg {
      stroke: ${color.white};
      display: flex;
    }
  }
`;

export const InputRadio = styled.input`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  opacity: 0;
`;

// /////////////////
export const ContainerRadio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LabelRadio = styled.label`
  border-radius: 30px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: $text-color;
  transition: 0.8s ease;
  &:hover {
    color: ${color.white};
    background-color: ${color.yellowPrimary};
  }
  background-color: ${(props) =>
    props.checked ? `${color.yellowPrimary}` : `${color.white}`};
  color: ${(props) => (props.checked ? `${color.white}` : `${color.black}`)};

  &:hover {
    background-color: ${color.yellowPrimary};
    color: ${color.white};
  }
`;
export const InputField = styled.input`
  display: none;
`;

export const RadioSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const BtnRadio = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${color.white};
  border: none;
  background-color: transparent;
`;
export const IconRadio = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${color.white};
`;
export const FilterBtn = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${(props) =>
    props.checked ? `${color.yellowPrimary}` : `${color.white}`};
  color: ${(props) => (props.checked ? `${color.white}` : `${color.black}`)};

  &:hover {
    background-color: ${color.yellowPrimary};
    color: ${color.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    gap: 8px;
    padding: 14px;
  }
`;

export const SortingButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${(props) =>
    props.checked ? `${color.yellowPrimary}` : `${color.white}`};
  color: ${(props) => (props.checked ? `${color.white}` : `${color.black}`)};
  /* transition: all var(--main-transition); */

  &:hover {
    background-color: ${color.yellowPrimary};
    color: ${color.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    gap: 8px;
    padding: 14px;
  }
`;
