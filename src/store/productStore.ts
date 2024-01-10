import { createSlice } from "@reduxjs/toolkit";
import { ProductStoreProps } from "../types/CommonTypes";

const initialState: ProductStoreProps = {
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
    setEmptyCart: (state: any) => {
      state.cart = {};
    },
    setCarts: (state: any, action: any) => {
      return { ...state, cart: action.payload };
    },
  },
});

export const { setProducts, setCarts, setEmptyCart } = productSlice.actions;

export default productSlice.reducer;
