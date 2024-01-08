import React from "react";
import { useQuery } from "@tanstack/react-query";
import { commerce } from "../lib/commerce";
import { useDispatch } from "react-redux";

import { Navbar, Products, Cart } from "../components";
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

  // setting products in store
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
    <>
      <Navbar />
      {/* <Products /> */}
      <Cart />
    </>
  );
};

export default Routing;
