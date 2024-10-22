import styled from "styled-components";
import { breakpoints } from "../global/breakPoints";
import dog_hero_X1 from "../../src/images/dog_hero_mob.png";
import dog_hero_X2 from "../../src/images/dog_hero_mob@2.png";
import dog_hero_tabX1 from "../../src/images/hero_dogTab.png";
import dog_hero_tabX2 from "../../src/images/hero_dogTab@2.png";
import dog_hero_desk_X1 from "../../src/images/hero_dogDesc.png";
import dog_hero_desk_X2 from "../../src/images/hero_dogDesc@2.png";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 16px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }
`;

export const IconDogMobile = styled.div`
  width: 335px;
  height: 280px;

  /* background: url() no-repeat center center; */
  background-size: contain;
  z-index: 101;

  @media (max-width: 767px) {
    background: url(${dog_hero_X1}) no-repeat center center;
    background-size: cover;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${dog_hero_X2}) no-repeat center center;
      background-size: cover;
    }
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 364px;
    height: 302px;

    position: absolute;
    bottom: 0px;
    left: 295px;

    background: url(${dog_hero_tabX1}) no-repeat center center;
    background-size: cover;
    z-index: 10;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${dog_hero_tabX2}) no-repeat center center;
      background-size: cover;
    }
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    width: 490px;
    height: 640px;

    position: absolute;
    bottom: 0px;
    left: 45%;
    transform: translateX(-50%);

    background: url(${dog_hero_desk_X1}) no-repeat center center;
    background-size: cover;
    z-index: 1;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${dog_hero_desk_X2}) no-repeat center center;
      background-size: cover;
    }
  }
`;
