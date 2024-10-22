import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import { IconDogMobile, LoginContainer } from "./LoginPage.styled";
import { HeroImg } from "../components/HeroImg/HeroImg";
import { HeroCard } from "../components/HeroAvatar/HeroAvatar";
import dog_avatar_x1 from "../images/🐶.png";
import dog_avatar_x2 from "../images/🐶@2x.png";

const Login = () => {
  return (
    <LoginContainer>
      <HeroImg>
        <IconDogMobile />
        <HeroCard
          avatarSrc={dog_avatar_x1}
          avatarSrc2x={dog_avatar_x2}
          title="Rich"
          birthDate="21.09.2020"
          description="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
        />
      </HeroImg>
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
