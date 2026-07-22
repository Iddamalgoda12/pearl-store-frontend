<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import MoonIcon from '@/assets/icons/navbar/moon.svg'
import SunIcon from '@/assets/icons/navbar/sun.svg'
import CartIcon from '@/assets/icons/navbar/cart.svg'
import UserIcon from '@/assets/icons/navbar/user.svg'
import { useThemeStore } from '@/stores/theme'

const route = useRoute()
const themeStore = useThemeStore()

const isShopActive = computed(() => route.path === '/shop')
const isCollectionsActive = computed(() => route.path === '/collections')
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
        <RouterLink
          to="/shop"
          :class="[
            'text-sm uppercase transition-colors',
            isShopActive ? 'text-[#4F46E5]' : 'text-[#464555] hover:text-[#191C1D]',
          ]"
        >
          Shop
        </RouterLink>

        <RouterLink
          to="/collections"
          :class="[
            'text-sm uppercase transition-colors',
            isCollectionsActive ? 'text-[#4F46E5]' : 'text-[#464555] hover:text-[#191C1D]',
          ]"
        >
          Collections
        </RouterLink>
      </div>

      <!-- Icons -->
      <div class="flex items-center gap-6">
        <button
          aria-label="Toggle theme"
          class="transition-opacity hover:opacity-70"
          @click="themeStore.toggleTheme()"
        >
          <img :src="themeStore.isDark ? SunIcon : MoonIcon" alt="Theme" class="h-[18px] w-[18px]" />
        </button>

        <RouterLink to="/cart" aria-label="Shopping cart" class="transition-opacity hover:opacity-70">
          <img :src="CartIcon" alt="Cart" class="h-5 w-4" />
        </RouterLink>

        <RouterLink to="/account" aria-label="User profile" class="transition-opacity hover:opacity-70">
          <img :src="UserIcon" alt="User" class="h-4 w-4" />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
