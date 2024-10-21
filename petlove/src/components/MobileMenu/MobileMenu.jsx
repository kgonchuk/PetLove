import {
  AuthMobContainer,
  AuthMobLinkLog,
  AuthMobLinkReg,
  AuthMobList,
  BackDrop,
  CloseBtn,
  ContainerMenu,
  IconClose,
  LogOutBtn,
  Menu,
  MobileLink,
  MobileNav,
  MobileNavList,
} from "./MobileMenu.styled";
import { useAuth } from "../../hooks/useAuth";

export const MobileMenu = ({ ishomepage, onClose }) => {
  const { isLoggedIn } = useAuth();

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(true);
    }
  };
  const onCloseMobileMenu = () => {
    onClose(false);
  };
  return (
    <BackDrop onClick={handleBackDropClick}>
      <Menu ishomepage={ishomepage}>
        <ContainerMenu>
          <CloseBtn type="button" onClick={onCloseMobileMenu}>
            {ishomepage === "true" ? (
              <IconClose
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#262626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#262626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </IconClose>
            ) : (
              <IconClose
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </IconClose>
            )}
          </CloseBtn>
          <MobileNav>
            <MobileNavList>
              <li>
                <MobileLink to="/news" ishomepage={ishomepage}>
                  {" "}
                  News
                </MobileLink>
              </li>
              <li>
                <MobileLink to="/notices" ishomepage={ishomepage}>
                  {" "}
                  Find Pet
                </MobileLink>
              </li>
              <li>
                <MobileLink to="/friends" ishomepage={ishomepage}>
                  Our Friends
                </MobileLink>
              </li>
            </MobileNavList>
          </MobileNav>
          {/* <LogOutBtn>LOG OUT</LogOutBtn> */}
          {isLoggedIn ? (
            <LogOutBtn></LogOutBtn>
          ) : (
            <AuthMobContainer>
              <AuthMobList>
                <li>
                  <AuthMobLinkLog to="/login">Log in</AuthMobLinkLog>
                </li>
                <li>
                  <AuthMobLinkReg to="/registration">
                    Registration
                  </AuthMobLinkReg>
                </li>
              </AuthMobList>
            </AuthMobContainer>
          )}
        </ContainerMenu>
      </Menu>
    </BackDrop>
  );
};
