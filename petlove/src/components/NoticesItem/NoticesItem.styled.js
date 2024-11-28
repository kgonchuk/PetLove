import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const NoticesContainer = styled.li`
  max-width: 335px;
  border-radius: 16px;
  background-color: ${color.white};
  padding: 24px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 298px;
    margin-bottom: 0;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    max-width: 363px;
  }
`;
export const NoticessImgWrap = styled.div``;
export const NoticessImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 294px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    width: 315px;
  }
`;
export const NoticesWrapTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;
export const NoticesTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0%;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StarWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  gap: 1px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 2px;
  }
`;
export const StarSvg = styled.svg`
  width: 16px;
  height: 16px;
  color: ${color.yellowPrimary};
`;
export const NoticesInfoList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
  margin-top: 8px;
`;
export const NoticesInfoItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: ${color.secondaryBlack};
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const NoticesInfoItemDesc = styled.p`
  color: ${color.black};
  font-size: 10px;
  line-height: 1.16;
`;

export const NoticesDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
`;
export const NoticesFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 32px;
  }
`;
export const LearnMoreBtn = styled.button`
  width: 231px;
  border-radius: 30px;
  background-color: ${color.yellowPrimary};
  text-align: center;
  color: ${color.white};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.03em;
  line-height: 1.28;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 236px;
    font-size: 16px;
  }
`;
export const LikeBtn = styled.button`
  border: none;
  padding: 0;
  width: 46px;
  height: 46px;
  border-radius: 100%;
  background-color: ${color.yellowSecondary};
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 48px;
    height: 48px;
  }
`;
export const LikeIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${color.yellowPrimary};
  stroke: ${color.yellowPrimary};
  color: transparent;
`;
export const EmptyHeartIcon = styled.svg`
  fill: ${color.yellowPrimary};
  stroke: ${color.yellowPrimary};
  color: ${color.yellowPrimary};
  width: 20px;
  height: 20px;
`;
