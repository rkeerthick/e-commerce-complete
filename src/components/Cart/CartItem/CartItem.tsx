import React from "react";
import { Card, Typography, Button } from "@mui/material";

import {
  ButtonWrapper,
  CardActionsStyled,
  CardContentStyled,
  CardStyled,
  Image,
  ImageWrapper,
} from "./styles";
import { useDispatch } from "react-redux";
import { commerce } from "../../../lib/commerce";
import { setCarts } from "../../../store/productStore";
import { useMutation } from "@tanstack/react-query";

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch();

  const handleQuantityMutation = useMutation({
    mutationFn: async (data: { productId: string; quantity: number }) =>
      await commerce.cart.update(data.productId, {
        quantity: data.quantity,
      }),

    onSuccess: (data: any) => {
      dispatch(setCarts(data));
    },
  });

  const handleRemoveMutation = useMutation({
    mutationFn: async (productId: string) =>
      await commerce.cart.remove(productId),
    onSuccess: (data: any) => {
      dispatch(setCarts(data));
    },
  });

  const handleQuantity = (productId: string, quantity: number) => {
    handleQuantityMutation.mutate({ productId, quantity });
  };

  const handleRemove = (productId: string) => {
    handleRemoveMutation.mutate(productId);
  };

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
