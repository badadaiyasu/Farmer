// src/lib/api/products.ts
import { axios } from '../../lib/axios';
import type { Product } from '../../types/product';

export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  language?: 'am' | 'or' | 'en';
  location?: string;
}

// Use `type` import for Product (required when verbatimModuleSyntax is enabled)
export const getProducts = async (filters: ProductFilters = {}): Promise<Product[]> => {
  const response = await axios.get<{ results: Product[] }>('/api/products/', {
    params: filters,
  });
  // Adjust based on your Django API response format
  return response.data.results ?? response.data;
};