<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleDark } = useTheme()

const burgerMenuState = ref(false)

const isAtTop = ref(true)

const navData = {
  links: [
    { name: 'Path', to: '/path' },
    { name: 'Destination', to: '/dest' },
    { name: 'Route', to: '/route' },
  ],
  class:
    'transition duration-200 ease-in-out hover:scale-110 hover:text-black hover:text-shadow-sm dark:hover:text-white',
}

const handleScroll = () => {
  isAtTop.value = window.scrollY <= 5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="300ms sticky top-0 z-50 border-b-transparent backdrop-blur-xl transition-colors ease-in-out"
    :class="{ notAtTop: !isAtTop }"
  >
    <nav class="flex items-center justify-between px-12 py-6 sm:px-16 md:px-24 lg:px-36 xl:px-56">
      <RouterLink
        to="/"
        class="text-[1.125rem] font-semibold transition duration-200 ease-in-out hover:scale-110"
        >Home</RouterLink
      >
      <div
        class="mx-4 hidden font-normal text-neutral-700 sm:flex sm:gap-10 md:gap-12 lg:gap-15 dark:text-neutral-300"
      >
        <RouterLink v-for="link in navData?.links" :to="link.to" :class="navData?.class"
          >{{ link.name }}
        </RouterLink>
      </div>
      <div class="flex items-center gap-6">
        <button
          @click="toggleDark()"
          class="px-1.25 py-1.25 transition duration-200 ease-in-out hover:scale-120 hover:cursor-pointer"
        >
          <img v-if="isDark" src="@/assets/dark_mode.svg" alt="" class="size-6" />

          <img v-else src="@/assets/light_mode.svg" alt="" class="size-6" />
        </button>
        <button
          class="visible size-7 transition duration-200 ease-in-out hover:scale-120 hover:cursor-pointer sm:hidden"
          @click="burgerMenuState = !burgerMenuState"
        >
          <span v-if="!burgerMenuState">
            <img v-if="isDark" src="@/assets/burger_dark.svg" alt="" />
            <img v-else src="@/assets/burger_light.svg" alt="" />
          </span>
          <span v-else>
            <img v-if="isDark" src="@/assets/cross_dark.svg" alt="" />
            <img v-else src="@/assets/cross_light.svg" alt="" />
          </span>
        </button>
      </div>
    </nav>
    <section v-if="burgerMenuState" class="flex flex-col items-end gap-3 px-15 pb-6 sm:hidden">
      <RouterLink v-for="link in navData?.links" :to="link.to" :class="navData?.class"
        >{{ link.name }}
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.notAtTop {
  border-bottom: 1px solid #6666664f;
}
</style>
