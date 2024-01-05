import { createSlice } from "@reduxjs/toolkit";

const initialState: any  = {
  products: [],
  cart: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state: any, action: any) => {
      state.products = action.payload;
    },
    setCarts: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setProducts, setCarts } = productSlice.actions;

export default productSlice.reducer;
