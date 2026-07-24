<script setup lang="ts">
import GoogleIcon from '@/assets/icons/navbar/user.svg'
import CartIcon from '@/assets/icons/navbar/cart.svg'
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <button
      type="button"
      class="flex h-12 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5]"
    >
      <img :src="GoogleIcon" alt="" class="h-4 w-4" />
      Google
    </button>

    <button
      type="button"
      class="flex h-12 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5]"
    >
      <img :src="CartIcon" alt="" class="h-4 w-4" />
      Facebook
    </button>
  </div>
</template>
