<script setup lang="ts">
import { onMounted } from 'vue'

import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.setTheme(themeStore.theme)
})
</script>

<template>
  <RouterView />
</template>
