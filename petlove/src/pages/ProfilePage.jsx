import React, { useEffect } from "react";
import UserCard from "../components/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from "../redux/auth/authSelector";
import { currentUserFull, getFullUserInfo } from "../redux/auth/authOperation";
import { ProfilePageWrap } from "./ProfilePage.styled";
import MyNotices from "../components/MyNotices/MyNotices";
import {
  selectFavorites,
  selectViewed,
} from "../redux/favorite/favoriteSelectors";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const noticesFavorites = useSelector(selectFavorites);

  const noticesViewed = useSelector(selectViewed);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getFullUserInfo());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <ProfilePageWrap>
      <UserCard />
      <MyNotices notices={noticesFavorites} viewedNotices={noticesViewed} />
    </ProfilePageWrap>
  );
};

export default ProfilePage;
