<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5">
    <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">
      {{ label }}
    </p>
    <p class="mt-3 font-manrope text-xl font-bold text-[#191C1D]">
      {{ value }}
    </p>
  </div>
</template>
