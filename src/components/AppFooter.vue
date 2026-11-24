<script setup>
import { RouterLink } from 'vue-router'

const REPO_URL = 'https://github.com/ShingWong08/word-flashcard-vocab-learner'
const linkClass =
  'transition duration-200 ease-in-out hover:scale-110 hover:text-black dark:hover:text-white'
</script>

<template>
  <footer
    class="border-t border-[#6666664f] px-8 py-10 text-sm text-neutral-600 sm:px-16 md:px-24 lg:px-30 xl:px-42 dark:text-neutral-400"
  >
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p class="origin-left scale-x-95">
        word-flashcard-vocab-learner · CityU CS1302A group project
      </p>
      <nav aria-label="Footer" class="flex gap-6">
        <RouterLink to="/docs" :class="linkClass">Docs</RouterLink>
        <RouterLink to="/about" :class="linkClass">About us</RouterLink>
        <a :href="REPO_URL" target="_blank" rel="noopener noreferrer" :class="linkClass">GitHub</a>
      </nav>
    </div>
    <p class="mt-3 origin-left scale-x-95 text-xs text-neutral-500">Released under the MIT License.</p>
  </footer>
</template>
