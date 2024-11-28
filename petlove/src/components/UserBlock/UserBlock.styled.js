import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const UserBlockContainer = styled.div`
  padding-bottom: 40px;
`;
export const UserImg = styled.div`
  width: 94px;
  height: 94px;
  border-radius: 100px;
  overflow: hidden;
  margin: 0 auto 8px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 110px;
    height: 110px;
  }
`;
export const Img = styled.img``;
export const UserUploadBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: 500;
  font-size: 12px;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
  display: block;
  margin: 0 auto 28px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
export const UserTitle = styled.h2`
  font-size: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${color.textBlack};
  margin-bottom: 20px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 16px;
  }
`;
export const UserList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px;
  }
`;
export const UserItem = styled.li`
  border: 1px solid ${color.yellowPrimary};
  border-radius: 30px;
  width: 281px;
  height: 42px;
  margin-bottom: 10px;
  padding-left: 12px;
  padding-top: 12px;
  color: ${color.black};
`;
