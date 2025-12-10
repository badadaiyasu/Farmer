// src/components/buyer/ProductFilterSidebar.tsx
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Slider } from '../../components/ui/slider';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import type { ProductFilters } from './types/products';

interface ProductFilterSidebarProps {
  filters: ProductFilters;
  onChange: (filters: Partial<ProductFilters>) => void;
  onReset: () => void;
}

export function ProductFilterSidebar({
  filters,
  onChange,
  onReset,
}: ProductFilterSidebarProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full space-y-8 bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{t('filters.title')}</h2>
        <Button variant="ghost" size="sm" onClick={onReset}>
          {t('filters.reset')}
        </Button>
      </div>

      {/* Language Filter */}
      <div className="space-y-3">
        <Label>{t('filters.language')}</Label>
        <Select
          value={filters.language || ''}
          onValueChange={(value) =>
            onChange({ language: value ? (value as any) : undefined })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder={t('filters.allLanguages')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">{t('filters.allLanguages')}</SelectItem>
            <SelectItem value="am">አማርኛ</SelectItem>
            <SelectItem value="om">Afaan Oromoo</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <Label>{t('filters.category')}</Label>
        <Select
          value={filters.category || ''}
          onValueChange={(value) =>
            onChange({ category: value || undefined })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder={t('filters.allCategories')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">{t('filters.allCategories')}</SelectItem>
            <SelectItem value="fruits">ፍራፍሬዎች / Fruits</SelectItem>
            <SelectItem value="vegetables">አትክልቶች / Vegetables</SelectItem>
            <SelectItem value="dairy">ወተት ተዋጽኦዎች / Dairy</SelectItem>
            <SelectItem value="grains">እህል / Grains</SelectItem>
            <SelectItem value="crafts">የእጅ ሥራዎች / Crafts</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label>
          {t('filters.priceRange')}{' '}
          {filters.minPrice !== undefined && filters.maxPrice !== undefined
            ? `${filters.minPrice} - ${filters.maxPrice} ETB`
            : ''}
        </Label>
        <div className="px-2">
          <Slider
            min={0}
            max={10000}
            step={100}
            value={[filters.minPrice ?? 0, filters.maxPrice ?? 10000]}
            onValueChange={([min, max]) => onChange({ minPrice: min, maxPrice: max })}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0 ETB</span>
          <span>10,000+ ETB</span>
        </div>
      </div>

      {/* Location (Optional future) */}
      {/* <div className="space-y-3">
        <Label>{t('filters.location')}</Label>
        <Input
          placeholder={t('filters.locationPlaceholder')}
          value={filters.location || ''}
          onChange={(e) => onChange({ location: e.target.value || undefined })}
        />
      </div> */}
    </div>
  );
}