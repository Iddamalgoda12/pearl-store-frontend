<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonText: string
  image: string
  large?: boolean
}>()
</script>

<template>
  <article
    :class="[
      'group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm',
      large ? 'col-span-2 h-[288px]' : 'h-[288px]',
    ]"
  >
    <!-- Background Image -->
    <img
      :src="image"
      :alt="title"
      class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <!-- White Gradient -->
    <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />

    <!-- Content -->
    <div class="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
      <h3 class="font-manrope text-3xl font-bold text-[#191C1D]">
        {{ title }}
      </h3>

      <p class="max-w-xs font-inter text-sm text-[#464555]">
        {{ description }}
      </p>

      <button
        class="mt-2 w-fit border-b border-[#4F46E5] pb-1 font-inter text-xs uppercase tracking-[0.1em] text-[#4F46E5] transition hover:text-[#3730A3]"
      >
        {{ buttonText }}
      </button>
    </div>
  </article>
</template>
