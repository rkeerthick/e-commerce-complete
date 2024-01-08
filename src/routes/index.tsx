import React from "react";
import { useQuery } from "@tanstack/react-query";
import { commerce } from "../lib/commerce";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, Products, Cart, Checkout } from "../components";
import { setProducts, setCarts } from "../store/productStore";

const Routing = () => {
  const dispatch = useDispatch();

  const {
    data: products,
    isLoading: productsLoading,
    isFetching: productsFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => commerce.products.list(),
  });

  dispatch(setProducts(products));

  const { data: cart, isLoading: cartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => commerce.cart.retrieve(),
  });

  // settign cart in store
  cart && dispatch(setCarts(cart));

  if (productsLoading || cartLoading || productsFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    // <>
    //   <Navbar />
    //   {/* <Products /> */}
    //   <Cart />
    // </>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
