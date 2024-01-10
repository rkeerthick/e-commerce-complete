import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

import { ReviewPropType, LineItemType } from "./type";

const Review = ({ CheckoutProducts }: ReviewPropType) => {
  console.log(CheckoutProducts, "Review");

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {CheckoutProducts.line_items.map((product: LineItemType) => (
          <ListItem style={{ padding: "10px 0" }} key={product.id}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {CheckoutProducts.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
