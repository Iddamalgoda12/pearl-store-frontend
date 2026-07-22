<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useAccountData } from '@/composables/useAccountData'

const { profile } = useAccountData()
const route = useRoute()

const menuItems = [
  { label: 'Profile', to: '/account' },
  { label: 'Orders', to: '/account/orders' },
  { label: 'Addresses', to: '/account/addresses' },
  { label: 'Wishlist', to: '/account/wishlist' },
  { label: 'Settings', to: '/account/settings' },
] as const

const activePath = computed(() => route.path)

const isActive = (to: string) =>
  to === '/account' ? activePath.value === '/account' : activePath.value.startsWith(to)
</script>

<template>
  <aside class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
    <div class="flex items-center gap-4 border-b border-gray-200 pb-6">
      <div
        class="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3F4F5] font-manrope text-lg font-bold text-[#191C1D]"
      >
        {{ profile.avatar }}
      </div>

      <div class="min-w-0">
        <h2 class="truncate font-manrope text-lg font-bold text-[#191C1D]">
          {{ profile.name }}
        </h2>
        <p class="truncate text-sm text-[#464555]">
          {{ profile.email }}
        </p>
      </div>
    </div>

    <nav class="mt-6 space-y-2">
      <RouterLink
        v-for="item in menuItems"
        :key="item.to"
        :to="item.to"
        class="block rounded-xl px-4 py-3 text-sm font-medium transition duration-300 hover:bg-[#F3F4F5] hover:text-[#4F46E5]"
        :class="isActive(item.to) ? 'bg-[#F3F4F5] text-[#4F46E5]' : 'text-[#464555]'"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <RouterLink
      to="/login"
      class="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-red-200 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-red-600 transition duration-300 hover:bg-red-50"
    >
      Sign Out
    </RouterLink>
  </aside>
</template>
