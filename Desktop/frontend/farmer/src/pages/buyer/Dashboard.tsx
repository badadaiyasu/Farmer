// src/pages/buyer/Dashboard.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Hooks - Using relative path until alias is fixed
import { useProducts } from '../../hooks/use-products-query';

// Components - Using relative paths
import ProductFeed from '../../components/buyer/ProductFeed';
import SearchBar from '../../components/buyer/SearchBar';
import { ProductFilterSidebar } from '../../components/buyer/ProductFilterSidebar';
import { ProductFilterSheet } from '../../components/buyer/ProductFilterSheet';

// Types - Using relative path
import type { ProductFilters, ApiProduct, Product } from '../../types/product';
import { apiProductToProductCard } from '../../types/product';

export default function BuyerDashboard() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<ProductFilters>({});

  const { data, isLoading } = useProducts(filters);

  const handleSearch = (search: string) => {
    setFilters((prev: ProductFilters) => ({
      ...prev,
      search: search.trim() || undefined,
    }));
  };

  const handleFilterChange = (newFilters: Partial<ProductFilters>) => {
    setFilters((prev: ProductFilters) => ({ ...prev, ...newFilters }));
  };

  const handleReset = () => {
    setFilters({});
  };

  const products = data || [];
  const feedProducts: Product[] = products.map((product: unknown) => {
    // Use the helper function from your types file, then normalize quantity to string expected by Product
    const card = apiProductToProductCard(product as ApiProduct);
    return { ...card, quantity: String(card.quantity) } as unknown as Product;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('welcomeBuyer', 'Welcome, Buyer!')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t(
              'buyerSubtitle',
              'Browse fresh farm products directly from local farmers in your language. No middlemen. Fair prices. Real connections.'
            )}
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Mobile Filter Button + Desktop Sidebar */}
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* Mobile Filter Sheet */}
          <div className="block lg:hidden w-full">
            <ProductFilterSheet
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleReset}
            />
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <ProductFilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleReset}
            />
          </aside>

          {/* Product Grid */}
          <main className="flex-1 w-full">
            <ProductFeed products={feedProducts} isLoading={isLoading} />
          </main>
        </div>
      </div>
    </div>
  );
}