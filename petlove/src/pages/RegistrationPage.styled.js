import styled from "styled-components";
import { breakpoints } from "../global/breakPoints";
import cat_hero_X1 from "../../src/images/cat-bg-mob.png";
import cat_hero_X2 from "../../src/images/cat-bg-mob@2.png";
import cat_hero_tabX1 from "../../src/images/cat-bg-tab.png";
import cat_hero_tabX2 from "../../src/images/cat-bg-tab@2..png";
import cat_hero_desk_X1 from "../../src/images/cat-bg-desc.png";
import cat_hero_desk_X2 from "../../src/images//cat-bg-desc@2.png";

export const RegistrContainer = styled.div`
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

export const IconCatMobile = styled.div`
  width: 335px;
  height: 280px;

  /* background: url() no-repeat center center; */
  background-size: contain;
  z-index: 101;

  @media (max-width: 767px) {
    background: url(${cat_hero_X1}) no-repeat center center;
    background-size: cover;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${cat_hero_X2}) no-repeat center center;
      background-size: cover;
    }
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 364px;
    height: 302px;

    position: absolute;
    bottom: 0px;
    left: 295px;

    background: url(${cat_hero_tabX1}) no-repeat center center;
    background-size: cover;
    z-index: 10;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${cat_hero_tabX2}) no-repeat center center;
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

    background: url(${cat_hero_desk_X1}) no-repeat center center;
    background-size: cover;
    z-index: 1;

    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${cat_hero_desk_X2}) no-repeat center center;
      background-size: cover;
    }
  }
`;
