// src/hooks/use-products-query.ts
import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../lib/api/products';
import type { ProductFilters } from '../lib/api/products'; // Updated path

export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => productsApi.getAll(filters),
    staleTime: 1000 * 60, // 1 minute
    placeholderData: (previousData) => previousData, // React Query v5 equivalent of keepPreviousData
  });
};