// src/components/buyer/ProductDetailCard.tsx
import type { Product } from '../../types/product'; // Added 'type' keyword
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button'; // Adjusted relative path
import { Card } from '../ui/card'; // Adjusted relative path
import { Phone, MapPin, Calendar, Eye, MessageCircle, ShoppingCart } from 'lucide-react';
import { Badge } from '../ui/badge'; // Adjusted relative path
import { Separator } from '../ui/separator'; // Adjusted relative path

// If you don't need language support, you can remove these
// const languageNames: Record<string, string> = {
//   en: 'English',
//   am: 'አማርኛ',
//   om: 'Afaan Oromoo',
// };

// const languageBadges: Record<string, string> = {
//   en: 'bg-blue-100 text-blue-800',
//   am: 'bg-purple-100 text-purple-800',
//   om: 'bg-green-100 text-green-800',
// };

interface Props {
  product: Product;
}

export default function ProductDetailCard({ product }: Props) {
  useTranslation(); // You can remove this if not using i18n
  
  const handleContact = () => {
    // Simple message without translation
    const message = `Hello! I'm interested in this product: ${product.name}`;
    // Make sure product.farmer.phone exists
    const phoneNumber = product.farmer?.phone?.replace(/[^0-9]/g, '') || '';
    if (phoneNumber) {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleCall = () => {
    const phoneNumber = product.farmer?.phone?.replace(/[^0-9]/g, '') || '';
    if (phoneNumber) {
      window.open(`tel:${phoneNumber}`, '_self');
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 border-2 border-dashed">
          {product.images && product.images[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <ShoppingCart className="w-20 h-20" />
            </div>
          )}
        </div>

        {product.images && product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {product.images.slice(1, 5).map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="space-y-6">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              {product.category && (
                <div className="flex items-center gap-3 mt-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {product.category}
                  </Badge>
                  {product.language && (
                    <Badge variant="outline">
                      {product.language === 'en' ? 'English' : 
                       product.language === 'am' ? 'አማርኛ' : 
                       product.language === 'om' ? 'Afaan Oromoo' : 
                       product.language}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-4xl font-bold text-green-700">
              {product.price.toLocaleString()} ETB
              <span className="text-lg font-normal text-gray-600"> /{product.unit}</span>
            </p>
            <p className="text-gray-600 mt-2">
              Available: <strong>{product.quantity || product.stock || 0} {product.unit}</strong>
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold text-lg mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
            {product.description || 'No description provided.'}
          </p>
        </div>

        <Separator />

        {/* Farmer Info */}
        {product.farmer && (
          <Card className="p-4 bg-green-50 border-green-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-200 border-2 border-green-300 flex items-center justify-center text-2xl font-bold text-green-800">
                {product.farmer.name?.charAt(0) || 'F'}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg">{product.farmer.name || 'Farmer'}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  {product.farmer.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {product.farmer.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {product.views || 0} views
                  </span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-4 pt-6">
          <Button
            size="lg"
            className="flex-1 bg-green-600 hover:bg-green-700 text-lg font-semibold"
            onClick={handleContact}
            disabled={!product.farmer?.phone}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Contact Farmer {product.farmer?.phone ? '(WhatsApp)' : '(No phone available)'}
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="flex-1 text-lg"
            onClick={handleCall}
            disabled={!product.farmer?.phone}
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now
          </Button>
        </div>

        {product.createdAt && (
          <div className="text-center text-sm text-gray-500">
            <Calendar className="inline w-4 h-4 mr-1" />
            Posted on {new Date(product.createdAt).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
}