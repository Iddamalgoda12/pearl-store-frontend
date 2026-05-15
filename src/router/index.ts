import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'

import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: MainLayout,

      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },

        {
          path: 'products',
          name: 'products',
          component: ProductsView,
        },

        {
          path: 'products/:id',
          name: 'product-details',
          component: ProductDetailsView,
        },

        {
          path: 'cart',
          name: 'cart',
          component: CartView,
        },
      ],
    },

    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
    },

    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
    },
  ],
})

export default router
