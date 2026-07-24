<script setup lang="ts">
defineProps<{
  quantity: number
}>()

const emit = defineEmits<{
  (event: 'increment'): void
  (event: 'decrement'): void
}>()
</script>

<template>
  <div class="inline-flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
    <button
      type="button"
      class="h-11 w-11 text-lg font-semibold text-[#191C1D] transition duration-300 hover:bg-[#F3F4F5]"
      @click="emit('decrement')"
    >
      −
    </button>

    <span class="min-w-12 px-4 text-center text-sm font-semibold text-[#191C1D]">
      {{ quantity }}
    </span>

    <button
      type="button"
      class="h-11 w-11 text-lg font-semibold text-[#191C1D] transition duration-300 hover:bg-[#F3F4F5]"
      @click="emit('increment')"
    >
      +
    </button>
  </div>
</template>
