import React from "react";
import {
  MyNoticesBtn,
  MyNoticesContainer,
  NoticesBtnWrap,
} from "./MyNotices.styled";

const MyNotices = () => {
  return (
    <MyNoticesContainer>
      <NoticesBtnWrap>
        <MyNoticesBtn>My favorite pets</MyNoticesBtn>
        <MyNoticesBtn>Viewed</MyNoticesBtn>
      </NoticesBtnWrap>
    </MyNoticesContainer>
  );
};

export default MyNotices;
