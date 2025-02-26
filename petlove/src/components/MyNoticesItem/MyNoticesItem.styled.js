import styled from "styled-components";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const NoticesItem = styled.li`
  background: var(--light-color);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    padding: 14px 14px 18px 14px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 24px) / 2);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  overflow: hidden;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    height: 162px;
    margin-bottom: 14px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 178px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 162px;
  }
`;

export const TitleRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #2b2b2a;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Rating = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #2b2b2a;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RatingIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #ffc531;
`;

export const DescriptionList = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 14px;
  }
`;

export const DescrItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DescrInfo = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #2b2b2a;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const LearnMoreWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LearnMoreButton = styled.button`
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

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff4df;
  border: none;
  border-radius: 30px;
  width: 46px;
  height: 46px;
  padding: 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }
`;
