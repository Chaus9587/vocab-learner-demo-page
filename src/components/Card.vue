<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="px-8 py-24 md:py-32 sm:px-16 md:px-24 lg:px-28" :class="[contentClass]">
    <h1 class="pb-12 lg:text-5xl/15 text-[2.75rem]/14 text font-semibold scale-x-95 origin-left">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
