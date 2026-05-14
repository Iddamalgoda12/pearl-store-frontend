<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '@/services/api'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])

const fetchProducts = async () => {
  const response = await api.get('/products')

  products.value = response.data.products
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div>
    <h1>Products</h1>

    <div v-for="product in products" :key="product.id">
      {{ product.title }}
    </div>
  </div>
</template>
