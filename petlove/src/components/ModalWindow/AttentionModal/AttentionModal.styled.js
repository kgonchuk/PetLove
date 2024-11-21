import styled from "styled-components";
import color from "../../../global/globalColors";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 28px;
  max-width: 335px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color.white};
`;

export const AttentionText = styled.p``;
