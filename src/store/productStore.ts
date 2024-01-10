import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/Product.type";
import { CartType } from "../types/Cart.type";

interface productStoreProps {
  products: ProductType[];
  cart: CartType | {};
}

const initialState: productStoreProps = {
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
