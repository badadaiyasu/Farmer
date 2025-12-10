// src/components/buyer/SearchBar.tsx

import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCallback, useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useTranslation();

  // Store debounce timer without NodeJS type (browser-safe)
  const timerRef = useRef<number | undefined>(undefined);

  // Stable callback to debounce search input
  const debounceSearch = useCallback(
    (val: string) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        onChange(val);
      }, 300);
    },
    [onChange] // add dependency for eslint
  );

  return (
    <div className="flex gap-2 max-w-2xl mx-auto">
      <Input
        placeholder={t('search.placeholder')}
        value={value}
        onChange={(e) => debounceSearch(e.target.value)}
        className="text-lg w-full pl-10 pr-4 py-3 rounded-lg border"
        dir={document.documentElement.dir}
        style={{ fontFamily: '"Noto Sans Ethiopic", "Geez", sans-serif' }}
      />

      <Button size="lg">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}
