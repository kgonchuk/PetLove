import styled from "styled-components";
import color from "../../global/globalColors";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../global/breakPoints";
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerMenu = styled.div`
  padding: 40px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 40px 49px;
  }
`;
export const Menu = styled.aside`
  width: 218px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
  display: flex;
  background-color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
  @media screen and (min-width: ${breakpoints.medium}) {
    width: 374px;
  }
`;
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 28px;
  right: 40px;
`;
export const IconClose = styled.svg`
  width: 32px;
  height: 32px;
  /* stroke: black; */
  stroke: ${(props) =>
    props.ishomepage === "true" ? `${color.black}` : `${color.white}`};
  fill: ${(props) =>
    props.ishomepage === "true" ? `${color.black}` : `${color.white}`};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.black}` : `${color.white}`};
`;

export const MobileNav = styled.nav`
  display: flex;
  justify-content: space-between;

  flex: 1;
`;
export const MobileNavList = styled.ul`
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  @media screen and (min-width: ${breakpoints.medium}) {
    /* flex-direction: row; */
  }
`;
export const MobileLink = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-decoration: none;
  color: ${(props) => (props.ishomepage === "true" ? "#262626" : "#fff")};
  border: 1px solid
    ${(props) =>
      props.ishomepage === "true"
        ? "rgba(38, 38, 38, 0.15)"
        : "rgba(255, 255, 255, 0.15)"};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 120px;

  &.active {
    border: 1px solid
      ${(props) =>
        props.ishomepage === "true" ? "#f6b83d" : "rgba(255, 255, 255, 0.5)"};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const AuthMobContainer = styled.div``;
export const AuthMobList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
    padding: 0;
    justify-content: center;
  }
`;
export const AuthMobLinkLog = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border: 1px solid
    ${(props) =>
      props.ishomepage === "true" ? `${color.accentWhite}` : `${color.white}`};
  border-radius: 30px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.yellowPrimary};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.white}`};
  @media screen and (min-width: ${breakpoints.medium}) {
    min-width: 119px;
    /* padding: 15px 35px;
    font-size: 16px; */
  }
`;
export const AuthMobLinkReg = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.yellowSecondary};
  color: ${color.yellowPrimary};
  @media screen and (min-width: ${breakpoints.medium}) {
    min-width: 149px;
    /* padding: 15px 20px;
    font-size: 16px; */
  }
`;
export const LogOutBtn = styled.button`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;
  border-radius: 30px;
  padding: 12px 40px;
  border-color: transparent;
  background-color: ${(props) =>
    props.ishomepage === "true"
      ? `${color.white}`
      : `${color.yellowSecondary}`};
  color: ${(props) =>
    props.ishomepage === "true" ? `${color.white}` : `${color.yellowPrimary}`};
`;
