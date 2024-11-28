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
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperation";
import { useAuth } from "../../hooks/useAuth";

export const UserNav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const ishomepage = (location.pathname === "/home").toString();
  const { user } = useAuth();

  return (
    <UserNavContainer>
      <LogOutBtn
        type="button"
        onClick={() => dispatch(logOut())}
        ishomepage={ishomepage}
      >
        Log Out
      </LogOutBtn>

      <UserProfile to="/profile" ishomepage={ishomepage}>
        <SvgIcon ishomepage={ishomepage}>
          <use href={`${icon}#icon-user-circle-o`} ishomepage={ishomepage} />
        </SvgIcon>
      </UserProfile>
      <UserName ishomepage={ishomepage}>{user?.name}</UserName>
    </UserNavContainer>
  );
};
