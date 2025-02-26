import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const PetsListContainer = styled.div``;
export const PetsListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const ListItem = styled.li``;
