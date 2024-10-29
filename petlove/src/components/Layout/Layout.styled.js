import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const Container = styled.div`
  /* min-width: 320px; */
  margin: 0 auto;
  max-width: 335px;
  min-width: 320px;
  padding: 0 20px;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 704px;
    padding: 0 32px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: 1216px;
    max-width: ${({ $isHomePage }) => ($isHomePage ? "1216px" : "1155px")};
    padding: 0 64px;
  }
`;
