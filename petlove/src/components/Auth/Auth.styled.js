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
  @media only screen and (min-width: ${breakpoints.medium}) {
    padding: 71px 140px;
    border-radius: 60px;
    width: 424px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    margin-right: -32px;
    padding: 118px 84px;

    /* width: 592px; */
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
  margin-bottom: 24px;
  color: ${color.black};

  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 32px;
  }
`;
export const ContainerForm = styled.div``;

export const InputGroup = styled.div``;
export const FormField = styled.div``;
export const InputField = styled(Field)`
  border: 1px solid ${color.accentBlack};
  outline: none;
  border-radius: 30px;
  margin-bottom: 10px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${color.secondaryBlack};
  width: 292px;
  height: 40px;

  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-bottom: 16px;
    width: 410px;
    height: 52px;
    padding: 0;
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
  margin-top: 30px;
  @media only screen and (min-width: ${breakpoints.medium}) {
    margin-top: 48px;
    width: 424px;
    height: 52px;
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
