import { useAuth } from "../../hooks/useAuth";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserNav } from "../UserNav/UserNav";

import {
  BurgerBtn,
  HeaderContainer,
  Icon,
  IconBurger,
  Link,
  LogoLink,
  Navlist,
  Wrap,
} from "./Header.styled";
import icon from "../../images/sprite.svg";
import { useLocation } from "react-router-dom";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useState } from "react";

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const ishomepage = (location.pathname === "/home").toString();

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <Wrap ishomepage={ishomepage}>
      <HeaderContainer ishomepage={ishomepage}>
        <LogoLink to="/home" ishomepage={ishomepage}>
          petl
          <Icon ishomepage={ishomepage}>
            {" "}
            <use href={`${icon}#icon-heart-circle`} />
          </Icon>
          ove
        </LogoLink>

        <Navlist>
          <li>
            <Link to="/news" ishomepage={ishomepage}>
              News
            </Link>
          </li>
          <li>
            <Link to="/notices" ishomepage={ishomepage}>
              Find Pet
            </Link>
          </li>
          <li>
            <Link to="/friends" ishomepage={ishomepage}>
              Our Friends
            </Link>
          </li>
        </Navlist>

        {isLoggedIn ? <UserNav /> : <AuthNav />}

        <BurgerBtn
          type="button"
          onClick={openMobileMenu}
          ishomepage={ishomepage}
        >
          <IconBurger ishomepage={ishomepage}>
            {" "}
            <use href={`${icon}#icon-burger-menu`} />
          </IconBurger>
        </BurgerBtn>

        {isMobileMenuOpen && (
          <MobileMenu onClose={closeMobileMenu} ishomepage={ishomepage} />
        )}
      </HeaderContainer>
    </Wrap>
  );
};
