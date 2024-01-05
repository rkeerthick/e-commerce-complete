import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";

import { AddShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import {
  CardMediaStyle,
  CardStyle,
  CardContentStyled,
  ImageContainer,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";

import { commerce } from "../../../lib/commerce";
import { setCarts } from "../../../store/productStore";

const Product = ({ product }: any) => {
  const dispatch = useDispatch();

  const handleAddCart = async (productId: any, quantity: any) => {
    const response = await commerce.cart.add(productId, quantity);
    dispatch(setCarts(response));
  };

  // const cart = useSelector((state: any) => state.Store.cart.data)

  return (
    <Card className={CardStyle}>
      <ImageContainer>
        <img src={product.image.url} alt="product" className={CardMediaStyle} />
      </ImageContainer>
      <CardContent>
        <CardContentStyled>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </CardContentStyled>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton
          aria-label="Add to card"
          onClick={() => handleAddCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
