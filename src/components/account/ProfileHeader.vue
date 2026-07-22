<script setup lang="ts">
import type { AccountProfile } from '@/composables/useAccountData'

defineProps<{
  profile: AccountProfile
}>()
</script>

<template>
  <section class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-center gap-5">
        <div
          class="flex h-24 w-24 items-center justify-center rounded-full bg-[#191C1D] font-manrope text-2xl font-bold text-white shadow-lg"
        >
          {{ profile.avatar }}
        </div>

        <div>
          <h1 class="font-manrope text-4xl font-bold text-[#191C1D]">
            {{ profile.name }}
          </h1>
          <p class="mt-2 text-sm text-[#464555]">
            {{ profile.email }}
          </p>
        </div>
      </div>

      <button
        type="button"
        class="inline-flex h-12 items-center justify-center rounded-xl bg-[#191C1D] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437]"
      >
        Edit Profile
      </button>
    </div>
  </section>
</template>
