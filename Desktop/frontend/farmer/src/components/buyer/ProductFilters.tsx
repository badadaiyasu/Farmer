/* eslint-disable react-hooks/static-components */
// src/components/buyer/ProductFilters.tsx
import { useTranslation } from 'react-i18next';

// Define proper types for filters
interface Filters {
  language?: 'am' | 'or' | 'en' | undefined;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface ProductFiltersProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | number | undefined) => void;
}

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const { t } = useTranslation();

  // Create a simple select component since UI components are missing
  const SimpleSelect = ({
    value,
    onChange,
    options,
    label
  }: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    label: string;
  }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="space-y-6">
      // eslint-disable-next-line react-hooks/static-components
      <SimpleSelect
        value={filters.language || 'all'}
        onChange={(value) => onFilterChange('language', value === 'all' ? undefined : value)}
        options={[
          { value: 'all', label: t('allLanguages', 'All Languages') },
          { value: 'am', label: 'አማርኛ' },
          { value: 'or', label: 'Afaan Oromoo' },
          { value: 'en', label: 'English' },
        ]}
        label={t('language', 'Language')}
      />

      {/* Add more filters here */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t('category', 'Category')}
          </label>
          <input
            type="text"
            placeholder={t('filterByCategory', 'Filter by category...')}
            value={filters.category || ''}
            onChange={(e) => onFilterChange('category', e.target.value || undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('minPrice', 'Min Price')}
            </label>
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => onFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('maxPrice', 'Max Price')}
            </label>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => onFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Clear filters button */}
        <button
          onClick={() => {
            onFilterChange('language', undefined);
            onFilterChange('category', undefined);
            onFilterChange('minPrice', undefined);
            onFilterChange('maxPrice', undefined);
          }}
          className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
        >
          {t('clearFilters', 'Clear Filters')}
        </button>
      </div>
    </div>
  );
}