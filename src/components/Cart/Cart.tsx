import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";

import { item, emptyButton, checkoutButton, cartDetails } from "./styles";
import styled, { DefaultTheme } from 'styled-components'

interface ThemeProps {
  theme: DefaultTheme;
}



const Cart = () => {
    const theme = useTheme();
    
    const Toolbar = styled.div<ThemeProps>(({
        ...theme.mixins.toolbar,
    }));
  const cart = useSelector((state: any) => state.Store.cart);

  const isEmpty = !cart.line_items.length;

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no item in your cart, start adding some!
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item: any) => (
            <Grid xs={12} sm={4}>
              <div>{item.name}</div>
            </Grid>
          ))}
        </Grid>
        <div className={cartDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
            <div>
              <Button
                className={emptyButton}
                color="secondary"
                size="large"
                type="button"
                variant="contained"
              >
                Empty cart
              </Button>
              <Button
                className={checkoutButton}
                color="primary"
                size="large"
                type="button"
                variant="contained"
              >
                Checkout
              </Button>
            </div>
          </Typography>
        </div>
      </>
    );
  };

  return (
    <Container>
      <Toolbar />
      <Typography className="title" variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
