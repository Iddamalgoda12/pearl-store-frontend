<script setup lang="ts">
import HeroImage from '@/assets/images/sign_in.png'

defineProps<{
  eyebrow: string
  title: string
  description: string
  alt?: string
}>()
</script>

<template>
  <section class="relative min-h-[320px] overflow-hidden bg-[#191C1D] lg:min-h-screen">
    <img
      :src="HeroImage"
      :alt="alt || 'Pearl Store auth hero'"
      class="absolute inset-0 h-full w-full object-cover"
    />

    <div class="absolute inset-0 bg-gradient-to-tr from-[#191C1D]/80 via-[#191C1D]/35 to-transparent" />

    <div class="relative flex h-full min-h-[320px] items-end p-8 sm:p-12 lg:min-h-screen lg:p-16">
      <div class="max-w-xl text-white">
        <p class="mb-5 text-xs uppercase tracking-[0.3em] text-white/75">
          {{ eyebrow }}
        </p>

        <h1 class="font-manrope text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
