import React, { useState } from "react";
import { Step, StepLabel, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { Layout, PaperStyled, StepperStyled, Toolbar } from "./styles";
import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [shippingData, setShippingData] = useState({});

  const dummy = useSelector((state: any) => state);
  const cart = useSelector((state: any) => state.Store.cart);
  console.log(dummy, "dummy");

  const {
    data: token,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["Token"],
    queryFn: async () =>
      await commerce.checkout.generateToken(cart.id, {
        type: "cart",
      }),
  });

  const nextStep = () => setActiveStep((oldStep: number) => oldStep + 1);
  const prevStep = () => setActiveStep((oldStep: number) => oldStep - 1);

  const next = (data: any) => {
    setShippingData(data);
    nextStep();
  };

  if (isFetching || isLoading) {
    return <>Loading....</>;
  }

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm token={token} next={next} />
    ) : (
      <PaymentForm token={token} />
    );
  };

  const Confirmation = () => <div>Confirmation</div>;

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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </PaperStyled>
      </Layout>
    </>
  );
};

export default Checkout;
