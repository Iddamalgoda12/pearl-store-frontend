import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Product } from '@/types/product'

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

const CART_STORAGE_KEY = 'pearl-store-cart'

const loadCart = (): CartItem[] => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

const persistCart = (items: CartItem[]) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(loadCart())

  const subtotal = computed(() =>
    items.value.reduce((total, item) => total + item.product.price * item.quantity, 0),
  )

  const shipping = computed(() => {
    if (!items.value.length) return 0
    return subtotal.value >= 150 ? 0 : 12
  })

  const tax = computed(() => subtotal.value * 0.08)

  const total = computed(() => subtotal.value + shipping.value + tax.value)

  const itemCount = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))

  const addItem = (product: Product, options?: { selectedSize?: string; selectedColor?: string }) => {
    const existing = items.value.find(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === options?.selectedSize &&
        item.selectedColor === options?.selectedColor,
    )

    if (existing) {
      existing.quantity += 1
    } else {
      items.value.push({
        product,
        quantity: 1,
        selectedSize: options?.selectedSize,
        selectedColor: options?.selectedColor,
      })
    }

    persistCart(items.value)
  }

  const updateQuantity = (productId: number, quantity: number, selectedSize?: string) => {
    const item = items.value.find(
      (cartItem) => cartItem.product.id === productId && cartItem.selectedSize === selectedSize,
    )

    if (!item) return

    item.quantity = Math.max(1, quantity)
    persistCart(items.value)
  }

  const removeItem = (productId: number, selectedSize?: string) => {
    items.value = items.value.filter(
      (item) => !(item.product.id === productId && item.selectedSize === selectedSize),
    )
    persistCart(items.value)
  }

  const clearCart = () => {
    items.value = []
    persistCart(items.value)
  }

  return {
    items,
    subtotal,
    shipping,
    tax,
    total,
    itemCount,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  }
})
