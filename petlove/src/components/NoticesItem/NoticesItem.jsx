import React, { useState } from "react";
import {
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
import { createPortal } from "react-dom";

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
  } = noticeInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <LikeBtn>
          <LikeIcon>
            <use href={`${icon}#favorite-heart`} />
          </LikeIcon>
        </LikeBtn>
      </NoticesFooter>
      {/* {isModalOpen && (
        <AttentionModal
          onClose={() => setIsModalOpen(false)}
          open={isModalOpen}
        />
      )} */}
      {isModalOpen &&
        createPortal(
          <AttentionModal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </NoticesContainer>
  );
};

export default NoticesItem;
