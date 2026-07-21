<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (event: 'page-change', page: number): void
}>()

function goToPage(page: number) {
  if (page < 1 || page > props.totalPages) return
  emit('page-change', page)
}
</script>

<template>
  <nav
    v-if="totalPages > 1"
    class="mt-16 flex items-center justify-center gap-3"
    aria-label="Pagination"
  >
    <!-- Previous -->
    <button
      class="flex h-11 w-11 items-center justify-center border border-gray-200 bg-white text-lg text-gray-600 transition hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      ‹
    </button>

    <!-- Page Numbers -->
    <button
      v-for="page in totalPages"
      :key="page"
      class="flex h-11 w-11 items-center justify-center border text-sm transition"
      :class="
        page === currentPage
          ? 'border-black bg-[#191C1D] text-white'
          : 'border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black'
      "
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <!-- Next -->
    <button
      class="flex h-11 w-11 items-center justify-center border border-gray-200 bg-white text-lg text-gray-600 transition hover:border-black hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      ›
    </button>
  </nav>
</template>
