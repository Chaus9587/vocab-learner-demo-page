import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import Path from '@/views/Path.vue'
import Destination from '@/views/Destination.vue'
import Route from '@/views/Route.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/path',
      name: 'path',
      component: Path,
    },
    {
      path: '/dest',
      name: 'destination',
      component: Destination,
    },
    {
      path: '/route',
      name: 'route',
      component: Route,
    },
  ],
})

export default router
