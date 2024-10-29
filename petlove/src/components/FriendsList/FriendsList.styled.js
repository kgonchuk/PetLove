import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const FriendsListContainer = styled.ul`
  padding: 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    /* flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between; */
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    /* flex-direction: row;
    justify-content: space-between;
    gap: 28px; */
    row-gap: 28px;
    column-gap: 20px;
  }
`;
