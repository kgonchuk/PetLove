import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import { IconCatMobile, RegistrContainer } from "./RegistrationPage.styled";
import { HeroImg } from "../components/HeroImg/HeroImg";
import { HeroCard } from "../components/HeroAvatar/HeroAvatar";
import cat_avatar_x1 from "../images/🐈.png";
import cat_avatar_x2 from "../images/🐶@2x.png";

const Registration = () => {
  return (
    <RegistrContainer>
      <HeroImg>
        <IconCatMobile />
        <HeroCard
          avatarSrc={cat_avatar_x1}
          avatarSrc2x={cat_avatar_x2}
          title="Jack"
          birthDate="18.10.2021"
          description="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
        />
      </HeroImg>
      <RegisterForm />
    </RegistrContainer>
  );
};

export default Registration;
