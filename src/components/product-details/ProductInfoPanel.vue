<script setup lang="ts">
import { computed } from 'vue'

import type { Product } from '@/types/product'

const props = defineProps<{
  product: Product
  selectedSize: string
  sizes: string[]
  unavailableSizes: string[]
}>()

const emit = defineEmits<{
  (event: 'update:selectedSize', value: string): void
  (event: 'add-to-cart'): void
}>()

const price = computed(() => props.product.price.toFixed(2))

const composition = computed(() => {
  const category = props.product.category.toLowerCase()
  if (category.includes('shoe')) return 'Leather upper, textile lining, rubber sole'
  if (category.includes('dress') || category.includes('shirt') || category.includes('top')) {
    return 'Premium cotton blend, tailored finish'
  }
  return 'Crafted with premium materials and refined finishing'
})

const shipping = computed(() => {
  if (props.product.stock > 20) return 'Ships in 1-2 business days'
  if (props.product.stock > 5) return 'Ships in 2-4 business days'
  return 'Low stock. Ships in 3-5 business days'
})
</script>

<template>
  <section class="lg:sticky lg:top-24 space-y-8">
    <div class="space-y-5">
      <p class="font-inter text-xs uppercase tracking-[0.18em] text-[#6B7280]">
        {{ product.category }}
      </p>

      <div class="space-y-3">
        <h1 class="font-manrope text-4xl font-bold leading-tight text-[#191C1D]">
          {{ product.title }}
        </h1>

        <p class="font-inter text-3xl font-semibold text-[#4F46E5]">
          ${{ price }}
        </p>
      </div>

      <p class="max-w-2xl font-inter text-[15px] leading-7 text-[#464555]">
        {{ product.description }}
      </p>
    </div>

    <div class="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 class="font-manrope text-lg font-bold text-[#191C1D]">Features</h2>

      <ul class="space-y-3 text-[15px] leading-7 text-[#464555]">
        <li v-for="feature in [product.brand, `Rated ${product.rating}/5`, `${product.stock} items in stock`]" :key="feature" class="flex gap-3">
          <span class="mt-2 h-2 w-2 rounded-full bg-[#4F46E5]" />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <div class="space-y-4">
      <h2 class="font-manrope text-lg font-bold text-[#191C1D]">Select Size</h2>

      <div class="grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-4">
        <button
          v-for="size in sizes"
          :key="size"
          type="button"
          class="rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition duration-300"
          :class="
            unavailableSizes.includes(size)
              ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 line-through'
              : selectedSize === size
                ? 'border-[#4F46E5] bg-[#4F46E5] text-white shadow-md'
                : 'border-gray-200 bg-white text-[#191C1D] hover:border-[#4F46E5] hover:text-[#4F46E5]'
          "
          :disabled="unavailableSizes.includes(size)"
          @click="emit('update:selectedSize', size)"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <div class="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          class="rounded-xl bg-[#191C1D] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437] active:scale-[0.99]"
          @click="emit('add-to-cart')"
        >
          Add to Cart
        </button>

        <button
          type="button"
          class="rounded-xl border border-gray-300 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5] active:scale-[0.99]"
        >
          Add to Wishlist
        </button>
      </div>

      <div class="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-2">
        <div>
          <p class="text-xs uppercase tracking-[0.18em] text-gray-500">Composition</p>
          <p class="mt-2 text-sm leading-6 text-[#464555]">{{ composition }}</p>
        </div>

        <div>
          <p class="text-xs uppercase tracking-[0.18em] text-gray-500">Shipping</p>
          <p class="mt-2 text-sm leading-6 text-[#464555]">{{ shipping }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
