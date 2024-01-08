import { combineReducers, createStore } from "@reduxjs/toolkit";
import productStore from "./productStore";
import cartStore from "./cartStore";

const reducers = combineReducers({
    productStore: productStore,
    cartStore: cartStore,
});

export const store = createStore(reducers);
