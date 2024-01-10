import { css } from "@emotion/css";
import { AppBar, Typography } from "@mui/material";
import styled from "styled-components";


export const Grow = styled("div")(() => ({ flexGrow: "1" }));

export const Button = styled("div")(() => ({}));

export const imageStyle = css`
  margin-right: 10px;
`;

export const AppbarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${0}px)`,
    marginLeft: 0,
  },
}));

export const LogoWrapper = styled(Typography)({
  width: "max-content",
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
  cursor: "pointer",
});