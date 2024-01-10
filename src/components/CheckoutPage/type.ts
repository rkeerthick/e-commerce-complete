import { Stripe, StripeElements } from "@stripe/stripe-js/types/stripe-js";
import { CheckoutProductsType, ShippingDataType } from "./Checkout/type";

export interface TextFeildPropType {
  name: string;
  label: string;
  required: boolean;
}

export interface ReviewPropType {
  checkoutProducts: CheckoutProductsType;
}

export interface AddressFormPropType {
  checkoutProducts: CheckoutProductsType;
  next: (data: any) => void;
}

export interface PaymentFormPropType {
  checkoutProducts: CheckoutProductsType;
  shippingData: ShippingDataType | undefined;
  handleCaptureCheckout: (tokenId: any, newOrder: any) => void;
  prevStep: () => void;
  nextStep: () => void;
  error?: Error | null;
}

export type CountryCodeType = [string, unknown];

export type OptionType = {
  id: string;
  label: string;
};

export type ElementConsumerType = {
  elements: StripeElements | null;
  stripe: Stripe | null;
}

export interface ShippingOption {
  id: string;
  description: string;
  price: Price;
  countries: string[];
}

export interface Price {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface OrderType {
  line_items: LineItem[];
  customer: Customer;
  shipping: Shipping;
  fulfillment: Fulfillment;
  payment: Payment;
}

export interface Customer {
  firstname: string;
  lastname: string;
  email: string;
}

export interface Fulfillment {
  shipping_method: string;
}

export interface LineItem {
  id: string;
  product_id: string;
  name: string;
  product_name: string;
  sku: null;
  permalink: string;
  quantity: number;
  price: LineTotal;
  line_total: LineTotal;
  is_valid: boolean;
  product_meta: any[];
  selected_options: any[];
  variant: null;
  image: Image;
  tax: Tax;
}

export interface Image {
  id: string;
  url: string;
  description: null;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: ImageDimensions;
  meta: any[];
  created_at: number;
  updated_at: number;
}

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface LineTotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Tax {
  is_taxable: boolean;
  taxable_amount: null;
  amount: null;
  breakdown: null;
}

export interface Payment {
  gateway: string;
  card: Card;
}

export interface Card {
  number: string;
  expiry_month: string;
  expiry_year: string;
  cvc: string;
  postal_zip_code: string;
}

export interface Shipping {
  name: string;
  street: string;
  town_city: string;
  county_state: string;
  postal_zip_code: string;
  country: string;
}
