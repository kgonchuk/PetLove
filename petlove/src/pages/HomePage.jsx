import React from "react";
import {
  HomePageContainer,
  HomePageImg,
  HomePageText,
  HomePageTitle,
  HomePageTitleSpan,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <HomePageTitle>
          Take good <HomePageTitleSpan>care</HomePageTitleSpan> of your small
          pets
        </HomePageTitle>
        <HomePageText>
          {" "}
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </HomePageText>
      </HomePageContainer>
      <HomePageImg />
    </>
  );
};

export default HomePage;
