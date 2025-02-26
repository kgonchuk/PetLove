// import React from "react";

// import ModalPortal from "../ModalPortal/ModalPortal";
// import {
//   AttentionText,
//   ModalContainer,
//   ImgWrap,
//   AttentionTitle,
//   AttentionBtnWrap,
//   AttetntionLogInBtn,
//   AttetntionRegBtn,
//   stylesAttention,
// } from "./AttentionModal.styled";
// import attentionImg from "../../../images/Attention-mob.png";
// import attentionImg2x from "../../../images/Attention-mob@2x.png";

// const AttentionModal = ({ onClose, open }) => {
//   return (
//     <ModalPortal onClose={onClose} open={open} $styles={stylesAttention}>
//       <ModalContainer>
//         <ImgWrap>
//           <img
//             srcSet={`${attentionImg2x} 2x, ${attentionImg} 1x`}
//             alt="attention dog"
//           />
//         </ImgWrap>
//         <AttentionTitle>Attention</AttentionTitle>
//         <AttentionText>
//           {" "}
//           We would like to remind you that certain functionality is available
//           only to authorized users.If you have an account, please log in with
//           your credentials. If you do not already have an account, you must
//           register to access these features.
//         </AttentionText>
//         <AttentionBtnWrap>
//           <AttetntionLogInBtn to="/login">Log In</AttetntionLogInBtn>
//           <AttetntionRegBtn to="/registration">Registration</AttetntionRegBtn>
//         </AttentionBtnWrap>
//       </ModalContainer>
//     </ModalPortal>
//   );
// };

// export default AttentionModal;

import React from "react";

import ModalPortal from "../ModalPortal/ModalPortal";
import {
  AttentionText,
  ModalContainer,
  ImgWrap,
  AttentionTitle,
  AttentionBtnWrap,
  AttetntionLogInBtn,
  AttetntionRegBtn,
  stylesAttention,
} from "./AttentionModal.styled";
import attentionImg from "../../../images/Attention-mob.png";
import attentionImg2x from "../../../images/Attention-mob@2x.png";

const AttentionModal = ({ onClose, open }) => {
  return (
    <ModalPortal onClose={onClose} open={open} $styles={stylesAttention}>
      <ModalContainer>
        <ImgWrap>
          <img
            srcSet={`${attentionImg2x} 2x, ${attentionImg} 1x`}
            alt="attention dog"
          />
        </ImgWrap>
        <AttentionTitle>Attention</AttentionTitle>
        <AttentionText>
          {" "}
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </AttentionText>
        <AttentionBtnWrap>
          <AttetntionLogInBtn to="/login">Log In</AttetntionLogInBtn>
          <AttetntionRegBtn to="/registration">Registration</AttetntionRegBtn>
        </AttentionBtnWrap>
      </ModalContainer>
    </ModalPortal>
  );
};

export default AttentionModal;
