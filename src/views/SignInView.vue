<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

import AuthHero from '@/components/sign_in/AuthHero.vue'
import AuthInput from '@/components/sign_in/AuthInput.vue'
import PasswordInput from '@/components/sign_in/PasswordInput.vue'
import SocialAuthButtons from '@/components/sign_in/SocialAuthButtons.vue'

const form = reactive({
  email: '',
  password: '',
})

const touched = reactive({
  email: false,
  password: false,
})

const isSubmitting = ref(false)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const errors = computed(() => ({
  email: !form.email.trim()
    ? 'Email address is required.'
    : !emailRegex.test(form.email)
      ? 'Please enter a valid email address.'
      : '',
  password: !form.password ? 'Password is required.' : '',
}))

const isFormValid = computed(() => !errors.value.email && !errors.value.password)
const showError = (key: keyof typeof touched) => touched[key] && errors.value[key]

const handleSubmit = async () => {
  touched.email = true
  touched.password = true

  if (!isFormValid.value) return

  isSubmitting.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="grid min-h-screen bg-[#F8F9FA] lg:grid-cols-2">
    <AuthHero
      eyebrow="Pearl Store"
      title="Log in to shop, save, and track your orders."
      description="Welcome back. Sign in to continue your shopping journey, review your orders, and pick up where you left off."
      alt="Pearl Store login hero"
    />

    <section class="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-16">
      <div class="w-full max-w-[560px] animate-[fadeIn_.35s_ease]">
        <div class="mb-10">
          <p class="font-manrope text-2xl font-bold uppercase tracking-[0.22em] text-[#191C1D]">
            Pearl Store
          </p>

          <div class="mt-6">
            <h2 class="font-manrope text-4xl font-bold text-[#191C1D]">Log In</h2>

            <p class="mt-3 text-sm text-[#464555]">
              New here?
              <RouterLink to="/signup" class="font-semibold text-[#4F46E5] hover:text-[#3730A3]">
                Create an account
              </RouterLink>
            </p>
          </div>
        </div>

        <form class="space-y-5" @submit.prevent="handleSubmit">
          <AuthInput
            id="login-email"
            v-model="form.email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            :error="showError('email') || undefined"
            @blur="touched.email = true"
          />

          <div class="space-y-2">
            <PasswordInput
              id="login-password"
              v-model="form.password"
              label="Password"
              placeholder="Enter your password"
              :error="showError('password') || undefined"
              @blur="touched.password = true"
            />

            <div class="flex justify-end">
              <RouterLink
                to="/forgot-password"
                class="text-xs font-medium uppercase tracking-[0.16em] text-[#4F46E5] transition hover:text-[#3730A3]"
              >
                Forgot Password?
              </RouterLink>
            </div>
          </div>

          <button
            type="submit"
            :disabled="!isFormValid || isSubmitting"
            class="flex h-12 w-full items-center justify-center rounded-xl bg-[#191C1D] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span v-if="isSubmitting">Logging In...</span>
            <span v-else>Log In</span>
          </button>

          <div class="relative py-2">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div class="relative flex justify-center">
              <span class="bg-[#F8F9FA] px-4 text-xs uppercase tracking-[0.18em] text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <SocialAuthButtons />
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
