import styled from "styled-components";
import color from "../../../global/globalColors";
import { breakpoints } from "../../../global/breakPoints";
import { NavLink } from "react-router-dom";

export const stylesAttention = {
  modalWidth: "295px",
  modalPadding: "40px 20px",

  mediumModalWidth: "346px",
  mediumModalPadding: "60px",
};

export const ModalContainer = styled.div`
  @media only screen and (min-width: ${breakpoints.medium}) {
  }
`;
export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: ${color.yellowSecondary};
  margin: 0 auto;
  img {
    width: 40px;
  }
`;
export const AttentionTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: -0.03em;
  color: ${color.yellowPrimary};
  margin-top: 20px;
  text-align: center;
`;
export const AttentionText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  color: ${color.black};
  margin-top: 20px;
  text-align: center;
`;
export const AttentionBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;
export const AttetntionLogInBtn = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 12px 48px;

  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.03em;
  line-height: 1.28571;
  text-transform: uppercase;

  background-color: ${color.yellowPrimary};
  outline: none;
  border: 1px solid ${color.yellowPrimary};
  color: ${color.white};
  width: 135px;
  padding: 12px 0;
`;
export const AttetntionRegBtn = styled(AttetntionLogInBtn)`
  padding: 12px 0;
  border: none;
  color: ${color.yellowPrimary};
  background: ${color.yellowSecondary};
  width: 129px;
  &:hover {
    cursor: pointer;
    border: none;
    background: ${color.yellowPrimary};
    color: ${color.yellowSecondary};
  }
`;
