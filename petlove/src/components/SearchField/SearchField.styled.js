import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${({ $isNoticesPage }) => ($isNoticesPage ? "none" : "24px")};
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-bottom: 0;
  }
`;

export const SearchInput = styled.input`
  position: relative;
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;

  border: ${({ $isNoticesPage }) =>
    $isNoticesPage ? "none" : `1px solid ${color.accentBlack}`};
  color: ${({ $isNoticesPage }) =>
    $isNoticesPage ? `${color.black}` : `${color.accentBlack}`};
  background: ${({ $isNoticesPage }) =>
    $isNoticesPage ? `${color.white}` : "transparent"};

  &::placeholder {
    color: ${({ $isNoticesPage }) =>
      $isNoticesPage ? `${color.black}` : `${color.accentBlack}`};
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 0;
    padding: 14px;
    font-size: 16px;
    width: 203px;
    padding: ${({ $isNoticesPage }) => ($isNoticesPage ? "14px" : "16px")};
    width: ${({ $isNoticesPage }) => ($isNoticesPage ? "237px" : "198px")};
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
export const ClearBtn = styled.button`
  border: none;
  background-color: transparent;
  stroke: black;
  position: absolute;
  top: 30px;
  right: 30px;
  @media only screen and (min-width: ${breakpoints.large}) {
    top: 14px;
    right: 35px;
  }
`;
export const IconClear = styled.svg``;
