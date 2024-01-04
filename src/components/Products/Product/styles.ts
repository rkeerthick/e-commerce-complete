import { css } from "@emotion/css";
import { styled } from "@mui/material/styles";

export const CardStyle = css`
  max-width: 100%;
`;

export const CardMediaStyle = css`
  height: 0;
  padding-top: 56.25%;
  object-fit: cover;
`;

export const CardActionStyle = css`
  display: flex;
  justify-content: space-between;
`;

export const CardContentStyled = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
