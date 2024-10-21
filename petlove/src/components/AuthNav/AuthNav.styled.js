import styled from "styled-components";
import { NavLink } from "react-router-dom";
import color from "../../global/globalColors";
import { breakpoints } from "../../global/breakPoints";
export const AuthList = styled.ul`
  display: none;

  li {
    list-style: none;
  }

  @media only screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
   
  }
`;
export const AuthLinkLogin = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  border: 1px solid
    ${(props) =>
      props.ishomepage === "true"
        ? `${color.accentWhite}`
        : `${color.yellowPrimary}`};
  border-radius: 30px;
  padding: 15px 20px;
  background-color: ${color.yellowPrimary};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.white}`};
`;
export const AuthLinkReg = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  border-radius: 30px;
  padding: 15px 20px;
  background-color: ${(props) =>
    props.ishomepage === "true"
      ? `${color.white}`
      : `${color.yellowSecondary}`};
  color: ${color.yellowPrimary};
`;
