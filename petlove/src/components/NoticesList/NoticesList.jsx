import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import NoticesItem from "../NoticesItem/NoticesItem";
import {
  NoticesContainer,
  NoticesFilterContainer,
  PaginationContainer,
  NoticesWrap,
  NoticesFilterWrap,
  ResetBtn,
  NoticesSortWrap,
} from "./NoticesList.styled";
import {
  selectAllNotices,
  selectFilteredNotices,
  selectFilters,
  selectFilterWord,
  selectKeyword,
  selectNotices,
  selectNoticesHasMore,
  selectNoticesItems,
  selectNoticesTotalPages,
  selectQueryParams,
  selectSearchCategory,
  selectSearchGender,
  selectSearchLocation,
  selectSearchSpecies,
  selectSortParam,
  selectTotalPages,
} from "../../redux/notices/noticesSelector";
import {
  fetchFavorite,
  fetchNotices,
} from "../../redux/notices/noticesOperation";
import Title from "../Title/Title";
import Pagination from "../Pagination/Pagination";
import NoticesFilter from "../NoticesFilter/NoticesFilter";
import { SortOptions } from "../SortOptions/SortOptions";

const NoticesList = ({ isNoticesPage }) => {
  const dispatch = useDispatch();

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const limit = 6;
  const hasMore = useSelector(selectNoticesHasMore);
  const totalPages = useSelector(selectNoticesTotalPages);
  const notices = useSelector(selectNotices);
  const selectedCategory = useSelector(selectSearchCategory);
  const selectedGender = useSelector(selectSearchGender);
  const selectedSpices = useSelector(selectSearchSpecies);
  const selectedLocation = useSelector(selectSearchLocation);
  const filterWord = useSelector(selectFilterWord);

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPageNumber,
        limit,
        category: selectedCategory,
        sex: selectedGender,
        species: selectedSpices,
        locationId: selectedLocation,
        keyword: filterWord,
      })
    );
  }, [
    dispatch,
    currentPageNumber,
    selectedCategory,
    selectedGender,
    selectedSpices,
    selectedLocation,
    filterWord,
  ]);

  const sortNotices = (notices) => {
    const sorted = [...notices]; // Робимо копію масиву
    switch (sortOrder) {
      case "popular":
        return sorted.sort((a, b) => b.popularity - a.popularity);
      case "unpopular":
        return sorted.sort((a, b) => a.popularity - b.popularity);
      case "cheap":
        return sorted.sort(
          (a, b) =>
            (parseFloat(a.price) || Infinity) -
            (parseFloat(b.price) || Infinity)
        );
      case "expensive":
        return sorted.sort(
          (a, b) =>
            (parseFloat(b.price) || -Infinity) -
            (parseFloat(a.price) || -Infinity)
        );
      default:
        return sorted;
    }
  };

  const filteredNotices = sortNotices(
    notices.filter((notice) => {
      return selectedGender ? notice.sex === selectedGender : true;
    })
  );
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPageNumber(newPage);
    }
  };

  const handleLastPage = () => {
    setCurrentPageNumber(totalPages);
  };

  const handleFirstPage = () => {
    setCurrentPageNumber(1);
  };

  const handleCurrentPage = (page) => {
    setCurrentPageNumber(page);
  };

  return (
    <NoticesWrap>
      <Title>Find your favorite pet</Title>
      <NoticesFilterWrap>
        <NoticesFilter $isNoticesPage={isNoticesPage} />

        <SortOptions onChangeSortOrder={setSortOrder} />
        {/* <ResetBtn type="button" onClick={handleResetFilters}>
            Reset
          </ResetBtn> */}
      </NoticesFilterWrap>
      <NoticesContainer>
        {filteredNotices?.map((notice) => (
          <NoticesItem key={notice._id} noticeInfo={notice} />
        ))}
      </NoticesContainer>
      <PaginationContainer>
        <Pagination
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          page={currentPageNumber}
          handleLastPage={handleLastPage}
          handleFirstPage={handleFirstPage}
          hasMore={hasMore}
          maxPages={totalPages}
          handleCurrentPage={handleCurrentPage}
        />
      </PaginationContainer>
    </NoticesWrap>
  );
};

export default NoticesList;
