<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  images: string[]
  activeImage: string
}>()

const emit = defineEmits<{
  (event: 'update:activeImage', value: string): void
}>()

const galleryImages = computed(() => props.images.filter(Boolean))
</script>

<template>
  <section class="space-y-4">
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <Transition name="fade" mode="out-in">
        <img
          :key="activeImage"
          :src="activeImage"
          :alt="title"
          class="h-[520px] w-full object-cover"
        />
      </Transition>
    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
      <button
        v-for="image in galleryImages.slice(0, 4)"
        :key="image"
        type="button"
        class="group overflow-hidden rounded-xl border transition duration-300"
        :class="activeImage === image ? 'border-[#4F46E5] ring-2 ring-[#4F46E5]/20' : 'border-gray-200 hover:border-[#4F46E5]'"
        @click="emit('update:activeImage', image)"
      >
        <img
          :src="image"
          :alt="`${title} thumbnail`"
          class="h-24 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </button>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.985);
}
</style>
