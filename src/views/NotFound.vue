<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div
    class="flex min-h-[70vh] flex-col items-center justify-center px-8 py-24 text-center"
  >
    <p class="font-light text-neutral-700/60 dark:text-neutral-500">404</p>
    <h1 class="mt-3 mb-4 text-4xl/10 sm:text-6xl/17">Page not found</h1>
    <p
      class="max-w-full font-code text-sm break-all text-[#FA8532] sm:text-base dark:text-[#FF8F40]"
    >
      No definition found for "{{ route.path }}".
    </p>
    <RouterLink
      to="/"
      class="mt-8 w-fit rounded-full bg-orange-300/80 px-6 py-3 text-sm transition duration-200 ease-in-out hover:scale-105 hover:bg-orange-300 dark:bg-orange-400/80 dark:hover:bg-orange-400"
    >
      Back to home
    </RouterLink>
  </div>
</template>
