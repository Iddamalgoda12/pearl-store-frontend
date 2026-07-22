import { computed, ref } from 'vue'

import { useOrdersStore } from '@/stores/orders'

export type OrderStatus = 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled'

export interface AccountOrder {
  id: string
  date: string
  status: OrderStatus
  total: number
}

export interface AccountProfile {
  name: string
  email: string
  phone: string
  joined: string
  avatar: string
}

export interface AccountAddress {
  recipient: string
  street: string
  city: string
  postalCode: string
  country: string
}

const profile = ref<AccountProfile>({
  name: 'Amara Silva',
  email: 'amara@pearlstore.com',
  phone: '+94 77 123 4567',
  joined: 'July 12, 2025',
  avatar: 'AS',
})

const address = ref<AccountAddress>({
  recipient: 'Amara Silva',
  street: '24 Orchid Avenue, Ward 03',
  city: 'Colombo',
  postalCode: '00300',
  country: 'Sri Lanka',
})

const preferences = ref({
  emailPromotions: true,
  orderUpdates: true,
  newCollectionNotifications: false,
})

export function useAccountData() {
  const orderStore = useOrdersStore()
  const recentOrders = computed(() =>
    orderStore.recentOrders.map((order) => ({
      id: order.id,
      date: order.date,
      status: order.status,
      total: order.total,
    })),
  )

  return {
    profile,
    address,
    preferences,
    recentOrders,
  }
}
