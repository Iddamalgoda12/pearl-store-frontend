<script setup lang="ts">
import { onMounted, ref } from 'vue'

import ProductCard from './ProductCard.vue'

import { getTrendingProducts } from '@/services/product.service'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    products.value = await getTrendingProducts()
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load products.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="bg-white py-32">
    <div class="mx-auto w-full max-w-[1700px] px-6 lg:px-16">
      <!-- Heading -->
      <div class="mb-16 text-center">
        <h2 class="font-manrope text-5xl font-bold tracking-tight text-[#191C1D]">
          TRENDING PIECES
        </h2>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="py-20 text-center text-gray-500">Loading products...</div>

      <!-- Error -->
      <div v-else-if="error" class="py-20 text-center text-red-500">
        {{ error }}
      </div>

      <!-- Products -->
      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :category="product.category.toUpperCase()"
          :title="product.title"
          :price="product.price"
          :image="product.thumbnail"
          :href="`/products/${product.id}`"
          :badge="product.discountPercentage > 15 ? 'SALE' : undefined"
          :badge-color="product.discountPercentage > 15 ? 'orange' : undefined"
        />
      </div>

      <!-- Button -->
      <div class="mt-16 flex justify-center">
        <button
          class="rounded-md border border-[#464555] px-12 py-4 font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#191C1D] transition-all duration-300 hover:bg-[#191C1D] hover:text-white"
        >
          VIEW FULL COLLECTION
        </button>
      </div>
    </div>
  </section>
</template>
