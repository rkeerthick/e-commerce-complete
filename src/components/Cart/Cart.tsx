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
} from "./styles";
import CartItem from "./CartItem/CartItem";
import { commerce } from "../../lib/commerce";
import { setCarts } from "../../store/productStore";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { CartType } from "./type";
import { StateType } from "../../types/CommonTypes";
import { CartItemType } from "./CartItem/type";

const Cart = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cart: CartType | undefined = useSelector(
    (state: StateType) => state.Store.cart
  );

  const isEmpty: boolean = !cart || !cart?.line_items.length;

  const { mutate, isPending: EmptyPending } = useMutation({
    mutationFn: async () => await commerce.cart.empty(),
    onSuccess: (data) => {
      dispatch(setCarts(data));
    },
  });

  const handleEmptyCart = () => {
    mutate();
  };

  const { mutate: handleQuantityMutation, isPending: QuantityPending } =
    useMutation({
      mutationFn: async (data: { productId: string; quantity: number }) =>
        await commerce.cart.update(data.productId, {
          quantity: data.quantity,
        }),

      onSuccess: (data) => {
        dispatch(setCarts(data));
      },
    });

  const { mutate: handleRemoveMutation, isPending: RemovePending } =
    useMutation({
      mutationFn: async (productId: string) =>
        await commerce.cart.remove(productId),
      onSuccess: (data) => {
        dispatch(setCarts(data));
      },
    });

  const handleQuantity = (productId: string, quantity: number) => {
    handleQuantityMutation({ productId, quantity });
  };

  const handleRemove = (productId: string) => {
    handleRemoveMutation(productId);
  };

  if (cart === undefined || EmptyPending || QuantityPending || RemovePending) {
    return <Container sx={{ paddingTop: "80px" }}>Loading...</Container>;
  }

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
          {cart.line_items.map((product: CartItemType) => (
            <>
              <Grid key={product.id} item xs={12} sm={4}>
                <CartItem
                  product={product}
                  handleRemove={handleRemove}
                  handleQuantity={handleQuantity}
                />
              </Grid>
            </>
          ))}
        </Grid>
        <CardDetails theme={theme}>
          <Typography variant="h5">
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
              onClick={() => navigate("/checkout")}
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
        <Typography variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>
      </Title>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
