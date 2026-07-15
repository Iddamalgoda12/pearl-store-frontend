import { api } from './api'
import type { Product, ProductsResponse } from '@/types/product'

export async function getTrendingProducts(): Promise<Product[]> {
  const { data } = await api.get<ProductsResponse>('/products')

  return data.products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)
}
