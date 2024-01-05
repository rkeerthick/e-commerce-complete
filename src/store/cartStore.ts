import { createSlice } from "@reduxjs/toolkit";

export interface cartType {
    
}

const initialState: any = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state: any, action: any) => {
      state.cart = action.payload.cart;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.actions;
