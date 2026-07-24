<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { useAccountData } from '@/composables/useAccountData'
import AccountSidebar from '@/components/account/AccountSidebar.vue'
import ProfileHeader from '@/components/account/ProfileHeader.vue'
import AccountDetailsCard from '@/components/account/AccountDetailsCard.vue'
import AddressCard from '@/components/account/AddressCard.vue'
import PreferencesCard from '@/components/account/PreferencesCard.vue'
import RecentOrders from '@/components/account/RecentOrders.vue'

const { profile, address, preferences, recentOrders } = useAccountData()
</script>

<template>
  <div class="bg-[#F8F9FA]">
    <section class="mx-auto max-w-[1700px] px-6 py-10 sm:px-8 lg:px-16">
      <div class="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <AccountSidebar class="hidden lg:block" />

        <div class="space-y-8">
          <ProfileHeader :profile="profile" />

          <nav class="flex gap-2 overflow-x-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm lg:hidden">
            <RouterLink
              v-for="item in [
                { label: 'Profile', to: '/account' },
                { label: 'Orders', to: '/account/orders' },
                { label: 'Addresses', to: '/account/addresses' },
                { label: 'Wishlist', to: '/account/wishlist' },
                { label: 'Settings', to: '/account/settings' },
              ]"
              :key="item.to"
              :to="item.to"
              class="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium text-[#464555] transition duration-300 hover:bg-[#F3F4F5] hover:text-[#4F46E5]"
              :class="item.to === '/account' ? 'bg-[#F3F4F5] text-[#4F46E5]' : ''"
            >
              {{ item.label }}
            </RouterLink>
          </nav>

          <div class="grid gap-8 xl:grid-cols-2">
            <AccountDetailsCard :profile="profile" />
            <PreferencesCard v-model="preferences" />
          </div>

          <AddressCard :address="address" />

          <RecentOrders :orders="recentOrders" />
        </div>
      </div>
    </section>
  </div>
</template>
