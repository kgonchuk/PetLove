import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
export const UserCardSection = styled.section`
  border-radius: 30px;
  background-color: ${color.white};
  padding: 18px 20px;
`;

export const UserCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserIconText = styled.p`
  color: ${color.white};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;
export const UserIconWrap = styled.div`
  background-color: ${color.yellowPrimary};
  width: 80px;
  height: 38px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  color: ${color.white};
`;
export const IconUser = styled.svg`
  width: 18px;
  height: 18px;
`;
export const UserBtn = styled.button`
  border: none;
  background-color: transparent;
`;
export const IconEdit = styled.svg`
  width: 38px;
  height: 38px;
`;

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
export const UserList = styled.div`
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
export const UserItem = styled.input`
  border: 1px solid ${color.yellowPrimary};
  border-radius: 30px;
  width: 281px;
  height: 42px;
  margin-bottom: 10px;
  padding-left: 12px;
  padding-top: 12px;
`;
