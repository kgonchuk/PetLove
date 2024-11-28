import React from "react";
import ReactStars from "react-rating-stars-component";
import ModalPortal from "../ModalPortal/ModalPortal";
import {
  BtnAdd,
  BtnContact,
  BtnRemove,
  EmptyHeartIcon,
  ImgCategory,
  ModalBtnWrap,
  ModalContainer,
  NoticesDesc,
  Raiting,
  stylesFindPet,
} from "./ModalNotice.styled";
import {
  NoticesInfoItem,
  NoticesInfoItemDesc,
  NoticesInfoList,
  NoticessImg,
  NoticessImgWrap,
  NoticesTitle,
  StarWrap,
} from "./ModalNotice.styled";
import icon from "../../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../redux/favorite/favoriteSelectors";
import {
  addFavorites,
  getFavorites,
  removeFavorites,
} from "../../../redux/favorite/favoriteOperations";

const ModalNotice = ({ onClose, open, noticeInfo }) => {
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

  const isInFavorites = favorites.some((favPet) => favPet._id === _id);

  const handleRemoveFavorites = async (id) => {
    await dispatch(removeFavorites(id));
    dispatch(getFavorites());
  };

  const handleAddFavorites = async (id) => {
    await dispatch(addFavorites(id));
    dispatch(getFavorites());
  };

  const normalizedRating = (rating) => {
    const minRating = 3;
    const maxRating = 273;
    const normalizedRating =
      ((rating - minRating) / (maxRating - minRating)) * 5;
    return normalizedRating;
  };

  return (
    <ModalPortal onClose={onClose} open={open} $styles={stylesFindPet}>
      <ModalContainer>
        <NoticessImgWrap>
          <ImgCategory>
            <p>{category}</p>
          </ImgCategory>
          <NoticessImg src={imgURL} alt="Animal foto" />
        </NoticessImgWrap>

        <NoticesTitle>{title}</NoticesTitle>
        <StarWrap>
          <ReactStars
            count={5}
            value={normalizedRating(popularity)}
            size={16}
            isHalf={true}
            activeColor="#ffd700"
          />
          <Raiting>{popularity}</Raiting>
        </StarWrap>

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
        </NoticesInfoList>
        <NoticesDesc>{comment}</NoticesDesc>
        <ModalBtnWrap>
          {isInFavorites ? (
            <BtnRemove type="button" onClick={() => handleRemoveFavorites(_id)}>
              Remove{" "}
              <EmptyHeartIcon>
                <use href={`${icon}#favorite-heart`} />
              </EmptyHeartIcon>
            </BtnRemove>
          ) : (
            <BtnAdd type="button" onClick={() => handleAddFavorites(_id)}>
              Add{" "}
              <EmptyHeartIcon>
                <use href={`${icon}#favorite-heart`} />
              </EmptyHeartIcon>
            </BtnAdd>
          )}

          <BtnContact type="button">Contact</BtnContact>
        </ModalBtnWrap>
      </ModalContainer>
    </ModalPortal>
  );
};

export default ModalNotice;
