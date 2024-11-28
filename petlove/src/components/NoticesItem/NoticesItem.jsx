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
import { selectFavorites } from "../../redux/favorite/favoriteSelectors";
import {
  addFavorites,
  getFavorites,
  removeFavorites,
} from "../../redux/favorite/favoriteOperations";

const NoticesItem = ({ noticeInfo, favorite }) => {
  const {
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
    _id,
  } = noticeInfo;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsLoggedIn);

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
        <LearnMoreBtn type="button" onClick={() => setIsModalOpen(true)}>
          Learn More
        </LearnMoreBtn>
        <LikeBtn type="button" onClick={() => handleAddFavorites(_id)}>
          {isInFavorites ? (
            <EmptyHeartIcon>
              <use href={`${icon}#favorite-heart`} />
            </EmptyHeartIcon>
          ) : (
            <LikeIcon>
              <use href={`${icon}#favorite-heart`} />
            </LikeIcon>
          )}
        </LikeBtn>
      </NoticesFooter>
      {isModalOpen && isAuthenticated && (
        <ModalNotice
          onClose={() => setIsModalOpen(false)}
          noticeInfo={noticeInfo}
        />
      )}
      {isModalOpen && !isAuthenticated && (
        <AttentionModal onClose={() => setIsModalOpen(false)} />
      )}
    </NoticesContainer>
  );
};

export default NoticesItem;
