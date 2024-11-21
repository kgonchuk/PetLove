import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ListNews,
  NewsContainer,
  NewsHeadWrap,
  PaginationContainer,
} from "./NewsList.styled";
import {
  selectAllNews,
  selectCurrentPage,
  selectKeyword,
  selectTotalPages,
} from "../../redux/news/newsSelector";
import NewsItem from "../NewsItem/NewsItem";
import { getAllNews } from "../../redux/news/newsOperation";
import Pagination from "../Pagination/Pagination";
import SearchField from "../SearchField/SearchField";
import { setKeyword } from "../../redux/news/newsSlice";
import Title from "../Title/Title";
import { useLocation } from "react-router-dom";

const NewsList = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectAllNews);
  const keyword = useSelector(selectKeyword);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useSelector(selectTotalPages);
  const location = useLocation();

  const isnewspage = (location.pathname === "/news").toString();

  useEffect(() => {
    dispatch(getAllNews({ keyword, currentPage }));
  }, [dispatch, keyword, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (keyword) => {
    dispatch(setKeyword(keyword));
  };
  return (
    <NewsContainer>
      <NewsHeadWrap>
        <Title>News</Title>
        <SearchField onFilterSubmit={handleSearch} isnewspage={isnewspage} />
      </NewsHeadWrap>
      <ListNews>
        {results?.map((newItem) => (
          <NewsItem key={newItem._id} newItem={newItem} />
        ))}
      </ListNews>
      <PaginationContainer>
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          page={currentPage}
          handleLastPage={handleLastPage}
          handleFirstPage={handleFirstPage}
          hasMore={currentPage < totalPages}
          maxPages={totalPages}
          handleCurrentPage={handleCurrentPage}
        />
      </PaginationContainer>
    </NewsContainer>
  );
};

export default NewsList;
