
import { Product, ProductCategory, EcommerceLink } from './types';

export const BRAND_NAME = "CYGNUS";

export const CATEGORIES: ProductCategory[] = [
  ProductCategory.ALL,
  ProductCategory.TSHIRTS,
  ProductCategory.HOODIES,
  ProductCategory.JACKETS,
  ProductCategory.PANTS,
  ProductCategory.ACCESSORIES,
];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Deneb',
    category: ProductCategory.TSHIRTS,
    price: 275000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/cosmictee/600/700',
    description: 'Explore the universe in style with this ultra-soft cotton tee featuring a unique cosmic design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Deep Space Black', 'Stardust White'],
    featured: true,
    ecommerceLinks: [
      { platform: 'Tokopedia', url: 'https://tk.tokopedia.com/ZSkbdQCdn/' },
      { platform: 'Shopee', url: 'https://id.shp.ee/jyKBQvW' },
    ]
  },
  {
    id: '2',
    name: 'Orion Nebula Hoodie',
    category: ProductCategory.HOODIES,
    price: 650000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/orionhoodie/600/700',
    description: 'Stay warm on your interstellar journeys with this premium hoodie, showcasing a vibrant Orion Nebula print.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Galaxy Purple', 'Midnight Blue'],
    featured: true,
  },
  {
    id: '3',
    name: 'Astro-Tech Jacket',
    category: ProductCategory.JACKETS,
    price: 950000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/astrojacket/600/700',
    description: 'A sleek, weather-resistant jacket designed for the modern explorer. Lightweight yet durable.',
    sizes: ['S', 'M', 'L'],
    colors: ['Carbon Black', 'Lunar Grey'],
  },
  {
    id: '4',
    name: 'Stargazer Slim Pants',
    category: ProductCategory.PANTS,
    price: 480000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/stargazerpants/600/700',
    description: 'Comfortable and stylish slim-fit pants, perfect for everyday adventures or gazing at the stars.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Obsidian Black', 'Khaki Green'],
  },
  {
    id: '5',
    name: 'Celestial Beanie',
    category: ProductCategory.ACCESSORIES,
    price: 185000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/celestialbeanie/600/700',
    description: 'A soft knit beanie embroidered with a subtle celestial pattern. Keeps you warm and stylish.',
    sizes: ['One Size'],
    colors: ['Charcoal Grey', 'Deep Teal'],
  },
  {
    id: '6',
    name: 'Galaxy Print Tee',
    category: ProductCategory.TSHIRTS,
    price: 250000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/galaxytee/600/700',
    description: 'Get lost in the mesmerizing galaxy print of this comfortable tee. Ideal for dreamers.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Multi-Color Print'],
    ecommerceLinks: [
      { platform: 'Lazada', url: 'https://www.lazada.co.id/example/galaxy-print-tee' },
    ]
  },
  {
    id: '7',
    name: 'Comet Trail Hoodie',
    category: ProductCategory.HOODIES,
    price: 680000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/comethoodie/600/700',
    description: 'A dynamic hoodie featuring an artistic representation of a comet trail. Cozy and eye-catching.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Electric Blue', 'Jet Black'],
    featured: true,
  },
  {
    id: '8',
    name: 'Lunar Mission Jacket',
    category: ProductCategory.JACKETS,
    price: 1100000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/lunarjacket/600/700',
    description: 'Inspired by lunar missions, this jacket offers functionality and a futuristic aesthetic.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Space Silver', 'Matte Black'],
  },
   {
    id: '9',
    name: 'Void Cargo Pants',
    category: ProductCategory.PANTS,
    price: 520000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/voidcargo/600/700',
    description: 'Highly functional cargo pants with multiple pockets, built for utility and style in the urban void.',
    sizes: ['30', '32', '34', '36'],
    colors: ['Dark Olive', 'Graphite'],
  },
  {
    id: '10',
    name: 'Star Map Scarf',
    category: ProductCategory.ACCESSORIES,
    price: 220000, // Updated Price
    imageUrl: 'https://picsum.photos/seed/starmapscarf/600/700',
    description: 'A lightweight scarf printed with a vintage star map. A versatile accessory for any stargazer.',
    sizes: ['One Size'],
    colors: ['Cream/Blue', 'Black/White'],
  }
];
