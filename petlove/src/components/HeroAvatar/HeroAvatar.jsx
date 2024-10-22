import React from "react";
import {
  CardBirth,
  CardBirthNumber,
  HeroAvatar,
  HeroCardTitle,
  WrapperCardBirth,
  WrapperHeroAvatar,
  WrapperHeroCard,
  WrapperHeroCardDesc,
  WrapperHeroCardText,
  WrapperHeroCardTitle,
} from "./HeroAvatar.styled";

export const HeroCard = ({
  avatarSrc,
  avatarSrc2x,
  title,
  birthDate,
  description,
}) => {
  return (
    <WrapperHeroCard>
      <WrapperHeroAvatar>
        <HeroAvatar
          $avatarSrc={avatarSrc}
          $avatarSrc2x={avatarSrc2x}
          alt="Hero Avatar"
        />
      </WrapperHeroAvatar>
      <WrapperHeroCardDesc>
        <WrapperHeroCardTitle>
          <HeroCardTitle>{title}</HeroCardTitle>
          <WrapperCardBirth>
            <CardBirth>Birthday: </CardBirth>
            <CardBirthNumber>{birthDate}</CardBirthNumber>
          </WrapperCardBirth>
        </WrapperHeroCardTitle>
        <WrapperHeroCardText>{description}</WrapperHeroCardText>
      </WrapperHeroCardDesc>
    </WrapperHeroCard>
  );
};
