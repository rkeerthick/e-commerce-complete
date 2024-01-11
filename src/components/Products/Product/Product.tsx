import React from "react";

import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";

import { AddShoppingCart } from "@mui/icons-material";

import {
  CardMediaStyle,
  CardStyle,
  CardContentStyled,
  ImageContainer,
} from "./styles";

import { useDispatch } from "react-redux";

import { commerce } from "../../../lib/commerce";
import { setCarts } from "../../../store/productStore";
import { ProductPropType } from "./type";
import { useMutation } from "@tanstack/react-query";
import Modal from "../../Modal/Modal";
import Loading from "../../Loading/Loading";

const Product = ({ product }: ProductPropType) => {
  const dispatch = useDispatch();

  const { mutate: addCartMutation, isPending: addCartLoading } = useMutation({
    mutationFn: (data: { productId: string; quantity: number}) =>
      commerce.cart.add(data.productId, data.quantity),
    onSuccess: (data: void) => {
      dispatch(setCarts(data));
    }
  });

  const handleAddCart = (productId: string, quantity: number) => {
    addCartMutation({productId, quantity});
  }

  if (addCartLoading) {
     return (
       <Modal>
         <Loading/>
       </Modal>
     );
  }
    return (
      <Card className={CardStyle}>
        <ImageContainer>
          <img
            src={product.image.url}
            alt="product"
            className={CardMediaStyle}
          />
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
