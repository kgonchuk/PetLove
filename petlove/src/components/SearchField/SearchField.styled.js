import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  /* margin-bottom: 24px; */
  @media only screen and (min-width: ${breakpoints.medium}) {
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  border: 1px solid ${color.accentBlack};
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  color: ${color.secondaryBlack};
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 0;
    padding: 14px;
    font-size: 16px;
    width: 203px;
  }
`;
export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 30px;
  right: 12px;
  padding: 0;
  @media only screen and (min-width: ${breakpoints.medium}) {
    top: 14px;
    right: 15px;
  }
`;
export const IconSearch = styled.svg`
  width: 18px;
  height: 18px;
`;
