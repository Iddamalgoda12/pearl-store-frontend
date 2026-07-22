<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <RouterLink
    :to="`/products/${product.id}`"
    class="group flex h-[700px] flex-col border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <!-- Image -->
    <div class="flex h-[400px] items-center justify-center overflow-hidden">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Info -->
    <div class="mt-6 flex flex-1 flex-col justify-between">
      <div>
        <p class="text-[11px] uppercase tracking-[4px] text-gray-400">
          {{ product.category }}
        </p>

        <h3 class="mt-3 line-clamp-2 text-[22px] font-semibold leading-snug text-[#191C1D]">
          {{ product.title }}
        </h3>

        <p class="mt-3 line-clamp-2 text-[14px] leading-6 text-gray-500">
          {{ product.description }}
        </p>
      </div>

      <div class="mt-8 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-yellow-400">★</span>

          <span class="text-sm text-gray-600">
            {{ product.rating }}
          </span>
        </div>

        <span class="text-2xl font-bold text-[#191C1D]"> ${{ product.price }} </span>
      </div>
    </div>
  </RouterLink>
</template>
