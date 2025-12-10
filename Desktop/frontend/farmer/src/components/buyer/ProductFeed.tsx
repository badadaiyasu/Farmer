// src/components/buyer/ProductFeed.tsx
import ProductCard from './ProductCard';
import { Skeleton } from '../../components/ui/skeleton';
import type { ProductCard as ProductCardType } from '../../types/product';

interface ProductFeedProps {
  products: ProductCardType[];
  isLoading: boolean;
}

export default function ProductFeed({ products, isLoading }: ProductFeedProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-96 rounded-xl" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500 text-xl">No products found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}