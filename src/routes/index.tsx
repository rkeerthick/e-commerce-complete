import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { commerce } from "../lib/commerce";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Navbar, Products, Cart, Checkout } from "../components";
import { setProducts, setCarts } from "../store/productStore";
import Flash from "../components/Flash/Flash";

const Routing = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  const {
    data: products,
    isLoading: productsLoading,
    isFetching: productsFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => commerce.products.list(),
  });

  dispatch(setProducts(products));

  const {
    data: cart,
    isLoading: cartLoading,
    refetch: cartRefetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => commerce.cart.retrieve(),
  });

  cart && dispatch(setCarts(cart));

  const fetchCart = () => cartRefetch();

  if (productsLoading || cartLoading || productsFetching) {
    return <Flash />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Products cartLoading={cartLoading} fetchCart={fetchCart} />}
        />
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
