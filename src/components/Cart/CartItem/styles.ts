import styled from "styled-components";
import { Card, CardActions, CardContent } from "@mui/material";

export const CardStyled = styled(Card)({
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
})

export const ImageWrapper = styled.div({
    display: "flex",
    justifyContent: "center",
    height: "260",
    width: "100%",
    objectFit: "cover"
});

export const Image = styled.img({
    height: "150px",
    width: "auto",
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
