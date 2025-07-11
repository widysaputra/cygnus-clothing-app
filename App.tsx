
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryPills from './components/CategoryPills';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { Product, ProductCategory } from './types';
import { fetchProductsByCategory, fetchFeaturedProducts } from './services/productService';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(ProductCategory.TSHIRTS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async (category: ProductCategory) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedProducts = await fetchProductsByCategory(category);
      setProducts(fetchedProducts);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to load products. Please try again later.");
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadFeaturedProducts = useCallback(async () => {
    // Only load featured products once, or if they haven't been loaded
    if (featuredProducts.length === 0) {
      try {
        const fetchedFeatured = await fetchFeaturedProducts();
        setFeaturedProducts(fetchedFeatured);
      } catch (err) {
        console.error("Failed to fetch featured products:", err);
        // Non-critical, so don't set global error
      }
    }
  }, [featuredProducts.length]);


  useEffect(() => {
    loadProducts(selectedCategory);
  }, [selectedCategory, loadProducts]);

  useEffect(() => {
    loadFeaturedProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Load featured products only once on mount


  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {featuredProducts.length > 0 && selectedCategory === ProductCategory.TSHIRTS && (
           <ProductGrid products={featuredProducts} title="Featured Collection" />
        )}

        <CategoryPills 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        
        {/* {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-10 text-red-400">{error}</div>
        ) : (
          <ProductGrid 
            products={products} 
            title={selectedCategory === ProductCategory.ALL ? "Full Collection" : `${selectedCategory}`} 
          />
        )} */}  
      </main>
      <Footer />
    </div>
  );
};

export default App;
