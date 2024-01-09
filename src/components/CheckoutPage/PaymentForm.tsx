import React from 'react'
import { Typography, Button, Divider } from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const PaymentForm = ({token}: any) => {
  return (
    <>
      <Review />
    </>
  )
}

export default PaymentForm