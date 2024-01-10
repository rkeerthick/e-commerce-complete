import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import {
  DividerStyled,
  Layout,
  PaperStyled,
  Spinner,
  StepperStyled,
  Toolbar,
} from "./styles";
import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { setEmptyCart } from "../../../store/productStore";
import { OrderType } from "../../../types/Order.type";
import { useNavigate } from "react-router-dom";
import { ShippingDataType } from "./type";
import { StateType } from "../../../types/CommonTypes";
import { CartType } from "../../Cart/type";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [shippingData, setShippingData] = useState<ShippingDataType>();
  const [order, setOrder] = useState<OrderType>();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cart: CartType | undefined = useSelector((state: StateType) => state.Store.cart);


  const {
    data: token,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["Token"],
    queryFn: async () =>
      await commerce.checkout.generateToken(cart?.id, {
        type: "cart",
      }),
  });

  const nextStep = () => setActiveStep((oldStep: number) => oldStep + 1);
  const prevStep = () => setActiveStep((oldStep: number) => oldStep - 1);

  const next = (data: any) => {
    setShippingData(data);
    nextStep();
  };

  const { mutate: refreshCartMutation } = useMutation({
    mutationFn: () => commerce.cart.refresh(),
  });

  const {
    mutate: captureCheckoutMutation,
    error: checkoutError,
    isPending: captureCheckoutPending,
  } = useMutation({
    mutationFn: (data: { tokenId: any; newOrder: any }) =>
      commerce.checkout.capture(data.tokenId, data.newOrder),
    onSuccess: (data: any) => {
      setOrder(data);
      refreshCartMutation();
      dispatch(setEmptyCart());
    },
  });

  const handleCaptureCheckout = (tokenId: any, newOrder: any) => {
    captureCheckoutMutation({ tokenId, newOrder });
  };
  if (isFetching || isLoading) {
    return <h1 style={{ paddingTop: "80px" }}>Loading....</h1>;
  }

  if (captureCheckoutPending) {
    return <h1 style={{ paddingTop: "80px" }}>Checkout Processing....</h1>;
  }
  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm token={token} next={next} />
    ) : (
      <PaymentForm
        checkoutProducts={token}
        shippingData={shippingData}
        prevStep={prevStep}
        error={checkoutError}
        handleCaptureCheckout={handleCaptureCheckout}
        nextStep={nextStep}
      />
    );
  };

  if (checkoutError) {
    <>
      <Typography variant="h5">{checkoutError.message}</Typography>
      <br />
      <Button variant="outlined" type="button" onClick={() => navigate("/")}>
        Back to home
      </Button>
    </>;
  }

  const Confirmation = () =>
    order?.customer ? (
      <>
        <div>
          <Typography variant="h6">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </Typography>
          <DividerStyled />
          <Typography variant="subtitle2">
            Order ref : {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button variant="outlined" type="button" onClick={() => navigate("/")}>
          Back to home
        </Button>
      </>
    ) : (
      <>
        <Spinner>
          <CircularProgress />
        </Spinner>
      </>
    );

  return (
    <>
      <Toolbar theme={theme} />
      <Layout theme={theme}>
        <PaperStyled theme={theme}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <StepperStyled theme={theme} activeStep={activeStep}>
            {steps.map((step: string) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </StepperStyled>
          {activeStep === 2 ? <Confirmation /> : <Form />}
        </PaperStyled>
      </Layout>
    </>
  );
};

export default Checkout;
