export const CATEGORY_MAP = {
  Clothing: [
    'mens-shirts',
    'tops',
    'mens-shoes',
    'womens-dresses',
    'womens-shoes',
    'womens-bags',
    'womens-jewellery',
    'mens-watches',
    'womens-watches',
    'sunglasses',
  ],

  Electronics: [
    'smartphones',
    'laptops',
    'tablets',
    'mobile-accessories',
  ],

  Furniture: [
    'furniture',
    'home-decoration',
  ],

  Extra: [
    'beauty',
    'fragrances',
    'skin-care',
    'groceries',
    'kitchen-accessories',
    'sports-accessories',
  ],

  'Limited Edition': [],
} as const

export type MainCategory = keyof typeof CATEGORY_MAP
