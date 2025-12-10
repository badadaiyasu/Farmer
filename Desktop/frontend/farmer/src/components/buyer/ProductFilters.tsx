// src/components/buyer/ProductFilters.tsx
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

// Define proper types for filters
interface Filters {
  language?: 'am' | 'om' | 'en' | undefined;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
}

interface ProductFiltersProps {
  filters: Filters;
  onChange: (filters: Partial<Filters>) => void;
}

export const ProductFilters = ({ filters, onChange }: ProductFiltersProps) => {
  const { t } = useTranslation();

  const handleFilterChange = (key: keyof Filters, value: string | number | undefined) => {
    onChange({ [key]: value });
  };

  const handleClearFilters = () => {
    onChange({
      language: undefined,
      category: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      location: undefined,
    });
  };

  return (
    <div className="space-y-6">
      {/* Language Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t('filters.language', 'Language')}
        </label>
        <Select
          value={filters.language || ''}
          onValueChange={(value) => handleFilterChange('language', value || undefined)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t('filters.allLanguages', 'All Languages')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">{t('filters.allLanguages', 'All Languages')}</SelectItem>
            <SelectItem value="am">አማርኛ</SelectItem>
            <SelectItem value="om">Afaan Oromoo</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t('filters.category', 'Category')}
        </label>
        <input
          type="text"
          placeholder={t('filters.filterByCategory', 'Filter by category...')}
          value={filters.category || ''}
          onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t('filters.location', 'Location')}
        </label>
        <input
          type="text"
          placeholder={t('filters.filterByLocation', 'Filter by location...')}
          value={filters.location || ''}
          onChange={(e) => handleFilterChange('location', e.target.value || undefined)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          {t('filters.priceRange', 'Price Range')}
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">
              {t('filters.minPrice', 'Min Price')}
            </label>
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) =>
                handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)
              }
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500">
              {t('filters.maxPrice', 'Max Price')}
            </label>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) =>
                handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)
              }
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={handleClearFilters}
        className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md transition-colors duration-200"
      >
        {t('filters.clearFilters', 'Clear Filters')}
      </button>
    </div>
  );
};

export default ProductFilters;