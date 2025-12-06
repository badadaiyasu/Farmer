// src/hooks/use-products-query.ts
import { useQuery } from '@tanstack/react-query';
import { getProducts, type ProductFilters } from '../lib/api/products';

export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};