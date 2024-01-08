import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledToolbar,
  Title,
  EmptyButton,
  CheckoutButton,
  CardDetails,
  ButtonWrapper,
  EmptyCartLink,
} from "./styles"; // Replace with the actual file path
import CartItem from "./CartItem/CartItem";
import { commerce } from "../../lib/commerce";
import { setCarts } from "../../store/productStore";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Cart = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart = useSelector((state: any) => state.Store.cart);

  const isEmpty = !cart.line_items.length;

  const { mutate, isPending } = useMutation({mutationFn: async () => 
    await commerce.cart.empty(),
    onSuccess: (data) => {
      dispatch(setCarts(data));
    },
  });

  const handleEmptyCart = () => {
    mutate();
  };


  const EmptyCart = () => {
    return (
      <EmptyCartLink variant="subtitle1" onClick={() => navigate("/")}>
        You have no item in your cart, start adding some!
      </EmptyCartLink>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((product: any) => (
            <Grid key={product.id} item xs={12} sm={4}>
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
              onClick={handleEmptyCart}
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

  if (isPending) {
    return <Container sx={{paddingTop: "80px"}}>Loading...</Container>
  }

  return (
    <Container>
      <StyledToolbar theme={theme} />
      <Title theme={theme}>
        <Typography variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
      </Title>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
