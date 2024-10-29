import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
import loaderMob from "../../images/loaderMob.jpg";
import loaderMob2X from "../../images/loaderMob@2x.png";
import loaderTab from "../../images/loaderTab.jpg";
import loaderTab2X from "../../images/loaderTab@2x.jpg";
import loaderDesc from "../../images/loaderDesc.jpg";
import loaderDesc2X from "../../images/loaderDesc@2x.jpg";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 100;

  background: url(${loaderTab}) no-repeat center center ${color.backgroundBlur};
  background-size: cover;

  @media (max-width: 767px) {
    background: url(${loaderMob}) no-repeat center center
      ${color.backgroundBlur};
    background-size: cover;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: url(${loaderMob2X}) no-repeat center center,
        ${color.backgroundBlur};
      background-size: cover;
    }
    @media (min-width: ${breakpoints.medium}) and (max-width: 1279px) {
      background: url(${loaderTab}) no-repeat center center,
        ${color.backgroundBlur};
      background-size: cover;
      @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${loaderTab2X}) no-repeat center center,
          ${color.backgroundBlur};
        background-size: cover;
      }
    }
    @media (min-width: ${breakpoints.large}) {
      background: url(${loaderDesc}) no-repeat center center,
        ${color.backgroundBlur};
      background-size: cover;
      @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        background: url(${loaderDesc2X}) no-repeat center center,
          ${color.backgroundBlur};
        background-size: cover;
      }
    }
  }
`;
export const Loader = styled.div`
  position: relative;
  width: 427px;
  height: 427px;
  border-radius: 50%;
  background-color: transparent;
  overflow: hidden;
`;
export const LoaderFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: rgba(255, 255, 255, 0.2);
  transition: transform 0.02s ease-in-out;
`;
export const LoaderPercent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color: $white-color;
  font-size: 80px;
  text-align: center;
`;
export const LoaderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* font-family: var(--font-family);
    font-weight: var(--font-weight-bold); */
  color: $white-color;
  font-size: 80px;
  text-align: center;
`;
