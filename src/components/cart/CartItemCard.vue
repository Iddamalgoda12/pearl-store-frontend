<script setup lang="ts">
import { computed } from 'vue'

import QuantitySelector from './QuantitySelector.vue'
import type { CartItem } from '@/stores/cart'

const props = defineProps<{
  item: CartItem
}>()

const emit = defineEmits<{
  (event: 'increment'): void
  (event: 'decrement'): void
  (event: 'remove'): void
}>()

const oldPrice = computed(() => {
  const discount = props.item.product.discountPercentage
  if (!discount) return null
  return (props.item.product.price / (1 - discount / 100)).toFixed(2)
})
</script>

<template>
  <article class="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div class="flex gap-5">
      <div class="h-36 w-36 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-[#F3F4F5]">
        <img
          :src="item.product.thumbnail"
          :alt="item.product.title"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div class="flex min-w-0 flex-1 flex-col justify-between gap-5">
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.18em] text-gray-500">
            {{ item.product.category }}
          </p>

          <h3 class="line-clamp-2 font-manrope text-2xl font-bold leading-tight text-[#191C1D]">
            {{ item.product.title }}
          </h3>

          <div class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#464555]">
            <span v-if="item.selectedSize">Size: {{ item.selectedSize }}</span>
            <span v-if="item.selectedColor">Color: {{ item.selectedColor }}</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-lg font-semibold text-[#4F46E5]">
              ${{ item.product.price.toFixed(2) }}
            </p>

            <p v-if="oldPrice" class="text-sm text-gray-400 line-through">
              ${{ oldPrice }}
            </p>
          </div>

          <QuantitySelector
            :quantity="item.quantity"
            @increment="emit('increment')"
            @decrement="emit('decrement')"
          />
        </div>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-500"
        @click="emit('remove')"
      >
        ×
      </button>
    </div>
  </article>
</template>
