<script setup lang="ts">
import { computed } from 'vue'

import type { AccountOrder } from '@/composables/useAccountData'

const props = defineProps<{
  orders: AccountOrder[]
}>()

const badgeClasses = (status: AccountOrder['status']) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-700'
    case 'Processing':
      return 'bg-yellow-100 text-yellow-700'
    case 'Shipped':
      return 'bg-blue-100 text-blue-700'
    case 'Cancelled':
      return 'bg-red-100 text-red-700'
  }
}

const hasOrders = computed(() => props.orders.length > 0)
</script>

<template>
  <section class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div class="mb-6 flex items-center justify-between gap-4">
      <h2 class="font-manrope text-2xl font-bold text-[#191C1D]">Recent Orders</h2>
      <button
        type="button"
        class="rounded-xl border border-gray-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#191C1D] transition duration-300 hover:border-[#4F46E5] hover:text-[#4F46E5]"
      >
        View All
      </button>
    </div>

    <div v-if="hasOrders" class="overflow-x-auto">
      <table class="min-w-full text-left">
        <thead>
          <tr class="border-b border-gray-200 text-xs uppercase tracking-[0.18em] text-[#6B7280]">
            <th class="pb-4 pr-6 font-medium">Order ID</th>
            <th class="pb-4 pr-6 font-medium">Date</th>
            <th class="pb-4 pr-6 font-medium">Status</th>
            <th class="pb-4 pr-6 font-medium">Total</th>
            <th class="pb-4 font-medium">View Details</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-b border-gray-100 text-sm text-[#464555] last:border-b-0"
          >
            <td class="py-4 pr-6 font-semibold text-[#191C1D]">{{ order.id }}</td>
            <td class="py-4 pr-6">{{ order.date }}</td>
            <td class="py-4 pr-6">
              <span
                class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                :class="badgeClasses(order.status)"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="py-4 pr-6 font-semibold text-[#191C1D]">${{ order.total.toFixed(2) }}</td>
            <td class="py-4">
              <button
                type="button"
                class="rounded-xl bg-[#191C1D] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437]"
              >
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="rounded-2xl border border-gray-200 bg-[#FAFAFA] p-10 text-center text-[#464555]">
      No recent orders yet.
    </div>
  </section>
</template>
