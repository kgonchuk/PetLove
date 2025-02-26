import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoticesItem from "../../components/NoticesItem/NoticesItem";
import { getFavorites } from "../../redux/favorite/favoriteOperations";
import {
  selectFavorites,
  selectViewed,
} from "../../redux/favorite/favoriteSelectors";
import { selectUserNoticesViewed } from "../../redux/auth/authSelector";

const MyNotices = () => {
  const [isChecked, setIsChecked] = useState("favorite");
  const [localPetList, setLocalPetList] = useState([]);

  const favoritesPets = useSelector(selectFavorites);
  const viewedNotices = useSelector(selectUserNoticesViewed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (favoritesPets && isChecked === "favorite") {
      setLocalPetList(favoritesPets);
    }
    if (isChecked === "viewed") {
      setLocalPetList(viewedNotices);
    }
  }, [isChecked, favoritesPets, viewedNotices]);

  const handleCheckedButton = (e) => {
    setIsChecked(e.target.name);
  };

  return (
    <section>
      <div>
        <button
          type="button"
          name={"favorite"}
          value={"favorite" === isChecked}
          onClick={handleCheckedButton}
        >
          My favorite pets
        </button>
        <button
          type="button"
          name={"viewed"}
          value={"viewed" === isChecked}
          onClick={handleCheckedButton}
        >
          Viewed
        </button>
      </div>

      {localPetList.length > 0 ? (
        <ul>
          {localPetList.map((notice) => (
            <NoticesItem key={notice._id} noticeInfo={notice} />
          ))}
        </ul>
      ) : (
        <div>
          {isChecked === "favorite" ? (
            <p>
              Oops,
              <span>looks like there aren't any furries</span>
              on our adorable page yet. Do not worry! View your pets on the
              "find your favorite pet" page and add them to your favorites.
            </p>
          ) : (
            <p>
              Oops,
              <span>looks like there aren't any furries</span> on our adorable
              page yet.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default MyNotices;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import NoticesItem from "../../components/NoticesItem/NoticesItem";
// import { getFavorites } from "../../redux/favorite/favoriteOperations";
// import {
//   selectUserNoticesFavorites,
//   selectUserNoticesViewed,
// } from "../../redux/auth/authSelector";
// import {
//   selectFavorites,
//   selectViewed,
// } from "../../redux/favorite/favoriteSelectors";
// import {
//   MyNoticesBtn,
//   MyNoticesContainer,
//   NoticesBtnWrap,
// } from "./MyNotices.styled";

// const MyNotices = () => {
//   const dispatch = useDispatch();
//   const [activeTab, setActiveTab] = useState(0);
//   const [favorite, setFavorite] = useState([]);

//   return (
//     <MyNoticesContainer>
//       <NoticesBtnWrap>
//         <MyNoticesBtn type="button">My favorite pets</MyNoticesBtn>
//         <MyNoticesBtn type="button">Viewed</MyNoticesBtn>
//       </NoticesBtnWrap>
//       {activeTab === 0 ? (
//         favorite.length > 0 ? (
//           <div>
//             <NoticesList props={favorite} />
//           </div>
//         ) : (
//           <p>
//             Oops, <p> looks like there aren't any furries </p> on our adorable
//             page yet. Do not worry! View your pets on the "find your favorite
//             pet" page and add them to your favorites.
//           </p>
//         )
//       ) : activeTab === 1 ? (
//         <div>
//           <NoticesList props={user.noticesViewed} />
//         </div>
//       ) : null}
//     </MyNoticesContainer>
//   );
// };

// export default MyNotices;
