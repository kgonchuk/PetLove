import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import shapeBcgr from "../../images/shape_bcgr_mob1.png";
import shapeBcgrTab from "../../images/shape_bcgr_tab1.png";
import shapeBcgrDesk from "../../images/shape_bcgr_desk1.png";
import color from "../../global/globalColors";

export const HeroBg = styled.div`
  height: 280px;
  border-radius: 30px;

  position: relative;
  overflow: hidden;

  background: ${color.yellowPrimary};

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 704px;
    height: 302px;

    border-radius: 60px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    margin-left: -32px;
    width: 592px;
    height: 654px;
  }
`;
export const HeroOverlay = styled.div`
  width: 305px;
  height: 280px;

  position: absolute;
  bottom: -20px;
  left: 27px;

  background: url(${shapeBcgr}) no-repeat center center;
  background-size: contain;
  z-index: 1;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 550px;
    height: 302px;

    position: absolute;
    bottom: -30px;
    left: 106px;

    background: url(${shapeBcgrTab}) no-repeat center center;
    background-size: contain;
    z-index: 1;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    width: 530px;
    height: 720px;

    position: absolute;
    bottom: -65px;
    left: 30px;

    background: url(${shapeBcgrDesk}) no-repeat center center;
    background-size: contain;
    z-index: 1;
  }
`;
export const HeroWrapperIcon = styled.div`
  display: inline-block;
`;
