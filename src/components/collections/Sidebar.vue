<script setup lang="ts">
import { ref } from 'vue'

import ClothingIcon from '@/assets/icons/sidebar/clothing.png'
import ElectronicsIcon from '@/assets/icons/sidebar/electronics.png'
import FurnitureIcon from '@/assets/icons/sidebar/furniture.png'
import ExtraIcon from '@/assets/icons/sidebar/extras.png'

import { CATEGORY_MAP, type MainCategory } from '@/constants/category'

const props = defineProps<{
  selectedCategory: MainCategory
  selectedSubcategory: string | null
}>()

const emit = defineEmits<{
  (event: 'update:selectedCategory', value: MainCategory): void
  (event: 'update:selectedSubcategory', value: string | null): void
}>()

const categories = [
  {
    name: 'Clothing',
    icon: ClothingIcon,
  },
  {
    name: 'Electronics',
    icon: ElectronicsIcon,
  },
  {
    name: 'Furniture',
    icon: FurnitureIcon,
  },
  {
    name: 'Extra',
    icon: ExtraIcon,
  },
] as const

const openCategory = ref<MainCategory | null>(null)

function toggleCategory(name: MainCategory) {
  if (openCategory.value === name) {
    openCategory.value = null
    return
  }

  openCategory.value = name
  emit('update:selectedCategory', name)
  emit('update:selectedSubcategory', null)
}


function selectAllCategory(name: MainCategory) {
  emit('update:selectedCategory', name)
  emit('update:selectedSubcategory', null)
  openCategory.value = name
}

function selectSubcategory(name: string, parent: MainCategory) {
  emit('update:selectedCategory', parent)
  emit('update:selectedSubcategory', name)
  openCategory.value = parent
}

function formatCategory(name: string) {
  return name
    .replace('mens', "Men's")
    .replace('womens', "Women's")
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<template>
  <aside class="w-[270px] border-r border-gray-200 bg-[#FAFAFA]">
    <div v-for="category in categories" :key="category.name" class="border-b border-gray-100">
      <button
        class="flex w-full items-center gap-4 px-6 py-5 text-left transition-all duration-200"
        :class="
          props.selectedCategory === category.name
            ? 'bg-white text-[#4F46E5]'
            : 'text-gray-600 hover:bg-white hover:text-[#4F46E5]'
        "
        @click="toggleCategory(category.name)"
      >
        <img :src="category.icon" :alt="category.name" class="h-5 w-5" />

        <span class="flex-1 text-sm uppercase tracking-wide">
          {{ category.name }}
        </span>

        <span class="text-lg">
          {{ openCategory === category.name ? '−' : '+' }}
        </span>
      </button>

      <div v-if="openCategory === category.name" class="bg-white pb-3">
        <button
          class="block w-full py-2 pl-16 pr-6 text-left text-sm font-medium transition"
          :class="
            props.selectedSubcategory === null && props.selectedCategory === category.name
              ? 'text-[#4F46E5]'
              : 'text-gray-600 hover:text-[#4F46E5]'
          "
          @click="selectAllCategory(category.name)"
        >
          All {{ category.name }}
        </button>

        <button
          v-for="subcategory in CATEGORY_MAP[category.name]"
          :key="subcategory"
          class="block w-full py-2 pl-16 pr-6 text-left text-sm transition"
          :class="
            props.selectedSubcategory === subcategory
              ? 'text-[#4F46E5]'
              : 'text-gray-600 hover:bg-gray-50 hover:text-[#4F46E5]'
          "
          @click="selectSubcategory(subcategory, category.name)"
        >
          {{ formatCategory(subcategory) }}
        </button>
      </div>
    </div>
  </aside>
</template>
