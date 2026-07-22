<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import CheckoutSection from '@/components/checkout/CheckoutSection.vue'
import ShippingForm from '@/components/checkout/ShippingForm.vue'
import PaymentForm from '@/components/checkout/PaymentForm.vue'
import CheckoutSummary from '@/components/checkout/CheckoutSummary.vue'
import { useCartStore } from '@/stores/cart'
import { useAccountData } from '@/composables/useAccountData'
import { generateOrderId, mapCartProductToOrderItem, useOrdersStore } from '@/stores/orders'

const router = useRouter()
const cartStore = useCartStore()
const ordersStore = useOrdersStore()
const { profile, address } = useAccountData()

const shippingForm = reactive({
  fullName: profile.value.name,
  email: profile.value.email,
  phone: profile.value.phone,
  street: address.value.street,
  city: address.value.city,
  postalCode: address.value.postalCode,
  country: address.value.country,
})

const paymentForm = reactive({
  cardholderName: profile.value.name,
  cardNumber: '4111 1111 1111 1111',
  expiryDate: '12/28',
  cvv: '123',
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)

const cardError = (value: string) => value.replace(/\s/g, '').length

const validate = () => {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!shippingForm.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!shippingForm.email.includes('@')) errors.email = 'Valid email is required.'
  if (!shippingForm.phone.trim()) errors.phone = 'Phone number is required.'
  if (!shippingForm.street.trim()) errors.street = 'Street address is required.'
  if (!shippingForm.city.trim()) errors.city = 'City is required.'
  if (!shippingForm.postalCode.trim()) errors.postalCode = 'Postal code is required.'
  if (!shippingForm.country.trim()) errors.country = 'Country is required.'

  if (!paymentForm.cardholderName.trim()) errors.cardholderName = 'Cardholder name is required.'
  if (cardError(paymentForm.cardNumber) < 12) errors.cardNumber = 'Card number is invalid.'
  if (!/^\d{2}\/\d{2}$/.test(paymentForm.expiryDate)) errors.expiryDate = 'Use MM/YY format.'
  if (paymentForm.cvv.replace(/\s/g, '').length < 3) errors.cvv = 'CVV is invalid.'

  return Object.keys(errors).length === 0
}

const isValid = computed(() => {
  return Boolean(
    shippingForm.fullName.trim() &&
    shippingForm.email.includes('@') &&
    shippingForm.phone.trim() &&
    shippingForm.street.trim() &&
    shippingForm.city.trim() &&
    shippingForm.postalCode.trim() &&
    shippingForm.country.trim() &&
    paymentForm.cardholderName.trim() &&
    cardError(paymentForm.cardNumber) >= 12 &&
    /^\d{2}\/\d{2}$/.test(paymentForm.expiryDate) &&
    paymentForm.cvv.replace(/\s/g, '').length >= 3
  )
})

const updateShipping = (key: string, value: string) => {
  ;(shippingForm as Record<string, string>)[key] = value
}

const updatePayment = (key: string, value: string) => {
  ;(paymentForm as Record<string, string>)[key] = value
}

const placeOrder = async () => {
  if (!validate()) return

  isSubmitting.value = true
  try {
    const orderId = generateOrderId()
    const order = {
      id: orderId,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      items: cartStore.items.map((item) => mapCartProductToOrderItem(item.product, item.quantity)),
      total: cartStore.total,
      status: 'Processing' as const,
    }

    ordersStore.addOrder(order)
    cartStore.clearCart()
    router.push({ name: 'checkout-success', query: { orderId, total: order.total.toFixed(2) } })
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (cartStore.items.length === 0) {
    router.replace({ name: 'cart' })
  }
})
</script>

<template>
  <div class="bg-[#F8F9FA]">
    <section class="mx-auto max-w-[1700px] px-6 py-10 sm:px-8 lg:px-16">
      <div class="mb-10">
        <p class="font-inter text-xs uppercase tracking-[0.18em] text-[#6B7280]">Checkout</p>
        <h1 class="mt-3 font-manrope text-5xl font-bold tracking-tight text-[#191C1D]">
          Complete Your Order
        </h1>
      </div>

      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form id="checkout-form" class="space-y-8" @submit.prevent="placeOrder">
          <CheckoutSection>
            <template #eyebrow>Shipping Information</template>
            <template #title>Shipping Details</template>
            <ShippingForm :form="shippingForm" :errors="errors" @update:form="updateShipping" />
          </CheckoutSection>

          <CheckoutSection>
            <template #eyebrow>Payment Information</template>
            <template #title>Payment Details</template>
            <PaymentForm :form="paymentForm" :errors="errors" @update:form="updatePayment" />
          </CheckoutSection>
        </form>

        <CheckoutSummary
          :items="cartStore.items"
          :subtotal="cartStore.subtotal"
          :shipping="cartStore.shipping"
          :tax="cartStore.tax"
          :total="cartStore.total"
          :is-valid="!!isValid"
          :is-submitting="isSubmitting"
        />
      </div>
    </section>
  </div>
</template>
