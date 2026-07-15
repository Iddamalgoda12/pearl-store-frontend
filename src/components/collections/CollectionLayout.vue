<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

import Sidebar from './Sidebar.vue'
import CollectionHeader from './CollectionHeader.vue'
import ProductGrid from './ProductGrid.vue'
import Pagination from './Pagination.vue'
import { getProductsByMainCategory, getProductsBySubCategory } from '@/services/product.service'
import type { Product } from '@/types/product'
import type { MainCategory } from '@/constants/category'

const products = ref<Product[]>([])
const selectedCategory = ref<MainCategory>('Clothing')
const selectedSubcategory = ref<string | null>(null)
const searchQuery = ref('')
const sortOption = ref('Newest')
const currentPage = ref(1)
const loading = ref(true)
const error = ref('')
const itemsPerPage = 9

const loadProducts = async () => {
  loading.value = true
  error.value = ''

  try {
    if (selectedSubcategory.value) {
      products.value = await getProductsBySubCategory(selectedSubcategory.value)
    } else {
      products.value = await getProductsByMainCategory(selectedCategory.value)
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Could not load products.'
  } finally {
    loading.value = false
  }
}

const filteredProducts = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const filtered = query
    ? products.value.filter((product) => {
        const haystack = `${product.title} ${product.description} ${product.category}`.toLowerCase()
        return haystack.includes(query)
      })
    : products.value

  const sorted = [...filtered]

  switch (sortOption.value) {
    case 'Price: Low to High':
      return sorted.sort((a, b) => a.price - b.price)
    case 'Price: High to Low':
      return sorted.sort((a, b) => b.price - a.price)
    case 'Most Popular':
      return sorted.sort((a, b) => b.rating - a.rating)
    case 'Newest':
    default:
      return sorted.sort((a, b) => b.id - a.id)
  }
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredProducts.value.length / itemsPerPage)),
)

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProducts.value.slice(start, start + itemsPerPage)
})

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) {
    return
  }

  currentPage.value = page
}

onMounted(loadProducts)

watch([selectedCategory, selectedSubcategory], loadProducts)
watch([selectedCategory, selectedSubcategory, searchQuery, sortOption], () => {
  currentPage.value = 1
})

watch(totalPages, (nextTotalPages) => {
  if (currentPage.value > nextTotalPages) {
    currentPage.value = nextTotalPages
  }
})
</script>

<template>
  <section class="flex min-h-screen bg-[#F8F8F8]">
    <div class="sticky top-0 h-screen flex-shrink-0 self-start">
      <Sidebar
        :selectedCategory="selectedCategory"
        :selectedSubcategory="selectedSubcategory"
        @update:selectedCategory="
          (value) => {
            selectedCategory = value
          }
        "
        @update:selectedSubcategory="
          (value) => {
            selectedSubcategory = value
          }
        "
      />
    </div>

    <main class="flex-1 overflow-y-auto px-10 py-8">
      <CollectionHeader
        :title="selectedCategory"
        :search-query="searchQuery"
        :sort-option="sortOption"
        @update:search-query="
          (value) => {
            searchQuery = value
          }
        "
        @update:sort-option="
          (value) => {
            sortOption = value
          }
        "
      />

      <div
        v-if="loading"
        class="rounded-xl border border-gray-200 bg-[#fafafa] p-10 text-center text-gray-600"
      >
        Loading products...
      </div>

      <div
        v-else-if="error"
        class="rounded-xl border border-red-200 bg-red-50 p-10 text-center text-red-600"
      >
        {{ error }}
      </div>

      <div
        v-else-if="filteredProducts.length === 0"
        class="rounded-xl border border-gray-200 bg-[#fafafa] p-10 text-center text-gray-600"
      >
        No products match your search.
      </div>

      <ProductGrid v-else :products="paginatedProducts" />

      <Pagination
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="goToPage"
      />
    </main>
  </section>
</template>
