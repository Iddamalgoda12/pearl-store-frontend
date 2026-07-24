<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: string
  label: string
  modelValue: string
  type?: string
  placeholder?: string
  error?: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const hasError = computed(() => Boolean(props.error))
</script>

<template>
  <label class="block">
    <span class="mb-2 block text-sm font-medium text-[#191C1D]">
      {{ label }}
    </span>

    <input
      :id="id"
      :value="modelValue"
      :type="type || 'text'"
      :placeholder="placeholder"
      class="h-12 w-full rounded-xl border bg-white px-4 text-sm text-[#191C1D] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10"
      :class="hasError ? 'border-red-300' : 'border-gray-200'"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <p v-if="error" class="mt-2 text-sm text-red-500">
      {{ error }}
    </p>
  </label>
</template>
