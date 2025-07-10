
import React, { useState } from 'react';
import { Product, ProductCategory, EcommerceLink } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showEcommerceLinks, setShowEcommerceLinks] = useState(false);

  const isComingSoonCategory = [
    ProductCategory.HOODIES,
    ProductCategory.JACKETS,
    ProductCategory.PANTS,
    ProductCategory.ACCESSORIES
  ].includes(product.category);

  // E-commerce links are specifically for T-Shirts that have them defined.
  const hasEcommerceLinks = product.category === ProductCategory.TSHIRTS && product.ecommerceLinks && product.ecommerceLinks.length > 0;

  const handleTShirtViewDetailsClick = () => {
    // This function is only intended for T-Shirts.
    // Categories marked as "Coming Soon" will have their button disabled.
    if (product.category === ProductCategory.TSHIRTS) {
      if (hasEcommerceLinks) {
        setShowEcommerceLinks(prev => !prev);
      } else {
        // Fallback for T-Shirts without specific e-commerce links: show an alert.
        console.log(`Viewing details for T-Shirt: ${product.name}`);
        alert(`Product Details for ${product.name}:\n\n${product.description}\nPrice: Rp ${product.price.toLocaleString('id-ID')}\nSizes: ${product.sizes.join(', ')}\nColors: ${product.colors.join(', ')}`);
      }
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-purple-500/30 transform hover:-translate-y-1">
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
           <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">FEATURED</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-100 mb-1 truncate group-hover:text-purple-400 transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-400 mb-3">{product.category}</p>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
          Rp {product.price.toLocaleString('id-ID')}
        </p>
        
        <button 
          onClick={isComingSoonCategory ? () => {} : handleTShirtViewDetailsClick}
          disabled={isComingSoonCategory}
          aria-expanded={hasEcommerceLinks ? showEcommerceLinks : undefined}
          aria-controls={hasEcommerceLinks ? `ecommerce-links-${product.id}` : undefined}
          className={`w-full font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg ${
            isComingSoonCategory
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-75'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
          }`}
        >
          {isComingSoonCategory ? "Coming Soon" : "View Details"}
        </button>

        {/* E-commerce links section - only shown for T-Shirts with links when expanded */}
        {hasEcommerceLinks && showEcommerceLinks && (
          <div 
            id={`ecommerce-links-${product.id}`} 
            className="mt-4 space-y-2 transition-all duration-300 ease-in-out opacity-100" 
            role="region" 
            aria-label="E-commerce Options"
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Buy on:</h4>
            {product.ecommerceLinks?.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm hover:text-white"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
