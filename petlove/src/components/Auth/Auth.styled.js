import { Field, Form } from "formik";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";

export const AuthContainer = styled.div`
  border-radius: 30px;
  background-color: ${color.white};
  padding: 60px 20px;
  width: 295px;
  padding: ${(props) => (props.isregisterpage === "true" ? "27px " : "71px")}
    20px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    border-radius: 60px;
    width: 424px;
    padding: ${(props) => (props.isregisterpage === "true" ? "30px " : "71px")}
      140px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    margin-right: -32px;
    padding: 118px 84px;
    padding: ${(props) => (props.isregisterpage === "true" ? "69px " : "114px")}
      84px;
  }
`;
export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormWrap = styled.div``;
export const AuthTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  line-height: 1;
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 54px;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
  }
`;
export const AuthText = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  color: ${color.black};
  margin-bottom: ${(props) =>
    props.isregisterpage === "true" ? "20px " : "24px"};
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 32px;
  }
`;
export const AuthTextRegister = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  color: ${color.black};

  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 32px;
  }
`;
export const ContainerForm = styled.div``;

export const InputGroup = styled.div``;
export const FormField = styled.div`
  position: relative;
`;
export const InputField = styled(Field)`
  border: 1px solid ${color.accentBlack};
  outline: none;
  border-radius: 30px;
  margin-bottom: 10px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${color.secondaryBlack};
  width: 281px;
  height: 40px;
  padding: 0;
  padding-left: 12px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-bottom: 16px;
    width: 410px;
    height: 52px;
    padding: 0;
    padding-left: 16px;
  }
`;
export const BtnContainer = styled.div``;
export const LogInBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.03em;
  line-height: 1.28571;
  text-transform: uppercase;
  border-radius: 30px;
  background-color: ${color.yellowPrimary};
  outline: none;
  border: 1px solid ${color.yellowPrimary};
  color: ${color.white};
  width: 295px;
  height: 42px;
  padding: 12px 0;
  margin-top: ${(props) =>
    props.isregisterpage === "true" ? "14px " : "30px"};
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 48px;
    width: 424px;
    height: 52px;
    margin-top: ${(props) =>
      props.isregisterpage === "true" ? "16px " : "48px"};
  }
`;
export const LinkWrap = styled.div`
  margin-top: 12px;
  text-align: center;
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 16px;
  }
`;
export const LinkText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: ${color.secondaryBlack};
`;
export const RegisterLink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: ${color.yellowPrimary};
`;
export const FeedbackMessage = styled.div``;
export const Icon = styled.svg`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 18px;
  height: 18px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 22px;
    height: 22px;
    top: 15px;
    right: 15px;
  }
`;
