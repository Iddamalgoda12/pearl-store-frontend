<script setup lang="ts">
import SearchIcon from '@/assets/icons/search.png'

const props = defineProps<{
  title: string
  searchQuery: string
  sortOption: string
}>()

const emit = defineEmits<{
  (event: 'update:searchQuery', value: string): void
  (event: 'update:sortOption', value: string): void
}>()
</script>

<template>
  <header class="mb-12">
    <div class="flex items-start justify-between">
      <!-- Left -->
      <div>
        <h1 class="text-5xl font-bold leading-none text-[#191C1D]">
          {{ props.title }}
        </h1>

        <p class="mt-4 text-lg text-gray-500">
          Simple design. Practical materials. Everyday clothing.
        </p>
      </div>

      <!-- Right -->
      <div class="flex items-center gap-4 pt-6">
        <!-- Search -->
        <div class="relative w-[420px]">
          <img
            :src="SearchIcon"
            alt="Search"
            class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 opacity-40"
          />

          <input
            :value="props.searchQuery"
            type="text"
            placeholder="SEARCH COLLECTION..."
            class="h-12 w-full border border-gray-200 bg-white pl-12 pr-4 text-sm uppercase tracking-wide text-gray-700 outline-none transition focus:border-[#4F46E5]"
            @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <!-- Sort -->
        <select
          :value="props.sortOption"
          class="h-12 w-48 border border-gray-200 bg-white px-4 text-sm uppercase tracking-wide text-gray-700 outline-none transition focus:border-[#4F46E5]"
          @change="emit('update:sortOption', ($event.target as HTMLSelectElement).value)"
        >
          <option value="Newest">SORT BY: RECENT</option>
          <option value="Price: Low to High">PRICE: LOW TO HIGH</option>
          <option value="Price: High to Low">PRICE: HIGH TO LOW</option>
          <option value="Most Popular">MOST POPULAR</option>
        </select>
      </div>
    </div>
  </header>
</template>
