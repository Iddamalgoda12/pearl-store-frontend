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
    class="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <!-- Product Image -->
    <div class="overflow-hidden rounded-xl">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Product Details -->
    <div class="mt-4">
      <!-- Category -->
      <p class="text-sm capitalize text-gray-500">
        {{ product.category }}
      </p>

      <!-- Title -->
      <h2 class="mt-1 line-clamp-1 text-lg font-semibold text-gray-900">
        {{ product.title }}
      </h2>

      <!-- Description -->
      <p class="mt-2 line-clamp-2 text-sm text-gray-600">
        {{ product.description }}
      </p>

      <!-- Rating + Stock -->
      <div class="mt-3 flex items-center justify-between">
        <span class="text-sm text-yellow-500"> ⭐ {{ product.rating }} </span>

        <span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          In Stock: {{ product.stock }}
        </span>
      </div>

      <!-- Price -->
      <div class="mt-4 flex items-center justify-between">
        <span class="text-2xl font-bold text-black"> ${{ product.price }} </span>

        <span
          v-if="product.discountPercentage > 0"
          class="text-sm text-gray-400 line-through"
        >
          ${{
            (product.price / (1 - product.discountPercentage / 100)).toFixed(0)
          }}
        </span>
      </div>

      <!-- Button -->
      <button
        class="mt-5 w-full rounded-xl bg-black py-3 text-sm font-medium text-white transition duration-300 hover:bg-gray-800 active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  </RouterLink>
</template>
