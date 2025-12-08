// src/types/product.ts

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
 * Main Product interface
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
 * Helper type for components that require
 * at least one guaranteed image
 * ------------------------------------------- */
export type ProductWithSafeImage = Product & {
  images: [string, ...string[]]; // at least one image required
};

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
