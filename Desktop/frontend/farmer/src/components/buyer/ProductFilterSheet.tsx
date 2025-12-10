// src/components/buyer/ProductFilterSheet.tsx

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '../../components/ui/sheet';
import { Button } from '../../components/ui/button';
import { Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ProductFilterSidebar } from './ProductFilterSidebar';

// FIXED PATH
import type { ProductFilters } from '../../types/products';



interface ProductFilterSheetProps {
  filters: ProductFilters;
  onChange: (filters: Partial<ProductFilters>) => void;
  onReset: () => void;
}

export function ProductFilterSheet({
  filters,
  onChange,
  onReset,
}: ProductFilterSheetProps) {
  const { t } = useTranslation();
  
  const hasActiveFilters = Boolean(
    filters.language || 
    filters.category || 
    filters.minPrice || 
    filters.maxPrice || 
    filters.location
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="lg" className="md:hidden w-full">
          <Filter className="w-4 h-4 mr-2" />
          {t('filters.openFilters', 'Filters')}
          {hasActiveFilters && (
            <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
              •
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
        <SheetHeader className="text-left border-b pb-4">
          <SheetTitle className="text-2xl">
            {t('filters.title', 'Filters')}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 overflow-y-auto pb-24">
          <ProductFilterSidebar
            filters={filters}
            onChange={onChange}
            onReset={onReset}
          />
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
          <SheetClose asChild>
            <Button className="w-full" size="lg">
              {t('filters.showResults', 'Show Results')}
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
