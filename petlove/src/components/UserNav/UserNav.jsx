import {
  LogOutBtn,
  SvgIcon,
  UserContainer,
  UserName,
  UserNavContainer,
  UserProfile,
} from "./UserNav.styled";
import { useLocation } from "react-router-dom";
import icon from "../../images/sprite.svg";

export const UserNav = () => {
  const location = useLocation();
  const ishomepage = (location.pathname === "/home").toString();

  return (
    <UserNavContainer>
      <LogOutBtn ishomepage={ishomepage}>Log Out</LogOutBtn>

      <UserProfile to="/profile" ishomepage={ishomepage}>
        <SvgIcon ishomepage={ishomepage}>
          <use href={`${icon}#icon-user-circle-o`} ishomepage={ishomepage} />
        </SvgIcon>
      </UserProfile>
      <UserName ishomepage={ishomepage}>Anna</UserName>
    </UserNavContainer>
  );
};
