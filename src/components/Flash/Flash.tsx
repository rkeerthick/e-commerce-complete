import React from "react";
import Logo from "../../assets/commerce.png";
import { FlashImage, FlashStyled, LinearProgressStyled } from "./Styled";

const Flash = () => {
  return (
    <FlashStyled>
      <FlashImage src={Logo} alt="flash" />
      <LinearProgressStyled />
    </FlashStyled>
  );
};

export default Flash;
