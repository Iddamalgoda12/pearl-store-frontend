<script setup lang="ts">
import DetailCard from './DetailCard.vue'
import ToggleSwitch from './ToggleSwitch.vue'

const preferences = defineModel<{
  emailPromotions: boolean
  orderUpdates: boolean
  newCollectionNotifications: boolean
}>({
  required: true,
})
</script>

<template>
  <DetailCard title="Preferences">
    <div class="space-y-4">
      <div class="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4">
        <div>
          <p class="font-semibold text-[#191C1D]">Email Promotions</p>
          <p class="mt-1 text-sm text-[#464555]">Receive curated offers and seasonal highlights.</p>
        </div>
        <ToggleSwitch v-model="preferences.emailPromotions" />
      </div>

      <div class="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4">
        <div>
          <p class="font-semibold text-[#191C1D]">Order Updates</p>
          <p class="mt-1 text-sm text-[#464555]">Get delivery and status notifications for each order.</p>
        </div>
        <ToggleSwitch v-model="preferences.orderUpdates" />
      </div>

      <div class="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4">
        <div>
          <p class="font-semibold text-[#191C1D]">New Collection Notifications</p>
          <p class="mt-1 text-sm text-[#464555]">Be the first to know when new collections arrive.</p>
        </div>
        <ToggleSwitch v-model="preferences.newCollectionNotifications" />
      </div>
    </div>
  </DetailCard>
</template>
