import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const NoticesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  padding: 0;
  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: ${breakpoints.large}) {
    flex-direction: row;
    flex-wrap: wrap;

    row-gap: 40px;
    column-gap: 31px;
  }
`;
