import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 11px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 24px;
  }
`;
export const WrapBtn = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
`;
export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${color.secondaryBlack};
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: transparent;
  color: ${color.black};
  font-size: 14px;
  font-weight: 700;
  padding: 0;

  &:focus,
  &:hover {
    border-color: transparent;
    color: ${color.white};
    background-color: ${color.yellowPrimary};
  }
`;
export const WrapSvg = styled.div`
  display: flex;
  align-items: center;
`;
export const PaginationSvg = styled.svg`
  margin-left: -10px;
  width: 16px;
  height: 16px;
  :first-child {
    margin-left: 0;
  }
  @media (min-width: 768px) {
    margin-left: -17px;
  }
`;
export const WrapNumb = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;

  &:focus,
  &:hover {
    border-color: transparent;
    stroke: ${color.white};
    color: transparent;
  }

  svg {
    width: 20px;
    height: 20px;
    viewport-fit: 20 20 0 0;
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
// import styled from "styled-components";
// import color from "../../global/globalColors";

// export const PaginationContainer = styled.div``;
// export const PaginationButton = styled.button`
//   width: 40px;
//   height: 40px;
//   border-radius: 100%;
//   border: 1px solid ${color.whiteLightTranslucent};
//   background-color: transparent;
//   margin-left: 8px;
// `;
// export const PaginationSvg = styled.svg`
//   width: 16px;
//   height: 16px;
//   stroke: ${(props) =>
//     props.stoke === "true" ? color.whiteLightTranslucent : color.whitePrimary};

//   @media (min-width: 768px) {
//     width: 20px;
//     height: 20px;
//   }
// `;
