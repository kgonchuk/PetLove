import { AuthLinkLogin, AuthLinkReg, AuthList } from "./AuthNav.styled";
import { useLocation } from "react-router-dom";

export const AuthNav = () => {
  const location = useLocation();
  const ishomepage = (location.pathname === "/home").toString();
  return (
    <AuthList ishomepage={ishomepage}>
      <li>
        <AuthLinkLogin to="/login" ishomepage={ishomepage}>
          Log in
        </AuthLinkLogin>
      </li>
      <li>
        <AuthLinkReg to="/registration" ishomepage={ishomepage}>
          Registration
        </AuthLinkReg>
      </li>
    </AuthList>
  );
};
