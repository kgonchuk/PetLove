import styled from "styled-components";
import color from "../../../global/globalColors";
import { breakpoints } from "../../../global/breakPoints";
import { Field } from "formik";

export const stylesEditUser = {
  modalWidth: "295px",
  modalPadding: "40px 20px",

  mediumModalWidth: "380px",
  mediumModalPadding: "50px",
};
export const ModalContainer = styled.div``;
export const ModalForm = styled.div``;
export const ModalEditText = styled.h2`
  font-weight: 700;
  font-size: 20;
  line-height: 1;
  letter-spacing: 0em;
  margin-bottom: 20px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18;
    line-height: 1.33;
  }
`;
export const ImageWrap = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 86px;
    height: 86px;
  }
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const ModalEditUploadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;
export const UploadBtn = styled.button`
  border: none;
  border-radius: 30px;
  background-color: ${color.yellowSecondary};
  color: ${color.black};
  padding: 12px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 126px;
  padding: 12px 0;
  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 146px;
    font-size: 14px;
    line-height: 1.28;
    padding: 12px 0;
  }
`;
export const UploadIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
export const FormField = styled.div`
  position: relative;
`;
export const ModalEditContainer = styled.div``;

export const InputFieldUpload = styled.input`
  border: 1px solid ${color.yellowPrimary};
  color: ${color.black};
  outline: none;
  border-radius: 30px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${color.black};
  width: 137px;
  padding: 12px 12px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 200px;
  }
`;
export const FormFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    gap: 14px;
    margin-top: 20px;
  }
`;
export const InputField = styled.input`
  border: 1px solid ${color.yellowPrimary};
  color: ${color.black};
  outline: none;
  border-radius: 30px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${color.black};
  padding: 13px 12px;
  margin-top: 10px;
  width: 271px;
  padding: 12px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 348px;
    padding: 16px;
  }
`;
export const EditBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.03em;
  line-height: 1.28571;
  border-radius: 30px;
  background-color: ${color.yellowPrimary};
  outline: none;
  border: 1px solid ${color.yellowPrimary};
  color: ${color.white};
  width: 295px;
  height: 42px;
  padding: 12px 0;
  margin-top: 21px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 380px;
    height: 52px;
  }
`;
