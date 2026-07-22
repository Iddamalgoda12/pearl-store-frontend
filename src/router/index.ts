import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'

import HomeView from '@/views/HomeView.vue'
import CollectionsView from '@/views/CollectionsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
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
          path: 'shop',
          name: 'shop',
          component: HomeView,
        },
        {
          path: 'collections',
          name: 'collections',
          component: CollectionsView,
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
  ],
})

export default router
