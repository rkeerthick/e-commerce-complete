import React from "react";
import { createPortal } from "react-dom";
import { ModalStyled, OverlayStyled } from "./styles";
import { ModalPropType } from "./type";

const Modal = ({ isOpen, children }: ModalPropType) => {
  // return !isOpen
  //   ? null
  // :
  return createPortal(
    <>
      <OverlayStyled />
      <ModalStyled>{children}</ModalStyled>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
