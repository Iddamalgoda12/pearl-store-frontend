<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

import AuthHero from '@/components/sign_in/AuthHero.vue'
import AuthInput from '@/components/sign_in/AuthInput.vue'
import AuthCheckbox from '@/components/sign_in/AuthCheckbox.vue'
import PasswordInput from '@/components/sign_in/PasswordInput.vue'
import SocialAuthButtons from '@/components/sign_in/SocialAuthButtons.vue'

const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
})

const touched = reactive({
  fullName: false,
  email: false,
  password: false,
  confirmPassword: false,
  termsAccepted: false,
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const errors = computed(() => ({
  fullName: !form.fullName.trim() ? 'Full name is required.' : '',
  email: !form.email.trim()
    ? 'Email address is required.'
    : !emailRegex.test(form.email)
      ? 'Please enter a valid email address.'
      : '',
  password: !form.password
    ? 'Password is required.'
    : form.password.length < 8
      ? 'Password must be at least 8 characters.'
      : '',
  confirmPassword: !form.confirmPassword
    ? 'Please confirm your password.'
    : form.confirmPassword !== form.password
      ? 'Passwords do not match.'
      : '',
  termsAccepted: form.termsAccepted ? '' : 'You must accept the Terms of Service and Privacy Policy.',
}))

const isFormValid = computed(
  () =>
    !errors.value.fullName &&
    !errors.value.email &&
    !errors.value.password &&
    !errors.value.confirmPassword &&
    !errors.value.termsAccepted,
)

const showError = (key: keyof typeof touched) => touched[key] && errors.value[key]

const handleSubmit = async () => {
  Object.keys(touched).forEach((key) => {
    touched[key as keyof typeof touched] = true
  })

  if (!isFormValid.value) return

  isSubmitting.value = true
  submitSuccess.value = false

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    submitSuccess.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="grid min-h-screen bg-[#F8F9FA] lg:grid-cols-2">
    <AuthHero
      eyebrow="Pearl Store"
      title="Sign up to shop, save, and track your orders."
      description="Create your account to enjoy a refined shopping experience with curated collections, seamless tracking, and a quicker checkout flow."
      alt="Pearl Store signup hero"
    />

    <section class="flex items-center justify-center px-6 py-10 sm:px-8 lg:px-16">
      <div class="w-full max-w-[560px] animate-[fadeIn_.35s_ease]">
        <div class="mb-10">
          <p class="font-manrope text-2xl font-bold uppercase tracking-[0.22em] text-[#191C1D]">
            Pearl Store
          </p>

          <div class="mt-6">
            <h2 class="font-manrope text-4xl font-bold text-[#191C1D]">Create Account</h2>

            <p class="mt-3 text-sm text-[#464555]">
              Already have an account?
              <RouterLink to="/login" class="font-semibold text-[#4F46E5] hover:text-[#3730A3]">
                Login here
              </RouterLink>
            </p>
          </div>
        </div>

        <form class="space-y-5" @submit.prevent="handleSubmit">
          <AuthInput
            id="full-name"
            v-model="form.fullName"
            label="Full Name"
            placeholder="Enter your full name"
            :error="showError('fullName') || undefined"
            @blur="touched.fullName = true"
          />

          <AuthInput
            id="email"
            v-model="form.email"
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            :error="showError('email') || undefined"
            @blur="touched.email = true"
          />

          <PasswordInput
            id="password"
            v-model="form.password"
            label="Password"
            placeholder="Create a password"
            :error="showError('password') || undefined"
            @blur="touched.password = true"
          />

          <PasswordInput
            id="confirm-password"
            v-model="form.confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter your password"
            :error="showError('confirmPassword') || undefined"
            @blur="touched.confirmPassword = true"
          />

          <div>
            <AuthCheckbox
              v-model="form.termsAccepted"
              :error="showError('termsAccepted') || undefined"
              @blur="touched.termsAccepted = true"
            />
          </div>

          <button
            type="submit"
            :disabled="!isFormValid || isSubmitting"
            class="flex h-12 w-full items-center justify-center rounded-xl bg-[#191C1D] px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#323437] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span v-if="isSubmitting">Creating Account...</span>
            <span v-else>Create Account</span>
          </button>

          <div v-if="submitSuccess" class="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            Account created successfully.
          </div>

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
