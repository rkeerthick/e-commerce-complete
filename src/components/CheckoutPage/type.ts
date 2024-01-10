export interface TextFeildPropType {
    name: string;
    label: string;
    required: boolean;
}

export interface ReviewPropType {
  CheckoutProducts: CheckoutProductsType;
}

export interface CheckoutProductsType {
  id: string;
  cart_id: string;
  currency: Currency;
  subtotal: Subtotal;
  total: Subtotal;
  total_with_tax: Subtotal;
  giftcard: any[];
  total_due: Subtotal;
  pay_what_you_want: PayWhatYouWant;
  conditionals: Conditionals;
  meta: null;
  created: number;
  updated: number;
  expires: number;
  collects: Collects;
  has: Has;
  is: Is;
  line_items: LineItemType[];
  extra_fields: any[];
  shipping: Shipping;
  shipping_methods: ShippingMethod[];
  discount: any[];
  adjustments: Adjustments;
  tax: Welcome4Tax;
  gateways: Gateway[];
}

export interface Adjustments {
  taxable: Subtotal;
  untaxable: Subtotal;
  total: Subtotal;
  breakdown: any[];
}

export interface Subtotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Collects {
  fullname: boolean;
  shipping_address: boolean;
  billing_address: boolean;
  extra_fields: boolean;
}

export interface Conditionals {
  collects_fullname: boolean;
  collects_shipping_address: boolean;
  collects_billing_address: boolean;
  has_physical_delivery: boolean;
  has_digital_delivery: boolean;
  has_pay_what_you_want: boolean;
  has_available_discounts: boolean;
  collects_extra_fields: boolean;
  is_cart_free: boolean;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface Gateway {
  id: string;
  code: string;
  sandbox: boolean;
  config: any[];
}

export interface Has {
  physical_delivery: boolean;
  digital_delivery: boolean;
  pay_what_you_want: boolean;
  available_discounts: boolean;
}

export interface Is {
  cart_free: boolean;
}

export interface LineItemType {
  id: string;
  product_id: string;
  name: string;
  product_name: string;
  sku: null;
  permalink: string;
  quantity: number;
  price: Subtotal;
  line_total: Subtotal;
  is_valid: boolean;
  product_meta: any[];
  selected_options: any[];
  variant: null;
  image: Image;
  tax: LineItemTax;
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

export interface LineItemTax {
  is_taxable: boolean;
  taxable_amount: null;
  amount: null;
  breakdown: null;
}

export interface PayWhatYouWant {
  enabled: boolean;
  minimum: null;
  customer_set_price: null;
}

export interface Shipping {
  price: Subtotal;
}

export interface ShippingMethod {
  id: string;
  description: string;
  provider: string;
  price: Subtotal;
}

export interface Welcome4Tax {
  amount: Subtotal;
  included_in_price: boolean;
  provider: string;
  breakdown: any[];
  zone: any[];
}
