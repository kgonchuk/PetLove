import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const PetInfoWrap = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`;
export const PetInfoTitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${color.secondaryBlack};
  margin-bottom: 4px;
  /* opacity: 0.5; */
  text-align: left;
`;
export const PetInfoText = styled.p`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;
