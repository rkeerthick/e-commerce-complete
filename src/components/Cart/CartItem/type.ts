export interface CartItemPropType {
  product: CartItemType;
  handleRemove: (productId: string) => void;
  handleQuantity: (productId: string, quantity: number) => void;
}


export interface CartItemType {
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
  tax: null;
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
