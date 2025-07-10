import { Product, ProductCategory } from '../types';
import { SAMPLE_PRODUCTS } from '../constants';

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(SAMPLE_PRODUCTS);
    }, 1000); // 1 second delay
  });
};

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(SAMPLE_PRODUCTS.filter(p => p.featured));
    }, 500);
  });
};

export const fetchProductsByCategory = async (category: ProductCategory): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (category === ProductCategory.ALL) {
        resolve(SAMPLE_PRODUCTS);
      } else {
        resolve(SAMPLE_PRODUCTS.filter(product => product.category === category));
      }
    }, 700);
  });
};
