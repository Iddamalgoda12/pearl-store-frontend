<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  category: string
  title: string
  price: number
  image: string
  href: string
  badge?: string
  badgeColor?: 'dark' | 'orange'
}>()
</script>

<template>
  <RouterLink
    :to="href"
    class="group block transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <!-- Product Image -->
    <div class="relative overflow-hidden rounded-md border border-gray-200 bg-[#F3F4F5] shadow-sm">
      <img
        :src="image"
        :alt="`${title} product image`"
        loading="lazy"
        class="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Badge -->
      <div
        v-if="badge"
        class="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
        :class="badgeColor === 'orange' ? 'bg-[#FFDBCC] text-[#351000]' : 'bg-[#191C1D] text-white'"
      >
        {{ badge }}
      </div>
    </div>

    <!-- Product Details -->
    <div class="space-y-2 px-1 pt-5">
      <!-- Category -->
      <p class="font-inter text-[10px] uppercase tracking-[0.12em] text-[#6B7280]">
        {{ category }}
      </p>

      <!-- Title -->
      <h3
        class="line-clamp-2 min-h-[56px] font-manrope text-[18px] font-bold leading-7 text-[#191C1D] transition-colors duration-300 group-hover:text-[#4F46E5]"
      >
        {{ title }}
      </h3>

      <!-- Price -->
      <p class="font-inter text-[16px] font-semibold text-[#4F46E5]">${{ price.toFixed(2) }}</p>
    </div>
  </RouterLink>
</template>
