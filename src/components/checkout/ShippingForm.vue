<script setup lang="ts">
import AuthInput from '@/components/sign_in/AuthInput.vue'

defineProps<{
  form: {
    fullName: string
    email: string
    phone: string
    street: string
    city: string
    postalCode: string
    country: string
  }
  errors: Record<string, string>
}>()

const emit = defineEmits<{
  (event: 'update:form', key: string, value: string): void
}>()
</script>

<template>
  <div class="grid gap-5 md:grid-cols-2">
    <AuthInput id="ship-name" label="Full Name" :model-value="form.fullName" placeholder="Full name" :error="errors.fullName || undefined" @update:modelValue="emit('update:form', 'fullName', $event)" />
    <AuthInput id="ship-email" label="Email Address" type="email" :model-value="form.email" placeholder="Email address" :error="errors.email || undefined" @update:modelValue="emit('update:form', 'email', $event)" />
    <AuthInput id="ship-phone" label="Phone Number" :model-value="form.phone" placeholder="Phone number" :error="errors.phone || undefined" @update:modelValue="emit('update:form', 'phone', $event)" />
    <AuthInput id="ship-country" label="Country" :model-value="form.country" placeholder="Country" :error="errors.country || undefined" @update:modelValue="emit('update:form', 'country', $event)" />
    <div class="md:col-span-2">
      <AuthInput id="ship-street" label="Street Address" :model-value="form.street" placeholder="Street address" :error="errors.street || undefined" @update:modelValue="emit('update:form', 'street', $event)" />
    </div>
    <AuthInput id="ship-city" label="City" :model-value="form.city" placeholder="City" :error="errors.city || undefined" @update:modelValue="emit('update:form', 'city', $event)" />
    <AuthInput id="ship-postal" label="Postal Code" :model-value="form.postalCode" placeholder="Postal code" :error="errors.postalCode || undefined" @update:modelValue="emit('update:form', 'postalCode', $event)" />
  </div>
</template>
