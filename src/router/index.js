import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import Documentations from '@/views/Documentations.vue'
import About from '@/views/About.vue'

import Installation from '@/views/docs/Installation.vue'
import MainApplication from '@/views/docs/MainApplication.vue'
import CoreFunctions from '@/views/docs/main/CoreFunctions.vue'

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
      redirect: { name: 'docs-installation' },
      children: [
        {
          path: 'installation',
          name: 'docs-installation',
          component: Installation,
        },
        {
          path: 'main-app',
          children: [
            {
              path: '',
              name: 'main-application',
              component: MainApplication,
            },
            {
              path: 'core-functions',
              name: 'core-functions',
              component: CoreFunctions,
            },
          ],
        },
      ],
    },
  ],
})

export default router
