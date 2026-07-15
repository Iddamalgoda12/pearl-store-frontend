<script setup lang="ts">
import { RouterLink } from 'vue-router'

import MoonIcon from '@/assets/icons/navbar/moon.svg'
import CartIcon from '@/assets/icons/navbar/cart.svg'
import UserIcon from '@/assets/icons/navbar/user.svg'
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
    <nav class="mx-auto flex h-20 w-full items-center justify-between px-6 sm:px-8 lg:px-16">
      <!-- Logo -->
      <RouterLink to="/" class="text-xl font-bold uppercase tracking-[0.2em] text-[#191C1D]">
        Pearl Store
      </RouterLink>

      <!-- Navigation -->
      <div class="hidden md:flex items-center gap-10">
        <RouterLink to="/shop" class="text-sm uppercase text-[#4F46E5] transition-colors">
          Shop
        </RouterLink>

        <RouterLink
          to="/collections"
          class="text-sm uppercase text-[#464555] transition-colors hover:text-[#191C1D]"
        >
          Collections
        </RouterLink>
      </div>

      <!-- Icons -->
      <div class="flex items-center gap-6">
        <button aria-label="Toggle theme" class="transition-opacity hover:opacity-70">
          <img :src="MoonIcon" alt="Theme" class="h-[18px] w-[18px]" />
        </button>

        <button aria-label="Shopping cart" class="transition-opacity hover:opacity-70">
          <img :src="CartIcon" alt="Cart" class="h-5 w-4" />
        </button>

        <button aria-label="User profile" class="transition-opacity hover:opacity-70">
          <img :src="UserIcon" alt="User" class="h-4 w-4" />
        </button>
      </div>
    </nav>
  </header>
</template>
