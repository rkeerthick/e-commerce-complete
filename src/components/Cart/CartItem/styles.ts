import styled from "styled-components";
import { Card, CardActions, CardContent } from "@mui/material";

export const CardStyled = styled(Card)({
    height: "max-content",
    display: "flex",
    flexDirection: "column",
})

export const ImageWrapper = styled.div({
    display: "flex",
    justifyContent: "center",
    height: "260px",
    width: "100%",
    objectFit: "cover"
});

export const Image = styled.img({
    width: "250px",
    height: "auto",
    objectFit: "contain",
})

export const CardContentStyled = styled(CardContent)({
  display: "flex",
  justifyContent: "space-between",
});

export const CardActionsStyled = styled(CardActions)({
  justifyContent: "space-between",
});

export const ButtonWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});
