// src/types/products.ts

/* ---------------------------------------------
 * Language type
 * ------------------------------------------- */
export type ProductLanguage = 'en' | 'am' | 'om';

/* ---------------------------------------------
 * Farmer type
 * ------------------------------------------- */
export interface Farmer {
  id: string | number;
  name: string;
  phone: string;
  location: string;
  avatar?: string;
}

/* ---------------------------------------------
 * Main Product interface (for frontend usage)
 * ------------------------------------------- */
export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;

  // Measurement
  unit: string;        // kg, piece, liter, etc.
  quantity: number;

  // Images
  images: string[];    // supports multiple images

  category: string;
  language: ProductLanguage;

  farmer: Farmer;

  createdAt: string;
  views: number;
}

/* ---------------------------------------------
 * API Product interface (for API responses)
 * ------------------------------------------- */
export interface ApiProduct {
  id: number;
  name: string;
  description: string | null;
  price: string | number;
  quantity: string | number | null;
  images?: { image: string }[];
  category: string;
  language: ProductLanguage;
  created_at: string;
  farmer: {
    id: number;
    name: string;
    phone: string;
    location: string;
  };
  views?: number;
}

/* ---------------------------------------------
 * ProductCard type (for ProductFeed component)
 * ------------------------------------------- */
export interface ProductCard {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  language: ProductLanguage;
  created_at: string;
  farmer: Farmer;
  views: number;
}

/* ---------------------------------------------
 * Helper type for components that require
 * at least one guaranteed image
 * ------------------------------------------- */
export type ProductWithSafeImage = Product & {
  images: [string, ...string[]]; // at least one image required
};

/* ---------------------------------------------
 * Product Filters Interface
 * Used for search, filtering, and query params
 * ------------------------------------------- */
export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  language?: ProductLanguage;  // supports 'en' | 'am' | 'om'
  location?: string;           // optional filtering by farmer location
}

/* ---------------------------------------------
 * Helper function to ensure a safe image exists
 * ------------------------------------------- */
export const withSafeImage = (
  product: Product,
  defaultImage = '/images/default-product.jpg'
): ProductWithSafeImage => {
  return {
    ...product,
    images:
      product.images && product.images.length > 0
        ? (product.images as [string, ...string[]])
        : [defaultImage],
  };
};

/* ---------------------------------------------
 * Helper function to convert ApiProduct to Product
 * ------------------------------------------- */
export const apiProductToProduct = (apiProduct: ApiProduct): Product => {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description || '',
    price: typeof apiProduct.price === 'string' ? parseFloat(apiProduct.price) : apiProduct.price,
    unit: 'kg', // Default or extract from API if available
    quantity: typeof apiProduct.quantity === 'string' ? parseFloat(apiProduct.quantity) : (apiProduct.quantity || 0),
    images: apiProduct.images?.map(img => img.image) || [],
    category: apiProduct.category,
    language: apiProduct.language,
    farmer: {
      id: apiProduct.farmer.id,
      name: apiProduct.farmer.name,
      phone: apiProduct.farmer.phone,
      location: apiProduct.farmer.location,
    },
    createdAt: apiProduct.created_at,
    views: apiProduct.views || 0,
  };
};

/* ---------------------------------------------
 * Helper function to convert ApiProduct to ProductCard
 * ------------------------------------------- */
export const apiProductToProductCard = (apiProduct: ApiProduct): ProductCard => {
  return {
    id: apiProduct.id,
    name: apiProduct.name,
    description: apiProduct.description || '',
    price: typeof apiProduct.price === 'string' ? parseFloat(apiProduct.price) : apiProduct.price,
    quantity: typeof apiProduct.quantity === 'string' ? parseFloat(apiProduct.quantity) : (apiProduct.quantity || 0),
    image: apiProduct.images?.[0]?.image || '/images/default-product.jpg',
    category: apiProduct.category,
    language: apiProduct.language,
    created_at: apiProduct.created_at,
    farmer: {
      id: apiProduct.farmer.id,
      name: apiProduct.farmer.name,
      phone: apiProduct.farmer.phone,
      location: apiProduct.farmer.location,
    },
    views: apiProduct.views || 0,
  };
};