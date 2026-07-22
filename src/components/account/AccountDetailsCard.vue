<script setup lang="ts">
import DetailCard from './DetailCard.vue'
import AccountStatsCard from './AccountStatsCard.vue'
import type { AccountProfile } from '@/composables/useAccountData'

defineProps<{
  profile: AccountProfile
}>()
</script>

<template>
  <DetailCard title="Account Details">
    <div class="grid gap-4 sm:grid-cols-2">
      <AccountStatsCard label="Full Name" :value="profile.name" />
      <AccountStatsCard label="Email Address" :value="profile.email" />
      <AccountStatsCard label="Phone Number" :value="profile.phone" />
      <AccountStatsCard label="Date Joined" :value="profile.joined" />
    </div>
  </DetailCard>
</template>
