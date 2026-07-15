<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from '@/types/product'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <section class="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </section>
</template>
