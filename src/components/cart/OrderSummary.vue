<script setup lang="ts">
defineProps<{
  subtotal: number
  shipping: number
  tax: number
  total: number
  freeShippingThreshold: number
}>()
</script>

<template>
  <aside class="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
    <div class="space-y-2">
      <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Order Summary</p>
      <h2 class="font-manrope text-3xl font-bold text-[#191C1D]">Summary</h2>
    </div>

    <div class="space-y-4 text-sm text-[#464555]">
      <div class="flex items-center justify-between">
        <span>Subtotal</span>
        <span class="font-semibold text-[#191C1D]">${{ subtotal.toFixed(2) }}</span>
      </div>

      <div class="flex items-center justify-between">
        <span>Estimated Shipping</span>
        <span class="font-semibold text-[#191C1D]">
          {{ shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}` }}
        </span>
      </div>

      <div class="flex items-center justify-between">
        <span>Estimated Tax</span>
        <span class="font-semibold text-[#191C1D]">${{ tax.toFixed(2) }}</span>
      </div>

      <div class="h-px bg-gray-200" />

      <div class="flex items-center justify-between text-lg font-bold text-[#191C1D]">
        <span>Total</span>
        <span>${{ total.toFixed(2) }}</span>
      </div>
    </div>

    <div class="rounded-2xl border border-[#DDE3FF] bg-[#F7F8FF] p-4 text-sm text-[#464555]">
      <p class="font-semibold text-[#191C1D]">Free shipping update</p>
      <p class="mt-2">
        {{
          shipping === 0
            ? 'You have unlocked free shipping.'
            : `Add $${Math.max(0, freeShippingThreshold - subtotal).toFixed(2)} more to unlock free shipping.`
        }}
      </p>
    </div>

    <button
      type="button"
      class="w-full rounded-xl bg-[#191C1D] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437] active:scale-[0.99]"
    >
      Proceed to Checkout
    </button>

    <div class="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 text-sm leading-6 text-[#464555]">
      <p class="font-semibold text-[#191C1D]">Shopping Benefits</p>
      <ul class="mt-3 space-y-2">
        <li>Complimentary packaging on every order</li>
        <li>Secure checkout and order tracking</li>
        <li>Easy exchanges on eligible items</li>
      </ul>
    </div>
  </aside>
</template>
