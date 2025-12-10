// src/components/buyer/ProductCard.tsx
import { Card, CardContent, CardFooter, CardHeader } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { useTranslation } from 'react-i18next';
import type { ProductCard as ProductCardType, ProductLanguage } from '../../types/product';

interface ProductCardProps {
  product: ProductCardType;
}

const langLabels: Record<ProductLanguage, string> = {
  am: 'አማርኛ',
  om: 'Afaan Oromoo',
  en: 'English',
};

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={product.image || '/placeholder.jpg'}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
            <Badge variant="secondary">{langLabels[product.language]}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-2xl font-bold text-green-700">
          {product.price.toLocaleString()} ETB
        </p>
        <p className="text-sm text-gray-600">
          {t('available')}: {product.quantity}
        </p>
        <div className="text-sm">
          <p>👤 {product.farmer.name}</p>
          <p>📍 {product.farmer.location}</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" size="lg">
          {t('contactFarmer')}
        </Button>
      </CardFooter>
    </Card>
  );
}