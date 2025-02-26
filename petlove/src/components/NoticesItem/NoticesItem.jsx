import React, { useState } from "react";
import {
  EmptyHeartIcon,
  LearnMoreBtn,
  LikeBtn,
  LikeIcon,
  NoticesContainer,
  NoticesFooter,
  NoticesInfoItem,
  NoticesInfoItemDesc,
  NoticesInfoList,
  NoticessImg,
  NoticessImgWrap,
  NoticesTitle,
  NoticesWrapTitle,
  StarSvg,
  StarWrap,
} from "./NoticesItem.styled";
import icon from "../../images/sprite.svg";
import AttentionModal from "../ModalWindow/AttentionModal/AttentionModal";
import ModalNotice from "../ModalWindow/ModalNotice/ModalNotice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelector";
import {
  selectFavorites,
  selectViewed,
} from "../../redux/favorite/favoriteSelectors";
import {
  addFavorites,
  getFavorites,
  removeFavorites,
} from "../../redux/favorite/favoriteOperations";

import { parseISO, format } from "date-fns";
import {
  addFavoriteNotice,
  addNoticeToViewed,
  deleteFavoriteNotice,
} from "../../redux/auth/authOperation";

import Notiflix from "notiflix";
import { setViewedNotices } from "../../redux/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";

const NoticesItem = ({ noticeInfo }) => {
  // const {
  //   imgURL,
  //   title,
  //   popularity,
  //   name,
  //   birthday,
  //   sex,
  //   species,
  //   category,
  //   comment,
  //   _id,
  // } = noticeInfo;

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);
  // const isAuthenticated = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();
  // const favorites = useSelector(selectFavorites);
  // const viewed = useSelector(selectViewed);
  // const isInFavorites = favorites.some((favPet) => favPet._id === _id);

  // const handleAddFavorites = async (id) => {
  //   if (!isInFavorites) {
  //     await dispatch(addFavorites(id));
  //     dispatch(getFavorites());
  //   } else {
  //     await dispatch(removeFavorites(id));
  //     dispatch(getFavorites());
  //   }
  // };

  // const formatedDate = () => {
  //   if (birthday) {
  //     const date = parseISO(birthday);
  //     return format(date, "dd.MM.yyyy");
  //   }
  // };

  // const handleLearnMore = () => {
  //   setIsModalOpen(true);
  //   if (isModalOpen) {
  //     dispatch(setViewedNotices(noticeInfo));
  //     Notiflix.Notify.success("success");
  //   }
  // };

  // const handleFavoriteClick = () => {
  //   if (!isAuthenticated) {
  //     setIsModalOpen(true);
  //   } else {
  //     const localFavorites =
  //       JSON.parse(localStorage.getItem("favorites")) || [];
  //     if (isFavorite) {
  //       dispatch(deleteFavoriteNotice(noticeInfo._id));
  //       const updatedFavorites = localFavorites.filter(
  //         (id) => id !== noticeInfo._id
  //       );
  //       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  //       setIsFavorite(false);
  //     } else {
  //       dispatch(addFavoriteNotice(noticeInfo._id));
  //       localStorage.setItem(
  //         "favorites",
  //         JSON.stringify([...localFavorites, noticeInfo._id])
  //       );
  //       setIsFavorite(true);
  //     }
  //   }
  // };

  // const handleToggleFavoriteFromModal = () => {
  //   handleFavoriteClick();
  // };

  const {
    _id,
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
  } = noticeInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { isLoggedIn } = useAuth;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isInFavorites = favorites.some((favPet) => favPet._id === _id);

  const handleAddFavorites = async (id) => {
    if (!isInFavorites) {
      await dispatch(addFavorites(id));
      dispatch(getFavorites());
    } else {
      await dispatch(removeFavorites(id));
      dispatch(getFavorites());
    }
  };

  const formatedDate = () => {
    if (birthday) {
      const date = parseISO(birthday);
      return format(date, "dd.MM.yyyy");
    }
  };

  const handleLearnMore = () => {
    setIsModalOpen(!isModalOpen);

    if (isModalOpen) {
      dispatch(setViewedNotices(noticeInfo));
      Notiflix.Notify.success("success");
    }
  };

  return (
    <NoticesContainer>
      <NoticessImgWrap>
        <NoticessImg src={imgURL} alt="Animal foto" />
      </NoticessImgWrap>

      <NoticesWrapTitle>
        <NoticesTitle>{title}</NoticesTitle>
        <StarWrap>
          <StarSvg>
            <use href={`${icon}#star`} />
          </StarSvg>
          {popularity}
        </StarWrap>
      </NoticesWrapTitle>

      <NoticesInfoList>
        <NoticesInfoItem>
          Name
          <NoticesInfoItemDesc>{name}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Birthday
          <NoticesInfoItemDesc>{birthday}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Sex
          <NoticesInfoItemDesc>{sex}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Species
          <NoticesInfoItemDesc>{species}</NoticesInfoItemDesc>
        </NoticesInfoItem>
        <NoticesInfoItem>
          Category
          <NoticesInfoItemDesc>{category}</NoticesInfoItemDesc>
        </NoticesInfoItem>
      </NoticesInfoList>
      <NoticesInfoItemDesc>{comment}</NoticesInfoItemDesc>
      <NoticesFooter>
        <LearnMoreBtn type="button" onClick={handleLearnMore}>
          Learn More
        </LearnMoreBtn>
        <LikeBtn type="button" onClick={() => handleAddFavorites(_id)}>
          {isInFavorites ? (
            <EmptyHeartIcon>
              <use href={`${icon}#icon-trash-2`} />
            </EmptyHeartIcon>
          ) : (
            <LikeIcon>
              <use href={`${icon}#favorite-heart`} />
            </LikeIcon>
          )}
        </LikeBtn>
      </NoticesFooter>
      {isModalOpen && isLoggedIn && (
        <ModalNotice
          onClose={() => setIsModalOpen(false)}
          noticeInfo={noticeInfo}
          birthday={formatedDate}
        />
      )}
      {isModalOpen && !isLoggedIn && (
        <AttentionModal onClose={() => setIsModalOpen(false)} />
      )}
    </NoticesContainer>
  );
};

export default NoticesItem;
