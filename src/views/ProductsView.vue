<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '../services/api'
import type { Product } from '@/types/product'
import ProductCard from '@/components/product/ProductCard.vue'
import { useProductFilter } from '@/composables/useProductFilter'

const products = ref<Product[]>([])
const { search, selectedCategory, categories, filteredProducts } = useProductFilter(products)

const loading = ref(false)

const fetchProducts = async () => {
  loading.value = true
  try {
    const response = await api.get('/products') //api call

    console.log(response.data)

    products.value = response.data.products
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex flex-col gap-4 sm:flex-row">
      <!-- SEARCH -->
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black"
      />

      <!-- CATEGORY FILTER -->
      <select
        v-model="selectedCategory"
        class="rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black"
      >
        <option v-for="category in categories" :key="category" :value="category">
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </option>
      </select>
    </div>

    <div v-if="loading" class="py-10 text-center text-2xl font-bold">Loading...</div>

    <div
      v-else
      class="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>
