
export enum ProductCategory {
  ALL = "All",
  TSHIRTS = "T-Shirts",
  HOODIES = "Hoodies",
  JACKETS = "Jackets",
  PANTS = "Pants",
  ACCESSORIES = "Accessories",
}

export interface EcommerceLink {
  platform: string; // e.g., "Shopee", "Tokopedia"
  url: string;
  // icon?: string; // Optional: for platform specific icons in the future
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  imageUrl: string;
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  ecommerceLinks?: EcommerceLink[]; // New field for e-commerce links
}
