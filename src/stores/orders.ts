import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

import type { Product } from '@/types/product'

export type OrderStatus = 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled'

export interface OrderItem {
  productId: number
  title: string
  thumbnail: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  date: string
  items: OrderItem[]
  total: number
  status: OrderStatus
}

const STORAGE_KEY = 'pearl-store-orders'

const loadOrders = (): Order[] => {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Order[]) : []
  } catch {
    return []
  }
}

const persist = (orders: Order[]) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
}

export const generateOrderId = () => {
  const stamp = Date.now().toString().slice(-6)
  return `PS-${stamp}`
}

export const mapCartProductToOrderItem = (product: Product, quantity: number): OrderItem => ({
  productId: product.id,
  title: product.title,
  thumbnail: product.thumbnail,
  quantity,
  price: product.price,
})

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Order[]>(loadOrders())

  const recentOrders = computed(() => [...orders.value].slice(0, 5))

  const addOrder = (order: Order) => {
    orders.value = [order, ...orders.value]
    persist(orders.value)
  }

  watch(
    orders,
    (next) => {
      persist(next)
    },
    { deep: true },
  )

  return {
    orders,
    recentOrders,
    addOrder,
  }
})
