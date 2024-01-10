import { LinearProgress } from "@mui/material";
import styled from "styled-components";

export const FlashStyled = styled.div({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  flexDirection: "column",
});

export const FlashImage = styled.img({
  width: "100px",
  height: "auto",
});

export const LinearProgressStyled = styled(LinearProgress)({
  width: "200px",
});
