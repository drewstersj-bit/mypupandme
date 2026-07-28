export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'harness' | 'lead';
  pattern: string;
  price: number;
  sizes: string[];
  shortDescription: string;
  features: string[];
  image: string;
  imageAlt: string;
  matchingProduct: string | null;
  shopUrl: string;
  featured: boolean;
  status: 'active' | 'draft' | 'archived';
}

export const products: Product[] = [
  {
    id: 'blue-meadow-floral-harness',
    slug: 'blue-meadow-floral-harness',
    name: 'Luxury Blue Meadow Floral Harness',
    category: 'harness',
    pattern: 'Blue Meadow Floral',
    price: 16.99,
    sizes: ['XXS', 'XS', 'S'],
    shortDescription: 'A fresh floral print in soft blues and pinks on a crisp white background.',
    features: [
      'Soft padded chest panel',
      'Breathable air-mesh lining',
      'Adjustable silky webbing strap',
      'Secure branded buckle',
      'Reinforced construction',
      'Anodised metal D-ring',
      'Soft edge binding',
      'Lightweight design',
      'My Pup and Me branded patch with red heart detail',
    ],
    image: '/assets/products/blue-meadow-floral-harness.jpg',
    imageAlt: 'Blue meadow floral patterned dog harness with pink trim by My Pup and Me',
    matchingProduct: 'blue-meadow-floral-lead',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/meadow-floral-harness-by-my-pup-and-me-copy',
    featured: true,
    status: 'active',
  },
  {
    id: 'blue-meadow-floral-lead',
    slug: 'blue-meadow-floral-lead',
    name: 'Luxury Blue Meadow Floral Lead',
    category: 'lead',
    pattern: 'Blue Meadow Floral',
    price: 9.99,
    sizes: [],
    shortDescription: 'A matching floral lead to coordinate with the Blue Meadow Floral Harness.',
    features: [
      'Matching floral fabric',
      'Comfortable padded handle',
      'Secure trigger clip',
      'Lightweight construction',
      'My Pup and Me branded',
    ],
    image: '/assets/products/blue-meadow-floral-lead.jpg',
    imageAlt: 'Blue meadow floral patterned dog lead by My Pup and Me',
    matchingProduct: 'blue-meadow-floral-harness',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-blue-meadow-floral-lead-by-my-pup-and-me',
    featured: false,
    status: 'active',
  },
  {
    id: 'white-vintage-floral-harness',
    slug: 'white-vintage-floral-harness',
    name: 'Luxury White Vintage Floral Harness',
    category: 'harness',
    pattern: 'White Vintage Floral',
    price: 16.99,
    sizes: ['XXS', 'XS', 'S'],
    shortDescription: 'A delicate vintage floral print in soft pinks on a clean white background.',
    features: [
      'Soft padded chest panel',
      'Breathable air-mesh lining',
      'Adjustable silky webbing strap',
      'Secure branded buckle',
      'Reinforced construction',
      'Anodised metal D-ring',
      'Soft edge binding',
      'Lightweight design',
      'My Pup and Me branded patch with red heart detail',
    ],
    image: '/assets/products/white-vintage-floral-harness.jpg',
    imageAlt: 'White vintage floral patterned dog harness with pink straps by My Pup and Me',
    matchingProduct: 'white-vintage-floral-lead',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/white-vintage-floral-harness-by-my-pup-and-me-copy',
    featured: true,
    status: 'active',
  },
  {
    id: 'white-vintage-floral-lead',
    slug: 'white-vintage-floral-lead',
    name: 'Luxury White Vintage Floral Lead',
    category: 'lead',
    pattern: 'White Vintage Floral',
    price: 9.99,
    sizes: [],
    shortDescription: 'A matching lead to coordinate with the White Vintage Floral Harness.',
    features: [
      'Matching vintage floral fabric',
      'Comfortable padded handle',
      'Secure trigger clip',
      'Lightweight construction',
      'My Pup and Me branded',
    ],
    image: '/assets/products/white-vintage-floral-lead.jpg',
    imageAlt: 'White vintage floral patterned dog lead by My Pup and Me',
    matchingProduct: 'white-vintage-floral-harness',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-white-vintage-floral-lead-by-my-pup-and-me',
    featured: false,
    status: 'active',
  },
  {
    id: 'brown-tartan-harness',
    slug: 'brown-tartan-harness',
    name: 'Luxury Brown Tartan Harness',
    category: 'harness',
    pattern: 'Brown Tartan',
    price: 16.99,
    sizes: ['XXS', 'XS', 'S'],
    shortDescription: 'A classic brown tartan pattern with warm autumnal tones.',
    features: [
      'Soft padded chest panel',
      'Breathable air-mesh lining',
      'Adjustable silky webbing strap',
      'Secure branded buckle',
      'Reinforced construction',
      'Anodised metal D-ring',
      'Soft edge binding',
      'Lightweight design',
      'My Pup and Me branded patch with red heart detail',
    ],
    image: '/assets/products/brown-tartan-harness.jpg',
    imageAlt: 'Brown tartan patterned dog harness with brown trim by My Pup and Me',
    matchingProduct: 'brown-tartan-lead',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/my-pup-and-me-brown-tartan-harness',
    featured: true,
    status: 'active',
  },
  {
    id: 'brown-tartan-lead',
    slug: 'brown-tartan-lead',
    name: 'Luxury Brown Tartan Lead',
    category: 'lead',
    pattern: 'Brown Tartan',
    price: 9.99,
    sizes: [],
    shortDescription: 'A matching tartan lead to coordinate with the Brown Tartan Harness.',
    features: [
      'Matching tartan fabric',
      'Comfortable padded handle',
      'Secure trigger clip',
      'Lightweight construction',
      'My Pup and Me branded',
    ],
    image: '/assets/products/brown-tartan-lead.jpg',
    imageAlt: 'Brown tartan patterned dog lead by My Pup and Me',
    matchingProduct: 'brown-tartan-harness',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-brown-tartan-lead-by-my-pup-and-me',
    featured: false,
    status: 'active',
  },
  {
    id: 'classic-tweed-harness',
    slug: 'classic-tweed-harness',
    name: 'Luxury Classic Tweed Harness',
    category: 'harness',
    pattern: 'Classic Tweed',
    price: 16.99,
    sizes: ['XXS', 'XS', 'S'],
    shortDescription: 'A timeless tweed fabric with subtle flecks and heritage character.',
    features: [
      'Soft padded chest panel',
      'Breathable air-mesh lining',
      'Adjustable silky webbing strap',
      'Secure branded buckle',
      'Reinforced construction',
      'Anodised metal D-ring',
      'Soft edge binding',
      'Lightweight design',
      'My Pup and Me branded patch with red heart detail',
    ],
    image: '/assets/products/classic-tweed-harness.jpg',
    imageAlt: 'Classic tweed patterned dog harness with brown accents by My Pup and Me',
    matchingProduct: 'classic-tweed-lead',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/tweed-harness-by-my-pup-and-me',
    featured: true,
    status: 'active',
  },
  {
    id: 'classic-tweed-lead',
    slug: 'classic-tweed-lead',
    name: 'Luxury Classic Tweed Lead',
    category: 'lead',
    pattern: 'Classic Tweed',
    price: 9.99,
    sizes: [],
    shortDescription: 'A matching tweed lead to coordinate with the Classic Tweed Harness.',
    features: [
      'Matching tweed fabric',
      'Comfortable padded handle',
      'Secure trigger clip',
      'Lightweight construction',
      'My Pup and Me branded',
    ],
    image: '/assets/products/classic-tweed-lead.jpg',
    imageAlt: 'Classic tweed patterned dog lead by My Pup and Me',
    matchingProduct: 'classic-tweed-harness',
    shopUrl: 'https://mychiandme.co.uk/collections/my-pup-and-me/products/luxury-tweed-lead-by-my-pup-and-me',
    featured: false,
    status: 'active',
  },
];

export const sizeGuide = [
  { size: 'XXS', chest: '20–25cm', neck: '20cm' },
  { size: 'XS', chest: '25–30cm', neck: '22cm' },
  { size: 'S', chest: '30–38cm', neck: '26cm' },
];

export const patterns = ['Blue Meadow Floral', 'White Vintage Floral', 'Brown Tartan', 'Classic Tweed'];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedHarnesses(): Product[] {
  return products.filter((p) => p.featured && p.category === 'harness');
}

export function getProductsByCategory(category: 'harness' | 'lead'): Product[] {
  return products.filter((p) => p.category === category && p.status === 'active');
}

export function getProductsByPattern(pattern: string): Product[] {
  return products.filter((p) => p.pattern === pattern && p.status === 'active');
}
