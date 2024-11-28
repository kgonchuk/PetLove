import styled from "styled-components";
import color from "../../../global/globalColors";
import { breakpoints } from "../../../global/breakPoints";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 50;
  background-color: ${color.backDrop};
`;

export const Modal = styled.div`
  background-color: ${color.white};
  position: relative;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: ${(props) => props.$styles.modalPadding};
  width: ${(props) => props.$styles.modalWidth};

  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: ${(props) => props.$styles.mediumModalPadding};
    width: ${(props) => props.$styles.mediumModalWidth};
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  font-size: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const IconClose = styled.svg`
  width: 12px;
  height: 12px;
  stroke: ${color.black};
`;
