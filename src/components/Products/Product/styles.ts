import { css } from "@emotion/css";
import { styled } from "styled-components";

export const CardStyle = css`
  max-width: 100%;
`;

export const ImageContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

export const CardMediaStyle = css`
  align-item: center;
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const CardActionStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const CardContentStyled = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
