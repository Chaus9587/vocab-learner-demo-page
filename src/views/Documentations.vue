<script setup>
import { RouterView, RouterLink } from 'vue-router'

import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useDocsSidebar } from '@/composables/useDocsSidebar'

const route = useRoute()
const { isDark } = useTheme()
const { isDocsSidebarOpen, closeDocsSidebar } = useDocsSidebar()
const showScrollTop = ref(false)

watch(
  () => route.fullPath,
  () => {
    closeDocsSidebar()
  },
)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const sidebarSections = [
  {
    heading: 'Essentials',
    links: [
      { label: 'Installation', to: '/docs/installation' },
      { label: 'API keys and settings', to: '/docs/settings' },
    ],
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
      { label: 'Removing words from the deck', to: '/docs/card-deck/remove-words' },
      { label: 'Editing a card', to: '/docs/card-deck/edit-card' },
      { label: 'Reviewing the card deck', to: '/docs/card-deck/review' },
      {
        label: 'Import word cards to deck by scanning documents',
        to: '/docs/card-deck/import-cards',
      },
      { label: 'Exporting the deck to CSV', to: '/docs/card-deck/export' },
      { label: "View the card deck's status", to: '/docs/card-deck/view-deck' },
      { label: 'Checking your progress', to: '/docs/card-deck/progress' },
      { label: 'Practising one word', to: '/docs/card-deck/practise-one-word' },
    ],
  },
]

// The page after the current one in the sidebar order, for the "Next" link at the bottom.
const allLinks = sidebarSections.flatMap((section) => section.links)

const currentIndex = computed(() => {
  const normalizedPath = route.path.replace(/\/+$/, '')
  return allLinks.findIndex((link) => link.to === normalizedPath)
})

const nextLink = computed(() =>
  currentIndex.value === -1 ? null : allLinks[currentIndex.value + 1] ?? null,
)

const lastLink = computed(() =>
  currentIndex.value === -1 ? null : allLinks[currentIndex.value - 1] ?? null,
)
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

        <!-- Next page -->
        <nav
          v-if="lastLink || nextLink"
          aria-label="Page navigation"
          class="mt-8 flex flex-col gap-4 border-t border-[#6666664f] pt-4 sm:flex-row sm:justify-between"
        >
          <RouterLink
            v-if="lastLink"
            :to="lastLink.to"
            class="group flex flex-col items-start rounded-xl px-5 py-3 transition duration-200 ease-in-out hover:scale-105 hover:bg-orange-100/55 dark:hover:bg-zinc-800"
          >
            <span class="text-xs text-neutral-500 dark:text-neutral-400">Previous</span>
            <span class="text-sm text-zinc-600 group-hover:underline lg:text-base dark:text-zinc-400">
              &larr; {{ lastLink.label }}
            </span>
          </RouterLink>

          <RouterLink
            v-if="nextLink"
            :to="nextLink.to"
            class="group flex flex-col items-end rounded-xl px-5 py-3 transition duration-200 ease-in-out hover:scale-105 hover:bg-orange-100/55 sm:ml-auto dark:hover:bg-zinc-800"
          >
            <span class="text-xs text-neutral-500 dark:text-neutral-400">Next</span>
            <span class="text-right text-sm text-zinc-600 group-hover:underline lg:text-base dark:text-zinc-400">
              {{ nextLink.label }} &rarr;
            </span>
          </RouterLink>
        </nav>
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

    <!-- Scroll to top button -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-3 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-3 scale-90"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        aria-label="Back to top"
        class="fixed right-6 bottom-6 z-40 flex size-11 items-center justify-center rounded-full border border-[#6666664f] bg-orange-100/80 shadow-md backdrop-blur-md transition duration-200 ease-in-out hover:scale-110 hover:cursor-pointer hover:bg-orange-200/80 sm:right-10 sm:bottom-10 dark:bg-zinc-800/85 dark:hover:bg-zinc-700"
      >
        <img src="@/assets/up.svg" alt="" class="size-5 dark:invert" />
      </button>
    </Transition>
  </div>
</template>
