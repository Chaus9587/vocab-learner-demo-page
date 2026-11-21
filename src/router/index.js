import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import Documentations from '@/views/Documentations.vue'
import About from '@/views/About.vue'

import Installation from '@/views/docs/Installation.vue'
import MainApplication from '@/views/docs/MainApplication.vue'
import CoreFunctions from '@/views/docs/CoreFunctions.vue'
import Lookup from '@/views/docs/deck/Lookup.vue'
import Review from '@/views/docs/deck/Review.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/docs',
      name: 'docs',
      component: Documentations,
      redirect: { name: 'installation' },
      children: [
        {
          path: 'installation',
          name: 'installation',
          component: Installation,
        },
        {
          path: 'main-app',
          name: 'main-app',
          component: MainApplication,
        },
        {
          path: 'core-functions',
          name: 'core-functions',
          component: CoreFunctions,
        },
        {
          path: 'card-deck',
          name: 'card-deck',
          redirect: { name: 'lookup-and-add' },
          children: [
            {
              path: 'lookup-and-add',
              name: 'lookup-and-add',
              component: Lookup,
            },
            {
              path: 'review',
              name: 'review',
              component: Review,
            },
          ],
        },
      ],
    },
  ],
})

export default router
