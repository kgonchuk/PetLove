import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const NoticesWrap = styled.div``;

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
export const ResetBtn = styled.button`
  border-radius: 30px;
  border: none;
  background-color: ${color.yellowPrimary};
  padding: 12px;
  color: ${color.white};
  font-size: 14px;
  letter-spacing: -0.03;
  line-height: 1.29;
  width: 143px;
  color: ${color.black};
  background-color: ${color.white};
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background: ${color.yellowPrimary};
    color: ${color.white};
  }
  &:focus {
    background: ${color.yellowPrimary};
    color: ${color.white};
  }
`;

export const NoticesSortWrap = styled.div`
  text-align: center;
  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const NoticesFilterWrap = styled.div`
  max-width: 335px;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 30px;

  background: ${color.yellowSecondary};

  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 704px;
    margin-bottom: 32px;
    padding: 40px 32px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    max-width: 1216px;
    padding: 40px;

    margin-right: -32px;
    margin-left: -32px;
    margin-bottom: 40px;
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
export const NoticesList = styled.ul``;

export const NoticesFilterContainer = styled.div`
  max-width: 335px;
  border-radius: 30px;
  background-color: ${color.yellowSecondary};
  padding: 20px;
  margin-top: 40px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 704px;
  }
`;
