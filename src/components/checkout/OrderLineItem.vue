<script setup lang="ts">
import type { CartItem } from '@/stores/cart'

defineProps<{
  item: CartItem
}>()
</script>

<template>
  <div class="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4">
    <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <img :src="item.product.thumbnail" :alt="item.product.title" class="h-full w-full object-cover" />
    </div>

    <div class="min-w-0 flex-1">
      <h3 class="truncate font-semibold text-[#191C1D]">{{ item.product.title }}</h3>
      <p class="text-sm text-[#464555]">Qty {{ item.quantity }}</p>
    </div>

    <p class="text-sm font-semibold text-[#191C1D]">
      ${{ (item.product.price * item.quantity).toFixed(2) }}
    </p>
  </div>
</template>
