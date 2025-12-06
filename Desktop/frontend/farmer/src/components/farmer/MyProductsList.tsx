// src/components/farmer/MyProductsList.tsx
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

// Define Product type locally since the hook might be missing
type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  description?: string;
  language: 'en' | 'am' | 'om';
  image?: string;
};

// Mock data or you can fetch from API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 45.0,
    quantity: 100,
    description: 'Organic tomatoes from local farm',
    language: 'en',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400',
  },
  {
    id: '2',
    name: 'ሚስር ፍራፍሬ',
    category: 'fruits',
    price: 30.0,
    quantity: 50,
    description: 'የቤት ውስጥ የተገኘ ፍራፍሬ',
    language: 'am',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w-400',
  },
  {
    id: '3',
    name: 'Buna',
    category: 'grains',
    price: 150.0,
    quantity: 20,
    description: 'Fresh coffee beans from Oromia',
    language: 'om',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w-400',
  },
];

const languageLabels: Record<string, string> = {
  en: 'English',
  am: 'አማርኛ',
  om: 'Afaan Oromoo',
};

export default function MyProductsList() {
  // If you want to use the hook when it's available, you can conditionally use it
  // For now, using mock data to fix the module not found error
  
  const isLoading = false; // Set to true if you want to show loading state
  const products = mockProducts; // Replace with actual hook when available
  
  // Uncomment when useFarmerProducts hook is available
  // const { products, isLoading } = useFarmerProducts();

  if (isLoading) return <p className="text-center py-8">Loading your products...</p>;
  
  if (products.length === 0) return (
    <div className="text-center py-8">
      <p className="text-gray-500">You haven't listed any products yet.</p>
      <p className="text-sm text-gray-400 mt-2">Start by adding your first product!</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            {product.image ? (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <Badge variant="secondary" className="ml-2">
                  {languageLabels[product.language]}
                </Badge>
              </div>
              <Badge variant="outline" className="mt-2">
                {product.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0 px-6 pb-6">
            <div className="mb-4">
              <p className="text-2xl font-bold text-green-600">ETB {product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600 mt-1">Available: {product.quantity} units</p>
            </div>
            <p className="text-sm text-gray-700 line-clamp-2">
              {product.description || 'No description provided'}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-sm text-blue-600 hover:text-blue-800 mr-4">
                Edit
              </button>
              <button className="text-sm text-red-600 hover:text-red-800">
                Delete
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}