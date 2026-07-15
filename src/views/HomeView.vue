<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturedCollections from '@/components/home/FeaturedCollections.vue'
import TrendingProducts from '@/components/home/TrendingProducts.vue'
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA]">
    <Navbar />

    <main>
      <HeroSection />

      <FeaturedCollections />

      <TrendingProducts />
    </main>
  </div>
</template>
