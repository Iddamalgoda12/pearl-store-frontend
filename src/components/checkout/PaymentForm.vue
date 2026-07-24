<script setup lang="ts">
import AuthInput from '@/components/sign_in/AuthInput.vue'
import PasswordInput from '@/components/sign_in/PasswordInput.vue'

defineProps<{
  form: {
    cardholderName: string
    cardNumber: string
    expiryDate: string
    cvv: string
  }
  errors: Record<string, string>
}>()

const emit = defineEmits<{
  (event: 'update:form', key: string, value: string): void
}>()
</script>

<template>
  <div class="grid gap-5 md:grid-cols-2">
    <div class="md:col-span-2">
      <AuthInput id="card-name" label="Cardholder Name" :model-value="form.cardholderName" placeholder="Name on card" :error="errors.cardholderName || undefined" @update:modelValue="emit('update:form', 'cardholderName', $event)" />
    </div>
    <div class="md:col-span-2">
      <AuthInput id="card-number" label="Card Number" :model-value="form.cardNumber" placeholder="1234 5678 9012 3456" :error="errors.cardNumber || undefined" @update:modelValue="emit('update:form', 'cardNumber', $event)" />
    </div>
    <AuthInput id="expiry" label="Expiry Date" :model-value="form.expiryDate" placeholder="MM/YY" :error="errors.expiryDate || undefined" @update:modelValue="emit('update:form', 'expiryDate', $event)" />
    <PasswordInput id="cvv" label="CVV" :model-value="form.cvv" placeholder="CVV" :error="errors.cvv || undefined" @update:modelValue="emit('update:form', 'cvv', $event)" />
  </div>
</template>
