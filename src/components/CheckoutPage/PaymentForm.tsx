import React from 'react'
import { Typography, Button, Divider } from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Review from './Review'

const PaymentForm = ({ token, shippingData }: any) => {
  console.log(token, 'token')
  return (
    <>
      <Review token={token} />
    </>
  )
}

export default PaymentForm