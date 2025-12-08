// src/components/auth/LanguageSelector.tsx

export type Language = "en" | "am" | "om";

interface LanguageSelectorProps {
  value: Language;
  onChange: (lang: Language) => void;
}

export function LanguageSelector({
  value,
  onChange,
}: LanguageSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Language)}
      className="w-full border rounded-lg p-3"
    >
      <option value="en">English</option>
      <option value="am">Amharic</option>
      <option value="om">Afaan Oromo</option>
    </select>
  );
}
