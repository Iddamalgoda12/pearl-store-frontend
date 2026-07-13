<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  category: string
  title: string
  price: string
  image: string
  href: string
  badge?: string
  badgeColor?: 'dark' | 'orange'
}>()
</script>

<template>
  <RouterLink
    :to="href"
    class="group block rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <!-- Image -->
    <div class="relative overflow-hidden rounded-md border border-gray-200 bg-[#F3F4F5]">
      <img
        :src="image"
        :alt="title"
        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <!-- Badge -->
      <div
        v-if="badge"
        class="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
        :class="badgeColor === 'orange' ? 'bg-[#FFDBCC] text-[#351000]' : 'bg-[#191C1D] text-white'"
      >
        {{ badge }}
      </div>
    </div>

    <!-- Product Info -->
    <div class="mt-6 px-1">
      <p class="font-inter text-[10px] uppercase tracking-[0.1em] text-[#464555]">
        {{ category }}
      </p>

      <h3
        class="mt-2 font-manrope text-[18px] font-bold text-[#191C1D] transition group-hover:text-[#4F46E5]"
      >
        {{ title }}
      </h3>

      <p class="mt-2 font-inter text-[16px] font-medium text-[#4F46E5]">
        {{ price }}
      </p>
    </div>
  </RouterLink>
</template>
