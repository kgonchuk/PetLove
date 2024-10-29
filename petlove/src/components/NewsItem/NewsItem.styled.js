import styled from "styled-components";

import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  width: 100%;
  height: 379px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    max-width: 340px;
    width: 340px;
    height: 476px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    max-width: 361px;
    width: 361px;
  }
`;
export const ImgWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-bottom: 28px;
  }
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 15px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;

  @media only screen and (min-width: ${breakpoints.medium}) {
    height: 226px;
  }
`;
export const ItemTopic = styled.h3`
    margin-bottom: 12px;
    --line-height: 1.25;
    max-height: calc(2 * var(--line-height) * 1em);
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-height);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: calc(2 * var(--line-height) * 1em);

    font-weight: var(--font-weight-bold);
    font-size: 16px;
    letter-spacing: -0.03em;
    color: ${color.black};

    &::after {
        content: "\00a0"; 
        display: inline-block;
        width: 100%;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }

    @media only screen and (min-width: ${breakpoints.medium}) {
        font-size: 20px;
        --line-height: 1.3;
    }
`;
export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ItemDescrip = styled.p`
  margin-bottom: 19px;
  --line-height: 1.29;
  max-height: calc(4 * var(--line-height) * 1em);
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: var(--line-height);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  height: calc(4 * var(--line-height) * 1em);

  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${color.black};

  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 16px;
    --line-height: 1.25;
  }
`;
export const ItemDate = styled.p`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.28;
  color: ${color.secondaryBlack};
  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.28;
  color: ${color.yellowPrimary};
  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
