<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-[#F8F9FA] px-6">
    <div class="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
      <p class="font-manrope text-2xl font-bold uppercase tracking-[0.22em] text-[#191C1D]">
        Pearl Store
      </p>

      <h1 class="mt-6 font-manrope text-4xl font-bold text-[#191C1D]">Forgot Password</h1>

      <p class="mt-4 text-sm leading-7 text-[#464555]">
        Password reset is not implemented yet. You can return to the login page to continue.
      </p>

      <RouterLink
        to="/login"
        class="mt-8 inline-flex rounded-xl bg-[#191C1D] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437]"
      >
        Back to Login
      </RouterLink>
    </div>
  </div>
</template>
