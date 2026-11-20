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
  <div class="px-8 py-24 sm:px-16 md:px-24 md:py-32 lg:px-28 xl:px-40" :class="[contentClass]">
    <h1 class="text origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
      {{ title }}
    </h1>
    <slot></slot>
  </div>
</template>
