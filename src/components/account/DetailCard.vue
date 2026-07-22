<script setup lang="ts">
defineProps<{
  title: string
  actionLabel?: string
}>()
</script>

<template>
  <section class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div class="mb-6 flex items-center justify-between gap-4">
      <h2 class="font-manrope text-2xl font-bold text-[#191C1D]">
        {{ title }}
      </h2>

      <button
        v-if="actionLabel"
        type="button"
        class="rounded-xl border border-gray-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5]"
      >
        {{ actionLabel }}
      </button>
    </div>

    <slot />
  </section>
</template>
