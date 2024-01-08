import React, { useState } from "react";
import { Step, StepLabel, Typography } from "@mui/material";
import { Layout, PaperStyled, StepperStyled, Toolbar } from "./styles";
import { useTheme } from "@mui/material/styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

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
          {
            activeStep === steps.length ? <Confirmation /> : <Form />
          }
        </PaperStyled>
      </Layout>
    </>
  );
};

export default Checkout;
