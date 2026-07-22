<script setup lang="ts">
import DetailCard from './DetailCard.vue'
import type { AccountAddress } from '@/composables/useAccountData'

defineProps<{
  address: AccountAddress
}>()
</script>

<template>
  <DetailCard title="Default Shipping Address" action-label="Edit Address">
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Recipient</p>
        <p class="mt-2 text-sm font-semibold text-[#191C1D]">{{ address.recipient }}</p>
      </div>
      <div>
        <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Country</p>
        <p class="mt-2 text-sm font-semibold text-[#191C1D]">{{ address.country }}</p>
      </div>
      <div class="sm:col-span-2">
        <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Street</p>
        <p class="mt-2 text-sm font-semibold text-[#191C1D]">{{ address.street }}</p>
      </div>
      <div>
        <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">City</p>
        <p class="mt-2 text-sm font-semibold text-[#191C1D]">{{ address.city }}</p>
      </div>
      <div>
        <p class="text-xs uppercase tracking-[0.18em] text-[#6B7280]">Postal Code</p>
        <p class="mt-2 text-sm font-semibold text-[#191C1D]">{{ address.postalCode }}</p>
      </div>
    </div>
  </DetailCard>
</template>
