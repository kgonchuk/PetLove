import React from "react";

import ModalPortal from "../ModalPortal/ModalPortal";
import { AttentionText, ModalContainer } from "./AttentionModal.styled";

const AttentionModal = ({ onClose, open }) => {
  return (
    <ModalPortal onClose={onClose} open={open}>
      <ModalContainer>
        <AttentionText>
          {" "}
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </AttentionText>
      </ModalContainer>
    </ModalPortal>
  );
};

export default AttentionModal;
