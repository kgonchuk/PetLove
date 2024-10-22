import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const WrapperHeroCard = styled.div`
  display: none;

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 16px;

    position: absolute;
    bottom: 32px;
    left: 32px;

    width: 294px;
    height: 121px;
    border-radius: 20px;
    background: ${color.white};
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 16px;

    position: absolute;
    bottom: 87px;
    left: 61px;
    z-index: 5;
  }
`;

export const WrapperHeroAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: ${color.yellowSecondary};
`;

export const HeroAvatar = styled.div`
  width: 32px;
  height: 32px;
  background: url(${(props) => props.$avatarSrc}) no-repeat center center;
  background-size: cover;
  z-index: 20;

  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background: url(${(props) => props.$avatarSrc2x}) no-repeat center center;
    background-size: cover;
    z-index: 20;
  }
`;

export const WrapperHeroCardDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 194px;
`;

export const WrapperHeroCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeroCardTitle = styled.h3`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${color.yellowPrimary};
`;

export const WrapperCardBirth = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const CardBirth = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${color.secondaryBlack};
`;

export const CardBirthNumber = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${color.black};
`;

export const WrapperHeroCardText = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${color.accentBlack};
`;
