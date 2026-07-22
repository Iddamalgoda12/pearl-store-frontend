<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
    <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F3F4F5] text-3xl">
      🛒
    </div>

    <h2 class="mt-6 font-manrope text-3xl font-bold text-[#191C1D]">
      Your cart is empty
    </h2>

    <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#464555]">
      Start adding your favorite Pearl Store pieces and they will appear here for checkout.
    </p>

    <RouterLink
      to="/collections"
      class="mt-8 inline-flex rounded-xl bg-[#191C1D] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437]"
    >
      Continue Shopping
    </RouterLink>
  </section>
</template>
