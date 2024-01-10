import React from "react";
import { Typography, Button, Divider } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import { PaymentFormPropType } from "./type";

const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY || "";

const stripePromise = loadStripe(stripePublicKey);

const PaymentForm = ({
  checkoutProducts,
  shippingData,
  prevStep,
  handleCaptureCheckout,
  nextStep,
}: PaymentFormPropType) => {
  console.log(shippingData, "shipping data");

  if (shippingData === undefined) {
    return <h1>Loading...</h1>
  }

  const handleSubmit = async (e: any, elements: any, stripe: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // const cardElement = elements.getElement(CardElement);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // if (error) console.log(error);
    // else {
    const orderData = {
      line_items: checkoutProducts.line_items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.address,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubDivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.shippingCountry,
      },
      fulfillment: {
        shipping_method: shippingData.shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },
      },
    };

    handleCaptureCheckout(checkoutProducts.id, orderData);

    nextStep();
    // }
  };

  return (
    <>
      <Review checkoutProducts={checkoutProducts} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }: any) => (
            <form onSubmit={(e: any) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutProducts.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
