<script setup lang="ts">
import { computed } from 'vue'

import CartItemCard from '@/components/cart/CartItemCard.vue'
import EmptyCartState from '@/components/cart/EmptyCartState.vue'
import OrderSummary from '@/components/cart/OrderSummary.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const freeShippingThreshold = 150

const hasItems = computed(() => cartStore.items.length > 0)

const increment = (productId: number, selectedSize?: string) => {
  const item = cartStore.items.find(
    (cartItem) => cartItem.product.id === productId && cartItem.selectedSize === selectedSize,
  )
  if (!item) return
  cartStore.updateQuantity(productId, item.quantity + 1, selectedSize)
}

const decrement = (productId: number, selectedSize?: string) => {
  const item = cartStore.items.find(
    (cartItem) => cartItem.product.id === productId && cartItem.selectedSize === selectedSize,
  )
  if (!item) return
  cartStore.updateQuantity(productId, Math.max(1, item.quantity - 1), selectedSize)
}
</script>

<template>
  <div class="bg-[#F8F9FA]">
    <section class="mx-auto max-w-[1700px] px-6 py-10 sm:px-8 lg:px-16">
      <div class="mb-10">
        <p class="font-inter text-xs uppercase tracking-[0.18em] text-[#6B7280]">
          Shopping Cart
        </p>
        <h1 class="mt-3 font-manrope text-5xl font-bold tracking-tight text-[#191C1D]">
          Your Cart
        </h1>
      </div>

      <div v-if="hasItems" class="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div class="space-y-6">
          <CartItemCard
            v-for="item in cartStore.items"
            :key="`${item.product.id}-${item.selectedSize || 'default'}-${item.selectedColor || 'default'}`"
            :item="item"
            @increment="increment(item.product.id, item.selectedSize)"
            @decrement="decrement(item.product.id, item.selectedSize)"
            @remove="cartStore.removeItem(item.product.id, item.selectedSize)"
          />
        </div>

        <OrderSummary
          :subtotal="cartStore.subtotal"
          :shipping="cartStore.shipping"
          :tax="cartStore.tax"
          :total="cartStore.total"
          :free-shipping-threshold="freeShippingThreshold"
        />
      </div>

      <EmptyCartState v-else />
    </section>
  </div>
</template>
