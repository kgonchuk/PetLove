import React from "react";
import { BackDrop, CloseBtn, IconClose, Modal } from "./ModalPortal.styled";
import icon from "../../../images/sprite.svg";
const ModalPortal = ({ onClose, children, $styles }) => {
  return (
    <BackDrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()} $styles={$styles}>
        <CloseBtn onClick={onClose}>
          <IconClose>
            <use xlinkHref={`${icon}#icon-cross-small`} />
          </IconClose>
        </CloseBtn>
        {children}
      </Modal>
    </BackDrop>
  );
};

export default ModalPortal;
