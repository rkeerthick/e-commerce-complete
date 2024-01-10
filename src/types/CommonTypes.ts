import { DefaultTheme } from "styled-components";
import { CartType } from "../components/Cart/type";
import { ProductType } from "../components/Products/Product/type";

export interface ProductStoreProps {
  products: ProductType[];
  cart: CartType | {};
}

export interface StateType {
  Store: {
    products?: { data: ProductType[], meta: any} | undefined;
    cart?: CartType | undefined;
  };
}

export interface ThemeProps {
  theme: DefaultTheme;
}
