<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <button
    type="button"
    class="relative inline-flex h-7 w-12 items-center rounded-full border border-gray-200 transition duration-300"
    :class="modelValue ? 'bg-[#4F46E5]' : 'bg-[#E5E7EB]'"
    @click="emit('update:modelValue', !modelValue)"
  >
    <span
      class="inline-block h-5 w-5 rounded-full bg-white shadow transition duration-300"
      :class="modelValue ? 'translate-x-6' : 'translate-x-1'"
    />
  </button>
</template>
