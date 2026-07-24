<script setup lang="ts">
import ProductCard from '@/components/home/ProductCard.vue'
import type { Product } from '@/types/product'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <section class="space-y-8">
    <div class="flex items-end justify-between gap-6">
      <div>
        <p class="font-inter text-xs uppercase tracking-[0.18em] text-[#6B7280]">
          Recommendations
        </p>
        <h2 class="mt-3 font-manrope text-3xl font-bold text-[#191C1D]">
          You May Also Like
        </h2>
      </div>
    </div>

    <div class="flex gap-6 overflow-x-auto pb-2">
      <div v-for="product in products" :key="product.id" class="min-w-[280px] max-w-[280px]">
        <ProductCard
          :category="product.category.toUpperCase()"
          :title="product.title"
          :price="product.price"
          :image="product.thumbnail"
          :href="`/products/${product.id}`"
        />
      </div>
    </div>
  </section>
</template>
