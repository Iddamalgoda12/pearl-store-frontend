<script setup lang="ts">
import { ref } from 'vue'

import AuthInput from './AuthInput.vue'

defineProps<{
  id: string
  label: string
  modelValue: string
  error?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const isVisible = ref(false)
</script>

<template>
  <div class="space-y-2">
    <AuthInput
      :id="id"
      :label="label"
      :model-value="modelValue"
      :type="isVisible ? 'text' : 'password'"
      :placeholder="placeholder"
      :error="error"
      @update:modelValue="emit('update:modelValue', $event)"
    />

    <button
      type="button"
      class="text-xs font-medium uppercase tracking-[0.16em] text-[#4F46E5] transition hover:text-[#3730A3]"
      @click="isVisible = !isVisible"
    >
      {{ isVisible ? 'Hide password' : 'Show password' }}
    </button>
  </div>
</template>
