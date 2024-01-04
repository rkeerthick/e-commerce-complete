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
import { styled } from '@mui/material/styles'

import {CardMediaStyle, CardStyle, CardContentStyled} from './styles'

const Product = ({ product }: any) => {
  return (
    <Card className={CardStyle}>
      <CardMedia
        className={CardMediaStyle}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <CardContentStyled>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price}
          </Typography>
        </CardContentStyled>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="Add to card">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
