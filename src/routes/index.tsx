import React from "react";
import { useQuery } from "@tanstack/react-query";
import { commerce } from "../lib/commerce";
import { useDispatch } from "react-redux";

import { Navbar, Products } from "../components";
import { setProducts } from "../store/productStore";
import { setCart } from "../store/cartStore";

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
    queryFn: () => commerce.cart.retreive(),
  });

  // settign cart in store
  dispatch(setCart(cart));

  const handleAddCart = async ({ productId, quantity }: any) => {
    const response = await commerce.cart.add(productId, quantity);
    dispatch(setCart(response.cart));
  };

  if (productsLoading || cartLoading || productsFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Navbar />
      <Products products={products.data} />
    </>
  );
};

export default Routing;
