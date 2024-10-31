import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const FreindsItemContainer = styled.li`
  border-radius: 15px;
  max-width: 335px;
  /* height: 184px; */
  position: relative;
  background: ${color.white};

  padding: 40px 20px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 302px;
    /* height: 196px; */
    margin-bottom: 0;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    width: 331px;
  }
`;
export const FreindsItemDescWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 16px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    gap: 20px;
  }
`;
export const FriendsImgWrap = styled.a``;
export const FriensImg = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 90px;
    height: 90px;
  }
`;
export const FriendsName = styled.h3`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.04em;
  line-height: 1.25;
  margin-bottom: 14px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const FriendWorksWrap = styled.div`
  width: 71px;
  padding: 8px;
  border-radius: 30px;
  background-color: ${color.yellowSecondary};
  position: absolute;
  top: 12px;
  right: 12px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 84px;
  }
`;

export const FriendsTime = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${color.yellowPrimary};
  text-align: center;
  right: 12px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
export const FriendsItemText = styled.p`
  color: ${color.black};
  @media only screen and (min-width: ${breakpoints.medium}) {
  }
`;

export const FriendsItemListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FriendsItemList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  padding: 0;
`;
export const FriendsItemDesc = styled.li`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.28;
  color: ${color.secondaryBlack};
`;
