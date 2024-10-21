import styled from "styled-components";
import { NavLink } from "react-router-dom";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
export const UserNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
export const LogOutBtn = styled.button`
  display: none;
  /* display: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  border-radius: 30px;
  padding: 15px 20px;
  background-color: ${(props) =>
    props.ishomepage === "true" ? `${color.yellowPrimary}` : `${color.white}`};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.white}`}; */

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: ${(props) => (props.ishomepage === "true" ? "none" : "block")};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: ${color.yellowSecondary};
    background-color: ${color.yellowPrimary};
    border: none;
    border-radius: 30px;
    padding: 15px 35px;
    cursor: pointer;
  }
`;
export const UserContainer = styled.div``;
export const UserProfile = styled(NavLink)``;
export const UserName = styled.p`
  display: none;

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    margin-right: 8px;
    color: ${(props) =>
      props.ishomepage === "true" ? `${color.white}` : `${color.black}`};
  }
`;

export const SvgIcon = styled.svg`
  display: ${(props) => (props.ishomepage === "true" ? "block" : "none")};
  width: 35px;
  height: 35px;
  stroke: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
  fill: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: block;
  }
`;
