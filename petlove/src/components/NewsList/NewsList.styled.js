import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";

export const NewsContainer = styled.section``;
export const NewsHeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0 24px;

  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 52px 0 44px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding: 64px 32px 60px;
  }
`;

export const ListNews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 44px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 24px;
    margin-bottom: 60px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 34px;
  }
`;
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 44px 0 80px;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 60px 0 80px;
  }
`;
