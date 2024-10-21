import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const Container = styled.div`
  /* min-width: 320px; */
  margin: 0 auto;
  max-width: 335px;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 768px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: 1280px;
  }
`;
