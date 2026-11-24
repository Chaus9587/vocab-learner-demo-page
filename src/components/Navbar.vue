<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

import { useTheme } from "@/composables/useTheme";
import { useDocsSidebar } from "@/composables/useDocsSidebar";

const route = useRoute();
const { isDark, toggleDark } = useTheme();

const { isDocsSidebarOpen, toggleDocsSidebar } = useDocsSidebar();
const isDocsPage = computed(() => route.path.startsWith("/docs"));

const burgerMenuState = ref(false);
const isAtTop = ref(true);

const handleScroll = () => {
  isAtTop.value = window.scrollY <= 5;
};

const showBorder = computed(
  () => !isAtTop.value || route.path.startsWith("/docs"),
);

// Close the mobile menu after moving to another page.
watch(
  () => route.fullPath,
  () => {
    burgerMenuState.value = false;
  },
);

const navData = {
  links: [
    { name: "Docs", to: "/docs" },
    { name: "About us", to: "/about" },
  ],
  class:
    "transition duration-200 ease-in-out text-sm hover:scale-110 hover:text-black hover:text-shadow-sm dark:hover:text-white",
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ease-in-out"
    :class="showBorder ? 'border-b-[#6666664f]' : 'border-b-transparent'"
  >
    <nav
      class="flex h-17.75 items-center justify-between px-8 sm:px-16 md:px-24 lg:px-30 xl:px-42"
    >
      <div class="flex items-center gap-4">
        <button
          v-if="isDocsPage"
          @click="toggleDocsSidebar()"
          aria-label="Toggle documentation menu"
          class="flex size-8 items-center justify-center rounded-lg bg-orange-100/70 p-1.5 transition duration-200 ease-in-out hover:scale-110 hover:cursor-pointer hover:bg-orange-200/70 lg:hidden dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          <span v-if="!isDocsSidebarOpen">
            <img
              v-if="isDark"
              src="@/assets/burger_dark.svg"
              alt=""
              class="size-5"
            />
            <img v-else src="@/assets/burger_light.svg" alt="" class="size-5" />
          </span>
          <span v-else>
            <img
              v-if="isDark"
              src="@/assets/cross_dark.svg"
              alt=""
              class="size-5"
            />
            <img v-else src="@/assets/cross_light.svg" alt="" class="size-5" />
          </span>
        </button>

        <RouterLink
          to="/"
          class="text-base font-semibold transition duration-200 ease-in-out hover:scale-110"
          >Home</RouterLink
        >
      </div>

      <div class="flex items-center gap-10">
        <!-- Navbar links -->
        <div
          class="mx-4 hidden gap-8 font-normal text-neutral-700 sm:flex md:gap-10 lg:gap-12 dark:text-neutral-300"
        >
          <RouterLink
            v-for="link in navData?.links"
            :key="link.to"
            :to="link.to"
            :class="navData?.class"
            active-class="text-orange-700 dark:text-orange-300"
            >{{ link.name }}
          </RouterLink>
        </div>

        <!-- Toggle buttons -->
        <div class="flex items-center gap-6">
          <button
            @click="toggleDark()"
            :aria-label="
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            "
            class="px-1.25 py-1.25 transition duration-200 ease-in-out hover:scale-120 hover:cursor-pointer"
          >
            <img
              v-if="isDark"
              src="@/assets/dark_mode.svg"
              alt=""
              class="size-5"
            />

            <img v-else src="@/assets/light_mode.svg" alt="" class="size-5" />
          </button>

          <button
            class="visible size-5 transition duration-200 ease-in-out hover:scale-120 hover:cursor-pointer sm:hidden"
            @click="burgerMenuState = !burgerMenuState"
            aria-label="Toggle menu"
            :aria-expanded="burgerMenuState"
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
      </div>
    </nav>
    <section
      v-if="burgerMenuState"
      class="flex flex-col items-end gap-3 px-15 pb-6 sm:hidden"
    >
      <RouterLink
        v-for="link in navData?.links"
        :key="link.to"
        :to="link.to"
        :class="navData?.class"
        active-class="text-orange-700 dark:text-orange-300"
        >{{ link.name }}
      </RouterLink>
    </section>
  </div>
</template>

<style scoped></style>
