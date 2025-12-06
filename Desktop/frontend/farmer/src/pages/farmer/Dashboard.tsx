// src/pages/farmer/Dashboard.tsx
import { useState } from 'react';
import AddProductForm from '../../components/farmer/AddProductForm';
import MyProductsList from '../../components/farmer/MyProductsList';
import Header from '../../components/Header';

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState<'add' | 'my-products'>('add');

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Farmer Dashboard</h1>

        <div className="w-full">
          {/* Tab Navigation */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setActiveTab('add')}
              className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                activeTab === 'add'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Add New Product
            </button>
            <button
              onClick={() => setActiveTab('my-products')}
              className={`px-6 py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                activeTab === 'my-products'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              My Products
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'add' && (
              <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>
                  <p className="text-gray-600 mt-1">List your farm products for sale</p>
                </div>
                <AddProductForm />
              </div>
            )}

            {activeTab === 'my-products' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">My Listed Products</h2>
                  <p className="text-gray-600 mt-1">Manage your existing product listings</p>
                </div>
                <MyProductsList />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}