import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../global/breakPoints";
import color from "../../global/globalColors";

export const Wrap = styled.div``;

export const HeaderContainer = styled.header`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${(props) => (props.ishomepage === "true" ? "28px 20px" : "28px 0")};

  /* margin-bottom: ${(props) => getMarginBottom(props).small}; */

  @media only screen and (min-width: ${breakpoints.medium}) {
    /* margin-top: ${({ $isHomePage }) => ($isHomePage ? "16px" : 0)}; */
    /* padding: ${({ $isHomePage }) => ($isHomePage ? "0px 32px" : 0)}; */
    padding: ${(props) =>
      props.ishomepage === "true" ? "28px 32px" : "28px 0"};

    /* margin-bottom: ${(props) => getMarginBottom(props).medium}; */
    /* padding: 10px 32px; */
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    padding: ${(props) =>
      props.ishomepage === "true" ? "32px 64px" : "px 32px"};
  }
`;

const getMarginBottom = (props) => {
  if (props.$isFriendsPage) {
    return {
      large: "96px",
      medium: "85px",
      small: "54px",
    };
  }
  if (props.$isNoticesPage) {
    return {
      large: "96px",
      medium: "85px",
      small: "54px",
    };
  }
  return {
    large: "32px",
    medium: "32px",
    small: "20px",
  };
};
export const LogoLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
  margin-right: auto;

  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.black}`};
  @media only screen and (min-width: ${breakpoints.medium}) {
    font-size: 28px;
    line-height: 28px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    margin-right: ${(props) =>
      props.ishomepage === "true" ? "280px" : "313px"};
  }
`;
export const Navigation = styled.div``;
export const Navlist = styled.ul`
  display: none;
  li {
    list-style: none;
  }
  @media only screen and (min-width: ${breakpoints.medium}) {
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.03em;
  border: 1px solid
    ${(props) =>
      props.ishomepage === "true" ? `${color.accentWhite}` : `${color.grey}`};
  border-radius: 30px;
  padding: 15px 20px;
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.black}`};
`;
export const Icon = styled.svg`
  width: 17px;
  height: 17px;
  stroke: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
  fill: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 23px;
    height: 23px;
  }
`;
export const BurgerBtn = styled.button`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export const IconBurger = styled.svg`
  width: 24px;
  height: 24px;

  stroke: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.black}`};
  fill: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.black}`};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.black}`};
  @media only screen and (min-width: ${breakpoints.medium}) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: ${breakpoints.large}) {
    display: none;
  }
`;
