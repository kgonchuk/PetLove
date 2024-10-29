import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const NewsContainer = styled.div``;
export const NewsWrap = styled.div`
  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
