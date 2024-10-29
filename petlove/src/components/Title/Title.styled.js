import styled from "styled-components";

import { breakpoints } from "../../global/breakPoints";
export const MainTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.03em;
  line-height: 1;

  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 54px;
  }
`;
