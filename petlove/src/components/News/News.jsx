import React from "react";
import { NewsContainer, NewsWrap } from "./News.styled";
import Title from "../Title/Title";
import SearchField from "../SearchField/SearchField";
import NewsList from "../NewsList/NewsList";

const News = () => {
  return (
    <NewsContainer>
      <NewsWrap>
        <Title>News</Title>
      </NewsWrap>
      <NewsList />
    </NewsContainer>
  );
};

export default News;
