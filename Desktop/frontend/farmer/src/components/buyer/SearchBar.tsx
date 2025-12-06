// src/components/buyer/SearchBar.tsx
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex gap-2 max-w-2xl mx-auto">
      <Input
        placeholder="ምን ፈልጉ? / What are you looking for? / Maaliif barbaaddan?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-lg"
        dir={document.documentElement.dir}
      />
      <Button size="lg">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}