// src/hooks/use-farmer-products.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  language: 'en' | 'am' | 'om';
  image: string | null;
  farmer: number;
}

const fetchMyProducts = async (): Promise<Product[]> => {
  const { data } = await api.get('/products/my-products/');
  return data;
};

const createProduct = async (formData: FormData) => {
  const { data } = await api.post('/products/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const useFarmerProducts = () => {
  const queryClient = useQueryClient();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['my-products'],
    queryFn: fetchMyProducts,
  });

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-products'] });
    },
  });

  return {
    products,
    isLoading,
    createProduct: createMutation.mutateAsync,
    isCreating: createMutation.isPending,
  };
};