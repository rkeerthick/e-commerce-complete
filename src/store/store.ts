import { combineReducers, createStore } from "@reduxjs/toolkit";
import productStore from "./productStore";
import cartStore from "./cartStore";

const reducers = combineReducers({
    product: productStore,
    cart: cartStore,
});

export const store = createStore(reducers);
