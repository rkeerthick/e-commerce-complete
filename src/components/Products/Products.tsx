import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

import { MainStyle, ToolbarStyle } from "./styles";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { ProductType } from "./Product/type";
import { StateType } from "../../types/CommonTypes";
import { useLocation } from "react-router-dom";
import Flash from "../Flash/Flash";

const Products = ({ cartLoading, fetchCart }: any) => {
  const theme = useTheme();
  const location = useLocation();
  const products: ProductType[] | undefined = useSelector(
    (state: StateType) => state.Store.products?.data
  );

  useEffect(() => {
    if (location?.pathname === "/") {
      fetchCart();
    }
  }, [location?.pathname]);

  if (cartLoading) {
    return <Flash />;
  }

  return (
    <MainStyle theme={theme}>
      <ToolbarStyle theme={theme} />
      <Grid
        container
        justifyContent="flex-start"
        spacing={4}
        sx={{ width: "100%" }}
      >
        {products?.map((product: ProductType) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </MainStyle>
  );
};

export default Products;
