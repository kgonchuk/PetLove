import styled from "styled-components";
import color from "../global/globalColors";
import { breakpoints } from "../global/breakPoints";
import BgMob from "../images/imageBgMob.webp";
import BgMob2x from "../images/imageBgMob_2x.webp";
import BgTab from "../images/imageTab.webp";
import BgTab2x from "../images/imageTab2x.webp";
import BgDesc from "../images/imageDesc.webp";
import BgDesc2x from "../images/imageDesc2x.webp";

export const HomePageContainer = styled.div`
  padding: 50px 20px;
  padding-top: 118px;
  margin-top: -70px;
  border-radius: 30px;
  /* width: 100%; */
  background: ${color.yellowPrimary};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: -80px;
    padding: 44px 32px;
    padding-top: 178px;
    border-radius: 60px;
    gap: 40px;
    /* margin-top: 110px; */
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    flex-direction: row;
    align-items: end;
    gap: 73px;

    padding: 32px 64px;
    padding-top: 178px;
  }
`;
export const HomePageTitle = styled.h2`
  color: ${color.white};
  font-weight: 700;
  font-size: 50px;
  line-height: 0.96;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 80px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    font-size: 90px;
    width: 760px;
  }
`;
export const HomePageTitleSpan = styled.span`
  color: ${color.accentWhite};
  font-weight: 700;
  font-size: 50px;
  line-height: 0.48;
  letter-spacing: -0.03em;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 80px;
  }
`;
export const HomePageText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${color.white};
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    width: 255px;
    margin-left: auto;
  }
`;
export const HomePageImg = styled.div`
  width: 335px;
  height: 402px;
  background: url(${BgMob}) no-repeat center center;
  border-radius: 30px;
  background-size: contain;

  @media (max-width: 767px) {
    background: url(${BgMob}) no-repeat center center;
    background-size: cover;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${BgMob2x}) no-repeat center center;
      background-size: cover;
    }
  }
  @media only screen and (min-width: ${breakpoints.medium}) {
    border-radius: 60px;
    width: 704px;
    height: 496px;

    background: url(${BgTab}) no-repeat center center;
    background-size: cover;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${BgTab2x}) no-repeat center center;
      background-size: cover;
    }
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    width: 1216px;
    height: 384px;

    background: url(${BgDesc}) no-repeat center center;
    background-size: cover;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${BgDesc2x}) no-repeat center center;
      background-size: cover;
    }
  }
`;
