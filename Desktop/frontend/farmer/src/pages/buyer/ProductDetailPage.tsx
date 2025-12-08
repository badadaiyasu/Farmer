// src/pages/buyer/ProductDetailPage.tsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductDetailCard from '../../components/buyer/ProductDetailCard';
import { Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define the function here instead of importing it
const fetchProductById = async (id: string) => {
  try {
    const response = await fetch(`/api/products/${id}`); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Or use mock data
// const fetchProductById = async (id: string) => {
//   await new Promise(resolve => setTimeout(resolve, 500));
//   
//   const mockProducts = {
//     "1": { id: "1", name: "Organic Tomatoes", price: 3.99, /* ... */ },
//     "2": { id: "2", name: "Fresh Strawberries", price: 6.99, /* ... */ },
//   };
//   
//   const product = mockProducts[id as keyof typeof mockProducts];
//   
//   if (!product) {
//     throw new Error('Product not found');
//   }
//   
//   return product;
// };

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id, // Only run if id exists
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
        <Button onClick={() => navigate(-1)} className="mt-4">
          <ArrowLeft className="mr-2" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-green-700 hover:text-green-900"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Products
        </Button>

        <ProductDetailCard product={product} />
      </div>
    </div>
  );
}