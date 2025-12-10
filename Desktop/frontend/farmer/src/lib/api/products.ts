// src/lib/api/products.ts

import { axios } from '../../lib/axios';
import type { Product, ProductLanguage } from '../../types/product';

/* ---------------------------------------------
 * Filters for searching and querying products
 * ------------------------------------------- */
export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  language?: ProductLanguage;  // 'en' | 'am' | 'om'
  location?: string;
}

/* ---------------------------------------------
 * Product API Object
 * ------------------------------------------- */
export const productsApi = {
  getAll: async (filters: ProductFilters = {}): Promise<Product[]> => {
    const params = new URLSearchParams();

    if (filters.search) params.append('search', filters.search);
    if (filters.category) params.append('category', filters.category);
    if (filters.minPrice !== undefined) {
      params.append('min_price', filters.minPrice.toString());
    }
    if (filters.maxPrice !== undefined) {
      params.append('max_price', filters.maxPrice.toString());
    }
    if (filters.language) params.append('language', filters.language);
    if (filters.location) params.append('location', filters.location);

    const response = await axios.get(`/api/products/?${params.toString()}`);

    // Normalize Django response (results or direct array)
    return response.data.results ?? response.data;
  },
};
