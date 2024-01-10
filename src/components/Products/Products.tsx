import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

import { MainStyle, ToolbarStyle } from "./styles";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { ProductType } from "./Product/type";

const Products = () => {
  const theme = useTheme();
  const products: ProductType[] = useSelector(
    (state: any) => state.Store.products.data
  );

  

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
