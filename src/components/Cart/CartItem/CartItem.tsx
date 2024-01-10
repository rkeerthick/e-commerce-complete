import React from "react";
import { Typography, Button } from "@mui/material";

import {
  ButtonWrapper,
  CardActionsStyled,
  CardContentStyled,
  CardStyled,
  Image,
  ImageWrapper,
} from "./styles";
import { CartItemPropType } from "./type";

const CartItem = ({
  product,
  handleRemove,
  handleQuantity,
}: CartItemPropType) => {
  return (
    <CardStyled>
      <ImageWrapper>
        <Image src={product.image.url} alt={product.name} />
      </ImageWrapper>
      <CardContentStyled>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h6">
          {product.line_total.formatted_with_symbol}
        </Typography>
      </CardContentStyled>
      <CardActionsStyled>
        <ButtonWrapper>
          <Button
            type="button"
            size="small"
            onClick={() => handleQuantity(product.id, product.quantity - 1)}
          >
            -
          </Button>
          <Typography>{product.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleQuantity(product.id, product.quantity + 1)}
          >
            +
          </Button>
        </ButtonWrapper>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          onClick={() => handleRemove(product.id)}
        >
          Remove
        </Button>
      </CardActionsStyled>
    </CardStyled>
  );
};

export default CartItem;
