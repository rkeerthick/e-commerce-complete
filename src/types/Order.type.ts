export interface OrderType {
  version: string;
  sandbox: boolean;
  id: string;
  checkout_token_id: string;
  cart_id: string;
  customer_reference: string;
  created: number;
  status: string;
  status_payment: string;
  status_fulfillment: string;
  currency: Currency;
  order_value: OrderValue;
  conditionals: { [key: string]: boolean | null };
  meta: null;
  redirect: boolean;
  collected: Collected;
  has: Welcome9Has;
  is: Is;
  order: Order;
  shipping: Welcome9Shipping;
  billing: any[];
  transactions: Transaction[];
  fulfillment: Fulfillment;
  customer: Customer;
  extra_fields: any[];
  client_details: ClientDetails;
  tax: Welcome9Tax;
  adjustments: any[];
  merchant: Merchant;
}

export interface ClientDetails {
  ip_address: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  postal_zip_code: string;
  _copyright: string;
}

export interface Collected {
  fullname: boolean;
  shipping_address: boolean;
  billing_address: boolean;
  extra_fields: boolean;
  tax: boolean;
  eu_vat_moss_evidence: boolean;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface Customer {
  id: string;
  external_id: null;
  firstname: null;
  lastname: null;
  email: string;
  phone: null;
  meta: any[];
  created: number;
  updated: number;
}

export interface Fulfillment {
  physical: Physical;
  digital: Digital;
}

export interface Digital {
  downloads: any[];
}

export interface Physical {
  items: Item[];
  shipments: any[];
}

export interface Item {
  id: string;
  shipping_method_id: string;
  line_item_id: string;
  product_id: string;
  shipping_description: string;
  provider: string;
  provider_type: string;
  product_name: string;
  status: string;
  quantity: Quantity;
  quantity_fulfilled: number;
  quantity_remaining: number;
  last_updated: number;
  linked_shipments: any[];
  selected_options: any[];
}

export interface Quantity {
  total: number;
  fulfilled: number;
  remaining: number;
}

export interface Welcome9Has {
  physical_fulfillment: boolean;
  digital_fulfillment: boolean;
  extend_fulfillment: boolean;
  webhook_fulfillment: boolean;
  extend_apps: boolean;
  pay_what_you_want: boolean;
  discounts: boolean;
  subscription_items: boolean;
}

export interface Is {
  free: boolean;
  fulfilled: boolean;
}

export interface Merchant {
  id: number;
  name: string;
  description: string;
  status: string;
  country: string;
  currency: Currency;
  has: MerchantHas;
  support_email: string;
  logo_shape: null;
  intercom: boolean;
  analytics: Analytics;
  images: Images;
}

export interface Analytics {
  google: Google;
}

export interface Google {
  settings: Settings;
}

export interface Settings {
  tracking_id: null;
  linked_domains: any[];
}

export interface MerchantHas {
  logo: boolean;
  cover: boolean;
  analytics: boolean;
  description: boolean;
  enabled_hosted_checkouts: boolean;
  enabled_hosted_storefront: boolean;
}

export interface Images {
  logo: null;
  cover: null;
}

export interface Order {
  subtotal: OrderValue;
  total: OrderValue;
  total_with_tax: OrderValue;
  total_paid: OrderValue;
  adjustments: Adjustments;
  pay_what_you_want: PayWhatYouWant;
  shipping: OrderShipping;
  line_items: LineItem[];
  discount: any[];
  giftcard: any[];
}

export interface Adjustments {
  taxable: OrderValue;
  untaxable: OrderValue;
  total: OrderValue;
}

export interface OrderValue {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface LineItem {
  id: string;
  product_id: string;
  product_name: string;
  product_sku: null;
  quantity: number;
  price: OrderValue;
  line_total: OrderValue;
  line_total_with_tax: OrderValue;
  variant: any[];
  selected_options: any[];
  tax: LineItemTax;
  image: Image;
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
  amount: OrderValue;
  taxable_amount: OrderValue;
  rate: number;
  rate_percentage: string;
  breakdown: any[];
}

export interface PayWhatYouWant {
  enabled: boolean;
  minimum: null;
  customer_set_price: null;
}

export interface OrderShipping {
  id: string;
  description: string;
  provider: string;
  price: OrderValue;
}

export interface Welcome9Shipping {
  id: string;
  name: string;
  street: string;
  street_2: null;
  town_city: string;
  postal_zip_code: string;
  county_state: string;
  country: string;
  delivery_instructions: null;
  meta: null;
}

export interface Welcome9Tax {
  amount: OrderValue;
  included_in_price: boolean;
  provider: string;
  provider_type: string;
  breakdown: any[];
  zone: Zone;
}

export interface Zone {
  country: string;
  region: string;
  postal_zip_code: string;
  ip_address: null;
}

export interface Transaction {
  id: string;
  type: string;
  status: string;
  status_reason: string;
  charge_date: number;
  gateway: string;
  gateway_name: string;
  gateway_transaction_id: string;
  gateway_customer_id: null;
  gateway_reference: string;
  notes: string;
  amount: OrderValue;
  payment_source_type: string;
  payment_source: PaymentSource;
  meta: null;
  created: number;
  updated: number;
  dunning: Dunning;
}

export interface Dunning {
  is_dunning: boolean;
  failed_attempts: number;
  last_failed_attempt: null;
  next_attempt: null;
}

export interface PaymentSource {
  brand: string;
  country: string;
  billing_zip_postal_code: string;
}
