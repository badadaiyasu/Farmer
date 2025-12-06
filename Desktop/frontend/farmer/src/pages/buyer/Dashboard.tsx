// src/pages/buyer/Dashboard.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Hooks
import { useProducts } from '../../hooks/use-products-query';

// Components (buyer-specific)
import ProductFeed from '../../components/buyer/ProductFeed';
import SearchBar from '../../components/buyer/SearchBar';
import ProductFilters from '../../components/buyer/ProductFilters';

// Types
// Types
import type { Product as ApiProduct } from '../../types/product';

// Define filter types
type FilterLanguage = 'am' | 'or' | 'en' | undefined;
type FilterValue = FilterLanguage | string | number | undefined;

interface Filters {
  language?: FilterLanguage;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

// Helper function to transform products for ProductFeed
const transformProductsForFeed = (products: ApiProduct[]) => {
  return products.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    image: product.image || '/images/default-product.jpg', // Handle null with default
    category: product.category,
    language: product.language,
    created_at: product.created_at,
    farmer: product.farmer,
    views: product.views,
  }));
};

export default function BuyerDashboard() {
  const { t } = useTranslation();

  const [search, setSearch] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({ language: undefined });

  const { data: products = [], isLoading } = useProducts({
    search,
    ...filters,
  });

  const handleFilterChange = (key: keyof Filters, value: FilterValue) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === 'all' || value === '' ? undefined : value,
    }));
  };

  // Transform products for ProductFeed
  const feedProducts = transformProductsForFeed(products);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Greeting */}
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
        <div className="mb-10 flex justify-center">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Filters + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
              <h2 className="font-semibold text-lg mb-4">{t('filters', 'Filters')}</h2>
              <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
            </div>
          </aside>

          {/* Product Feed */}
          <main className="lg:col-span-3">
            <ProductFeed products={feedProducts} isLoading={isLoading} />
          </main>
        </div>
      </div>
    </div>
  );
}