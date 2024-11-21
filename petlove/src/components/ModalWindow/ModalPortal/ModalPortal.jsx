import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BackDrop,
  CloseBtn,
  IconClose,
  Modal,
  ModalContainer,
} from "./ModalPortal.styled";
import icon from "../../../images/sprite.svg";

const ModalPortal = ({ open, children, onClose }) => {
  useEffect(() => {
    const handleCloseModalByEsc = (e) => {
      if (e.key === "Escape") onClose(false);
    };
    document.addEventListener("keyup", handleCloseModalByEsc);

    return () => {
      document.removeEventListener("keyup", handleCloseModalByEsc);
    };
  }, [onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <BackDrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn className="absolute top-5 right-5 w-6 h-6" onClick={onClose}>
          <IconClose className="w-6 h-6 stroke-black-main">
            <use href={icon + "#icon-x"} />
          </IconClose>
        </CloseBtn>
        {children}
      </Modal>
    </BackDrop>,
    document.getElementById("portal")
  );
};

export default ModalPortal;
