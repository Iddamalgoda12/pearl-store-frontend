<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedCollections from '@/components/home/FeaturedCollections.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA]">
    <Navbar />

    <main>
      <HeroSection />

      <FeaturedCollections />
    </main>
  </div>
</template>
