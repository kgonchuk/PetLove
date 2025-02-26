import styled from "styled-components";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const PetItemContainer = styled.div`
  border-radius: 30px;
  border: 1px solid ${color.secondaryBlack};
  padding: 16px;
  display: flex;
  position: relative;
  gap: 14px;
  margin-top: 20px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 22px 16px;
  }
`;
export const ItenImgWrap = styled.div``;
export const ItemImg = styled.img`
  width: 66px;
  height: 66px;
  object-fit: cover;
  border-radius: 100%;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 75px;
    height: 75px;
  }
`;

export const PetItemTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;
export const DeleteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${color.yellowSecondary};
  border: none;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 32px;
    height: 32px;
  }
`;
export const TrashIcon = styled.svg`
  fill: ${color.yellowPrimary};
  stroke: ${color.yellowPrimary};
  color: ${color.yellowPrimary};
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 18px;
    height: 18px;
  }
`;
export const ItemDetailsWrap = styled.div``;
export const PetItemSpeciesList = styled.ul``;
export const PetSpeciesItem = styled.li``;
export const PetSpeciesDesc = styled.p``;
