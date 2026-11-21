<script setup>
import { RouterView, RouterLink } from 'vue-router'

import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useDocsSidebar } from '@/composables/useDocsSidebar'

const route = useRoute()
const { isDark } = useTheme()
const { isDocsSidebarOpen, closeDocsSidebar } = useDocsSidebar()

watch(
  () => route.fullPath,
  () => {
    closeDocsSidebar()
  },
)

const sidebarSections = [
  {
    heading: 'Essentials',
    links: [{ label: 'Installation', to: '/docs/installation' }],
  },
  {
    heading: 'Main Application',
    links: [
      { label: 'Getting started', to: '/docs/main-app' },
      { label: 'Core functions', to: '/docs/core-functions' },
    ],
  },
  {
    heading: 'Card Deck',
    links: [
      { label: 'Lookup and add words to the deck', to: '/docs/card-deck/lookup-and-add' },
      { label: 'Reviewing the card deck', to: '/docs/card-deck/review' },
    ]
  }
]
</script>

<template>
  <div class="wrapper flex min-h-screen">
    <!-- Sidebar -->
    <aside
      class="sticky top-18 hidden h-[calc(100vh-4.5rem)] w-60 shrink-0 overflow-y-auto border-r border-[#6666664f] px-6 py-8 lg:block xl:w-68"
    >
      <nav aria-label="Documentation navigation" class="space-y-8">
        <div v-for="section in sidebarSections" :key="section.heading">
          <p class="mb-2.5 px-3 text-xs font-semibold">
            {{ section.heading }}
          </p>
          <ul class="space-y-1">
            <li v-for="link in section.links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="block rounded-lg px-3 py-1 text-xs text-neutral-700 transition duration-300 ease-in-out hover:scale-x-105 xl:text-sm dark:text-neutral-300"
                exact-active-class="font-medium text-orange-700 dark:text-orange-300"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>

    <!-- Contents -->
    <main class="min-w-0 flex-1 px-8 py-12 sm:px-15 lg:px-16 xl:px-24">
      <div class="max-w-4xl">
        <RouterView />
      </div>
    </main>

    <!-- Mobile sidebar drawer  -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isDocsSidebarOpen"
          @click="closeDocsSidebar()"
          class="fixed inset-0 z-60 bg-black/50 backdrop-blur-[1px] lg:hidden"
          aria-hidden="true"
        />
      </Transition>


      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="isDocsSidebarOpen"
          class="fixed inset-y-0 left-0 z-70 w-68 max-w-[80vw] overflow-y-auto border-r border-[#6666664f] bg-orange-50 px-6 py-6 shadow-xl lg:hidden dark:bg-zinc-900"
        >

          <div class="mb-6 flex items-center justify-between">
            <span class="text-sm font-semibold">Documentation</span>
            <button
              @click="closeDocsSidebar()"
              aria-label="Close documentation menu"
              class="flex size-8 items-center justify-center rounded-lg bg-orange-100/70 p-1.5 transition duration-200 ease-in-out hover:scale-110 hover:cursor-pointer hover:bg-orange-200/70 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <img v-if="isDark" src="@/assets/cross_dark.svg" alt="" class="size-5" />
              <img v-else src="@/assets/cross_light.svg" alt="" class="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile documentation navigation" class="space-y-8">
            <div v-for="section in sidebarSections" :key="section.heading">
              <p class="mb-2.5 px-3 text-xs font-semibold">
                {{ section.heading }}
              </p>
              <ul class="space-y-1">
                <li v-for="link in section.links" :key="link.to">
                  <RouterLink
                    :to="link.to"
                    @click="closeDocsSidebar()"
                    class="block rounded-lg px-3 py-1 text-xs text-neutral-700 transition duration-300 ease-in-out hover:scale-x-105 xl:text-sm dark:text-neutral-300"
                    exact-active-class="font-medium text-orange-700 dark:text-orange-300"
                  >
                    {{ link.label }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </Transition>
    </Teleport>
  </div>
</template>
