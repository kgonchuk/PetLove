import styled from "styled-components";
import color from "../../../global/globalColors";

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
  border-radius: 30px;
  background-color: ${color.white};
  position: relative;
  width: auto;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 28px;
  max-width: 335px;
  width: 100%;
  background-color: ${color.white};
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
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
  width: 6px;
  height: 6px;
  stroke: ${color.black};
`;
