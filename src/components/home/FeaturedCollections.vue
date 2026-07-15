<script setup lang="ts">
import CategoryCard from './CategoryCard.vue'

import ClothingImage from '@/assets/images/categories/clothing.png'
import ElectronicsImage from '@/assets/images/categories/electronics.png'
import FurnitureImage from '@/assets/images/categories/furniture.png'
import ExtrasImage from '@/assets/images/categories/extras.png'
</script>

<template>
  <section class="bg-[#F8F9FA] py-32">
    <div class="mx-auto w-full px-6 sm:px-8 lg:px-16">
      <!-- Heading -->
      <h2 class="mb-16 font-manrope text-5xl font-bold tracking-tight text-[#191C1D]">
        FEATURED COLLECTIONS
      </h2>

      <!-- Grid -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Clothing -->
        <CategoryCard
          large
          title="Clothing"
          description="Clothing for everyone."
          button-text="Explore Series"
          :image="ClothingImage"
        />

        <!-- Electronics -->
        <CategoryCard
          title="Electronics"
          description="Every electrical needs in one place."
          button-text="View Devices"
          :image="ElectronicsImage"
        />

        <!-- Furniture -->
        <CategoryCard
          title="Furniture"
          description="Objects of intent."
          button-text="Explore Furniture"
          :image="FurnitureImage"
        />

        <!-- Extras -->
        <CategoryCard
          large
          title="Extras"
          description="The final touch for the architectural lifestyle."
          button-text="Explore"
          :image="ExtrasImage"
        />
      </div>
    </div>
  </section>
</template>
