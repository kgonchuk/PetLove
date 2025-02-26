import React from "react";
import { Btn, LogOutContainer } from "./LogOutBtn.styled";

const LogOutBtn = () => {
  return (
    <LogOutContainer>
      <Btn type="button">Log out</Btn>
    </LogOutContainer>
  );
};

export default LogOutBtn;
