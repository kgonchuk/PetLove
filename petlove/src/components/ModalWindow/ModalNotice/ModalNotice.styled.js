import styled from "styled-components";
import { breakpoints } from "../../../global/breakPoints";
import color from "../../../global/globalColors";

export const stylesFindPet = {
  modalWidth: "279px",
  modalPadding: "100px 28px",
  mediumModalWidth: "331px",
  mediumModalPadding: "40px 71px",
};

export const ModalContainer = styled.div``;

export const NoticessImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImgCategory = styled.div`
  position: absolute;
  top: 0;
  left: 78px;
  padding: 8px 14px;
  background-color: ${color.yellowSecondary};
  border-radius: 30px;
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: ${color.yellowPrimary};
    &::first-letter {
      text-transform: uppercase;
    }
    @media only screen and (min-width: ${breakpoints.medium}) {
      font-size: 14px;
    }
  }
`;
export const NoticessImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  object-fit: cover;

  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
  }
`;
export const NoticesWrapTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NoticesTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 0em;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: 16px;
  }
`;
export const StarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: 0em;
  gap: 2px;
`;
export const Raiting = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: 0em;
  color: ${color.black};
`;
export const NoticesInfoList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 27px;
  margin-bottom: 18px;
  margin-top: 24px;
  text-align: center;
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 20px;
  }
`;
export const NoticesInfoItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: ${color.secondaryBlack};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NoticesInfoItemDesc = styled.p`
  color: ${color.black};
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: -0.02em;
  /* margin-bottom: 40px; */
`;

export const NoticesDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  text-align: center;
`;
export const ModalBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;
export const BtnAdd = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 8px;
  border-radius: 30px;

  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.03em;
  line-height: 1.25;

  background-color: ${color.yellowPrimary};
  outline: none;
  border: 1px solid ${color.yellowPrimary};
  color: ${color.white};
  width: 135px;
  padding: 12px 31px;
`;
export const BtnRemove = styled(BtnAdd)`
  width: 135px;
  padding: 12px 15px;
`;

export const BtnContact = styled(BtnAdd)`
  background-color: ${color.yellowSecondary};
  color: ${color.yellowPrimary};
  border: none;
`;
export const LikeIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${color.white};
  stroke: ${color.white};
  color: ${color.white};
`;
export const EmptyHeartIcon = styled.svg`
  fill: ${color.white};
  stroke: ${color.white};
  color: ${color.yellowPrimary};
  width: 20px;
  height: 20px;
`;
