import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  StyledToolbar,
  Title,
  EmptyButton,
  CheckoutButton,
  Link,
  CardDetails,
  ButtonWrapper,
} from "./styles"; // Replace with the actual file path
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const theme = useTheme();
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
          {cart.line_items.map((product: any) => (
            <Grid key={product.id} item xs={12} sm={4}>
              {/* <div>{item.name}</div> */}
              <CartItem product={product} />
            </Grid>
          ))}
        </Grid>
        <CardDetails theme={theme}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <ButtonWrapper>
            <EmptyButton
              theme={theme}
              color="secondary"
              size="large"
              type="button"
              variant="contained"
            >
              Empty cart
            </EmptyButton>
            <CheckoutButton
              theme={theme}
              color="primary"
              size="large"
              type="button"
              variant="contained"
            >
              Checkout
            </CheckoutButton>
          </ButtonWrapper>
        </CardDetails>
      </>
    );
  };

  return (
    <Container>
      <StyledToolbar theme={theme} />
      <Title theme={theme}>
        <Typography variant="h3" gutterBottom>Your Shopping Cart</Typography>
      </Title>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
