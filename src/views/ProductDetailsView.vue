<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ProductGallery from '@/components/product-details/ProductGallery.vue'
import ProductInfoPanel from '@/components/product-details/ProductInfoPanel.vue'
import RelatedProducts from '@/components/product-details/RelatedProducts.vue'
import {
  getProductById,
  getProductsBySubCategory,
} from '@/services/product.service'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/product'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const product = ref<Product | null>(null)
const relatedProducts = ref<Product[]>([])
const activeImage = ref('')
const selectedSize = ref('M')
const loading = ref(true)
const error = ref('')

const sizes = ['XS', 'S', 'M', 'L', 'XL']

const unavailableSizes = computed(() => {
  if (!product.value) return []
  if (product.value.stock > 20) return ['XS']
  if (product.value.stock > 10) return ['XS', 'XL']
  if (product.value.stock > 5) return ['XS', 'L', 'XL']
  return ['XS', 'S', 'L', 'XL']
})

const loadProduct = async (id: number) => {
  loading.value = true
  error.value = ''

  try {
    const detail = await getProductById(id)
    product.value = detail
    activeImage.value = detail.images?.[0] || detail.thumbnail
    selectedSize.value = sizes.find((size) => !unavailableSizes.value.includes(size)) || 'M'

    const related = await getProductsBySubCategory(detail.category)
    relatedProducts.value = related.filter((item) => item.id !== detail.id).slice(0, 4)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Could not load product details.'
  } finally {
    loading.value = false
  }
}

const addToCart = () => {
  if (!product.value) return
  cartStore.addItem(product.value, { selectedSize: selectedSize.value })
}

const resolveId = () => {
  const id = Number(route.params.id)

  if (Number.isNaN(id)) {
    router.replace({ name: 'home' })
    return null
  }

  return id
}

onMounted(() => {
  const id = resolveId()
  if (id !== null) {
    loadProduct(id)
  }
})

watch(
  () => route.params.id,
  () => {
    const id = resolveId()
    if (id !== null) {
      loadProduct(id)
    }
  },
)
</script>

<template>
  <div class="bg-[#F8F9FA]">
    <section class="mx-auto max-w-[1700px] px-6 py-10 sm:px-8 lg:px-16">
      <div v-if="loading" class="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-600">
        Loading product...
      </div>

      <div v-else-if="error" class="rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-600">
        {{ error }}
      </div>

      <div v-else-if="product" class="space-y-16">
        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery
            :title="product.title"
            :images="product.images"
            :active-image="activeImage"
            @update:active-image="activeImage = $event"
          />

          <ProductInfoPanel
            :product="product"
            :selected-size="selectedSize"
            :sizes="sizes"
            :unavailable-sizes="unavailableSizes"
            @update:selected-size="selectedSize = $event"
            @add-to-cart="addToCart"
          />
        </div>

        <RelatedProducts v-if="relatedProducts.length" :products="relatedProducts" />
      </div>
    </section>
  </div>
</template>
