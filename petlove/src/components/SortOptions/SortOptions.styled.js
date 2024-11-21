import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const SortOptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 8px;
  }
`;
export const SortFiltersLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 14px; */
  border-radius: 30px;
  cursor: pointer;
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 129%;
  letter-spacing: -0.03em;
  color: #262626;
  transition: background-color 0.3s, color 0.3s;
`;
export const SortOptionBtn = styled.label`
  display: inline-flex;
  align-items: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  padding: 12px;
  gap: 8px;
  border-radius: 30px;
  border: "none";

  color: ${color.black};
  background-color: ${color.white};
  transition: background-color 0.3s, color 0.3s;

  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;

  &:hover {
    background: ${color.yellowPrimary};
    color: ${color.white};
  }

  .radio-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 14px;

    font-size: 16px;
    line-height: 1.25;
  }
`;

export const OptionResetBtn = styled.button`
  background: transparent;
  border: none;

  padding: 0;
  margin: 0;

  font-size: 14px;
  stroke: ${color.white};
  cursor: pointer;

  @media only screen and (min-width: ${breakpoints.medium}) {
    /* gap: 8px; */
    padding: 0;
  }
`;
export const IconSortClear = styled.svg``;
