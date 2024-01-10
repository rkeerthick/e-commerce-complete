import { DefaultTheme } from "styled-components";
import { CartType } from "../components/Cart/type";
import { ProductType } from "../components/Products/Product/type";

export interface ProductStoreProps {
  products: ProductType[];
  cart: CartType | {};
}

export interface StateType {
  Store: {
    products?: ProductType[];
    cart?: CartType;
  };
}

export interface ThemeProps {
  theme: DefaultTheme;
}
