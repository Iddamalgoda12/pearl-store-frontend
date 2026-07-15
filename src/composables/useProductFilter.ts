import { computed, ref, type Ref } from 'vue'
import type { Product } from '@/types/product'

export const useProductFilter = (products: Ref<Product[]>) => {
  const search = ref('')
  const selectedCategory = ref('all')

  const categories = computed(() => {
    return ['all', ...new Set(products.value.map((p) => p.category))]
  })

  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      // SEARCH FILTER
      const matchesSearch = product.title.toLowerCase().startsWith(search.value.toLowerCase())

      // CATEGORY FILTER
      const matchesCategory =
        selectedCategory.value === 'all' || product.category === selectedCategory.value

      return matchesSearch && matchesCategory
    })
  })

  return {
    search,
    selectedCategory,
    filteredProducts,
    categories,
  }
}
