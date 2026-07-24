<script setup lang="ts">
defineProps<{
  modelValue: boolean
  error?: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <label class="flex items-start gap-3 text-sm text-[#464555]">
    <input
      :checked="modelValue"
      type="checkbox"
      class="mt-1 h-4 w-4 rounded border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5]"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />

    <span>
      I agree to the
      <a href="#" class="font-medium text-[#4F46E5] hover:text-[#3730A3]">Terms of Service</a>
      and
      <a href="#" class="font-medium text-[#4F46E5] hover:text-[#3730A3]">Privacy Policy</a>
    </span>
  </label>

  <p v-if="error" class="mt-2 text-sm text-red-500">
    {{ error }}
  </p>
</template>
