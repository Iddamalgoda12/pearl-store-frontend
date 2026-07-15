<script setup lang="ts">
import HeroImage from '@/assets/images/hero.png'
</script>

<template>
  <section class="relative flex h-[800px] items-center overflow-hidden">
    <!-- Background Image -->
    <img
      :src="HeroImage"
      alt="Hero"
      class="absolute inset-0 h-full w-full object-cover brightness-70 contrast-110"
    />

    <!-- White overlay -->
    <div class="absolute inset-0 bg-white/25" />

    <!-- Content -->
    <div class="relative z-10 px-6 sm:px-8 lg:px-16">
      <h1 class="font-manrope text-6xl font-extrabold leading-none text-[#191C1D] lg:text-8xl">
        PEARL
      </h1>

      <h1 class="font-manrope text-6xl font-extrabold leading-none text-[#4F46E5] lg:text-8xl">
        STORE
      </h1>

      <p class="mt-8 max-w-xl text-xl text-[#464555]">
        Inspired by the Pearl of the Indian Ocean— bringing you quality and elegance.
      </p>

      <button
        class="mt-8 rounded-md bg-[#191C1D] px-10 py-4 font-bold uppercase tracking-wider text-white transition hover:bg-black"
      >
        Shop Now
      </button>
    </div>
  </section>
</template>
