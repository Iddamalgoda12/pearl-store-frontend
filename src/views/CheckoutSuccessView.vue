<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const orderId = computed(() => String(route.query.orderId || 'PS-000000'))
const total = computed(() => String(route.query.total || '0.00'))
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-[#F8F9FA] px-6 py-10">
    <div class="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
        ✓
      </div>

      <h1 class="mt-6 font-manrope text-4xl font-bold text-[#191C1D]">
        Thank you for your order
      </h1>

      <p class="mt-3 text-sm leading-7 text-[#464555]">
        Your order has been placed successfully and is now processing.
      </p>

      <div class="mt-8 grid gap-4 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-6 text-left sm:grid-cols-2">
        <div>
          <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Order ID</p>
          <p class="mt-2 font-semibold text-[#191C1D]">{{ orderId }}</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Total Paid</p>
          <p class="mt-2 font-semibold text-[#191C1D]">${{ total }}</p>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <RouterLink
          to="/account"
          class="inline-flex items-center justify-center rounded-xl bg-[#191C1D] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437]"
        >
          View Orders
        </RouterLink>
        <RouterLink
          to="/collections"
          class="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5]"
        >
          Continue Shopping
        </RouterLink>
      </div>
    </div>
  </div>
</template>
