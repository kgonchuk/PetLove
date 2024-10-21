import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const HeroPageContainer = styled.section`
  position: relative;
  z-index: 900;
  border-radius: 30px;
  background-color: var(--accent-color);
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 118px 20px 50px;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    gap: 32px;
    padding: 178px 32px 44px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 178px 64px 32px;
  }
`;
export const HeroPageTitle = styled.h2`
  color: ${color.white};
  font-weight: 700;
  font-size: 50px;
  line-height: 0.48;
  letter-spacing: -0.03em;
  margin-bottom: 24px;

  @media only screen and (min-width: ${breakpoints.large}) {
    font-size: 90px;
    line-height: 0.87;
  }
`;
export const HeroPageTitleSpan = styled.span`
  color: ${color.accentWhite};
`;
export const HeroPageText = styled.p``;
export const HeroPageImg = styled.div``;
