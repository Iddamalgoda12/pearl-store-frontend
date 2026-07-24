<script setup lang="ts">
import { RouterLink } from 'vue-router'

import OrderLineItem from './OrderLineItem.vue'
import type { CartItem } from '@/stores/cart'

defineProps<{
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  isSubmitting: boolean
  isValid: boolean
}>()
</script>

<template>
  <aside class="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
    <div class="space-y-2">
      <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Order Summary</p>
      <h2 class="font-manrope text-3xl font-bold text-[#191C1D]">Summary</h2>
    </div>

    <div class="space-y-4">
      <OrderLineItem v-for="item in items" :key="`${item.product.id}-${item.selectedSize || 'default'}`" :item="item" />
    </div>

    <div class="space-y-4 text-sm text-[#464555]">
      <div class="flex items-center justify-between">
        <span>Subtotal</span>
        <span class="font-semibold text-[#191C1D]">${{ subtotal.toFixed(2) }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Shipping</span>
        <span class="font-semibold text-[#191C1D]">{{ shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}` }}</span>
      </div>
      <div class="flex items-center justify-between">
        <span>Tax</span>
        <span class="font-semibold text-[#191C1D]">${{ tax.toFixed(2) }}</span>
      </div>
      <div class="h-px bg-gray-200" />
      <div class="flex items-center justify-between text-lg font-bold text-[#191C1D]">
        <span>Total</span>
        <span>${{ total.toFixed(2) }}</span>
      </div>
    </div>

    <button
      type="submit"
      form="checkout-form"
      :disabled="!isValid || isSubmitting"
      class="w-full rounded-xl bg-[#191C1D] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span v-if="isSubmitting">Processing Order...</span>
      <span v-else>Place Order</span>
    </button>

    <RouterLink
      to="/cart"
      class="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5]"
    >
      Back to Cart
    </RouterLink>
  </aside>
</template>
