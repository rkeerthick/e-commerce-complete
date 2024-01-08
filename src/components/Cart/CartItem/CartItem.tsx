import React from "react";
import {
  Card,
  Typography,
  Button,
} from "@mui/material";

import {ButtonWrapper, CardActionsStyled, CardContentStyled, CardStyled, Image, ImageWrapper} from "./styles";

const CartItem = ({ product }: any) => {
  return (
    <CardStyled>
      <ImageWrapper>
        <Image src={product.image.url} alt={product.name} />
      </ImageWrapper>
      <CardContentStyled>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h5">
          {product.line_total.formatted_with_symbol}
        </Typography>
      </CardContentStyled>
      <CardActionsStyled>
        <ButtonWrapper>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{product.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </ButtonWrapper>
        <Button type="button" variant="contained" color="secondary">
          Remove
        </Button>
      </CardActionsStyled>
    </CardStyled>
  );
};

export default CartItem;
