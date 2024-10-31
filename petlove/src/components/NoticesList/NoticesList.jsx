import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";

import NoticesItem from "../NoticesItem/NoticesItem";
import { NoticesContainer } from "./NoticesList.styled";
import {
  selectAllNotices,
  selectFilteredNotices,
  selectFilters,
  selectKeyword,
  selectNoticesItems,
  selectNoticesTotalPages,
  selectTotalPages,
} from "../../redux/notices/noticesSelector";
import { fetchNotices } from "../../redux/notices/noticesOperation";
import { PaginationContainer } from "../Pagination/Pagination.styled";
import Pagination from "../Pagination/Pagination";

const NoticesList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectNoticesItems);
  const filters = useSelector(selectFilters);
  const totalPages = useSelector(selectNoticesTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
    dispatch(fetchNotices({ filters, page: currentPage, limit }));
  }, [filters, currentPage, limit, dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <>
      <Title>Find your favorite pet</Title>
      {Array.isArray(items.results) && items.results.length > 0 ? (
        <NoticesContainer>
          {items.results.map((noticeItem) => (
            <NoticesItem key={noticeItem._id} noticeInfo={noticeItem} />
          ))}
        </NoticesContainer>
      ) : (
        <p>
          Oops, <span>looks like there aren't any notifications</span> on our
          adorable page. Don't worry! Change filtering.
        </p>
      )}
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
    </>
  );
};

export default NoticesList;
