// src/types/product.ts (updated)
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: string;
  image: string | null;
  category: string;
  language: 'am' | 'or' | 'en';
  created_at: string;
  farmer: {
    id: number;
    name: string;
    phone: string;
    location: string;
    avatar?: string;
  };
  views: number;
}

// Helper type for components that need non-null image
export type ProductWithSafeImage = Omit<Product, 'image'> & {
  image: string;
};

// Helper function
export const withSafeImage = (product: Product, defaultImage = '/images/default-product.jpg'): ProductWithSafeImage => ({
  ...product,
  image: product.image || defaultImage,
});