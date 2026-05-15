<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log(email.value)
  console.log(password.value)
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <form @submit.prevent="handleLogin" class="w-full max-w-md rounded-2xl border p-8 shadow-lg">
      <h1 class="mb-6 text-3xl font-bold">Login</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="mb-4 w-full rounded-xl border p-3"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-4 w-full rounded-xl border p-3"
      />

      <button
        type="submit"
        class="w-full rounded-xl bg-black p-3 text-white transition hover:opacity-80"
      >
        Login
      </button>
    </form>
  </div>
</template>
