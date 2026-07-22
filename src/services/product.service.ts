import { api } from './api'
import type { Product, ProductsResponse } from '@/types/product'
import { CATEGORY_MAP, type MainCategory } from '@/constants/category'

export async function getTrendingProducts(): Promise<Product[]> {
  const { data } = await api.get<ProductsResponse>('/products')

  return data.products.sort((a, b) => b.rating - a.rating).slice(0, 4)
}

export async function getProductById(id: number): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${id}`)

  return data
}

export async function getProductsByMainCategory(category: MainCategory): Promise<Product[]> {
  const subCategories = CATEGORY_MAP[category]

  const requests = subCategories.map((subCategory) =>
    api.get<ProductsResponse>(`/products/category/${subCategory}`),
  )

  const responses = await Promise.all(requests)

  return responses.flatMap((response) => response.data.products)
}

export async function getProductsBySubCategory(subCategory: string): Promise<Product[]> {
  const { data } = await api.get<ProductsResponse>(`/products/category/${subCategory}`)

  return data.products
}
