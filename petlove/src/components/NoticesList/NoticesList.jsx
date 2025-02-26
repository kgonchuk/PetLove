// import React, { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import NoticesItem from "../NoticesItem/NoticesItem";
// import {
//   NoticesContainer,
//   PaginationContainer,
//   NoticesWrap,
//   NoticesFilterWrap,
// } from "./NoticesList.styled";
// import {
//   selectFilterWord,
//   selectNotices,
//   selectNoticesHasMore,
//   selectNoticesTotalPages,
//   selectSearchCategory,
//   selectSearchGender,
//   selectSearchLocation,
//   selectSearchSpecies,
// } from "../../redux/notices/noticesSelector";
// import { fetchNotices } from "../../redux/notices/noticesOperation";
// import Title from "../Title/Title";
// import Pagination from "../Pagination/Pagination";
// import NoticesFilter from "../NoticesFilter/NoticesFilter";
// import { SortOptions } from "../SortOptions/SortOptions";
// import { getFavorites } from "../../redux/favorite/favoriteOperations";

// const NoticesList = ({ isNoticesPage, props }) => {
//   const dispatch = useDispatch();

//   const [currentPageNumber, setCurrentPageNumber] = useState(1);
//   const [sortOrder, setSortOrder] = useState("");
//   const limit = 6;
//   const hasMore = useSelector(selectNoticesHasMore);
//   const totalPages = useSelector(selectNoticesTotalPages);
//   const notices = useSelector(selectNotices);
//   const selectedCategory = useSelector(selectSearchCategory);
//   const selectedGender = useSelector(selectSearchGender);
//   const selectedSpices = useSelector(selectSearchSpecies);
//   const selectedLocation = useSelector(selectSearchLocation);
//   const filterWord = useSelector(selectFilterWord);

//   useEffect(() => {
//     dispatch(
//       fetchNotices({
//         page: currentPageNumber,
//         limit,
//         category: selectedCategory,
//         sex: selectedGender,
//         species: selectedSpices,
//         locationId: selectedLocation,
//         keyword: filterWord,
//       })
//     );
//   }, [
//     dispatch,
//     currentPageNumber,
//     selectedCategory,
//     selectedGender,
//     selectedSpices,
//     selectedLocation,
//     filterWord,
//   ]);

//   useEffect(() => {
//     dispatch(getFavorites());
//   }, [dispatch]);

//   const sortNotices = (notices) => {
//     const sorted = [...notices];
//     switch (sortOrder) {
//       case "popular":
//         return sorted.sort((a, b) => b.popularity - a.popularity);
//       case "unpopular":
//         return sorted.sort((a, b) => a.popularity - b.popularity);
//       case "cheap":
//         return sorted.sort(
//           (a, b) =>
//             (parseFloat(a.price) || Infinity) -
//             (parseFloat(b.price) || Infinity)
//         );
//       case "expensive":
//         return sorted.sort(
//           (a, b) =>
//             (parseFloat(b.price) || -Infinity) -
//             (parseFloat(a.price) || -Infinity)
//         );
//       default:
//         return sorted;
//     }
//   };

//   const filteredNotices = sortNotices(
//     notices.filter((notice) => {
//       return selectedGender ? notice.sex === selectedGender : true;
//     })
//   );
//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPageNumber(newPage);
//     }
//   };

//   const handleLastPage = () => {
//     setCurrentPageNumber(totalPages);
//   };

//   const handleFirstPage = () => {
//     setCurrentPageNumber(1);
//   };

//   const handleCurrentPage = (page) => {
//     setCurrentPageNumber(page);
//   };

//   return (
//     <NoticesWrap>
//       <Title>Find your favorite pet</Title>
//       <NoticesFilterWrap>
//         <NoticesFilter $isNoticesPage={isNoticesPage} />

//         <SortOptions onChangeSortOrder={setSortOrder} />
//       </NoticesFilterWrap>
//       <NoticesContainer>
//         {filteredNotices?.map((notice) => (
//           <NoticesItem key={notice._id} noticeInfo={notice} />
//         ))}
//       </NoticesContainer>
//       <PaginationContainer>
//         <Pagination
//           totalPages={totalPages}
//           handlePageChange={handlePageChange}
//           page={currentPageNumber}
//           handleLastPage={handleLastPage}
//           handleFirstPage={handleFirstPage}
//           hasMore={hasMore}
//           maxPages={totalPages}
//           handleCurrentPage={handleCurrentPage}
//         />
//       </PaginationContainer>
//     </NoticesWrap>
//   );
// };

// export default NoticesList;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../redux/notices/noticesOperation";
import { getFavorites } from "../../redux/favorite/favoriteOperations";
import {
  selectFilteredNotices,
  selectFilters,
  selectFilterWord,
  selectNotices,
  selectSearchGender,
} from "../../redux/notices/noticesSelector";
import NoticesItem from "../NoticesItem/NoticesItem";

export const NoticesList = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("");
  const selectedGender = useSelector(selectSearchGender);
  const notices = useSelector(selectNotices);

  const keyword = useSelector(selectFilterWord);
  // const filteredNotices = useSelector(selectFilteredNotices);s

  const sortNotices = (notices) => {
    const sorted = [...notices];
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

  useEffect(() => {
    dispatch(fetchNotices(keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <>
      <ul>
        {filteredNotices?.map((notice) => (
          <NoticesItem key={notice._id} noticeInfo={notice} />
        ))}
      </ul>
    </>
  );
};
