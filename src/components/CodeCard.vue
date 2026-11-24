<script setup>
const props = defineProps({
  location: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: '',
  },
  // copy: {
  //   type: Boolean,
  //   default: false,
  // },
})
</script>

<template>
  <div
    class="my-6 w-fit max-w-full min-w-full rounded-xl border border-[#6666664f] sm:min-w-[min(70vw,100%)] md:min-w-[min(60vw,100%)] lg:min-w-[min(45vw,100%)] drop-shadow-2xl dark:border-zinc-500/40"
  >
    <section class="flex justify-between rounded-t-xl bg-orange-100/55 px-4 py-3 dark:bg-zinc-800">
      <p class="origin-left scale-x-95 text-xs text-black/70 dark:text-white/70">{{ location }}</p>
      <p class="origin-left scale-x-95 text-xs text-black/70 dark:text-white/70">{{ lang }}</p>
    </section>
    <section
      class="overflow-x-auto rounded-b-xl bg-white/50 px-3 py-2 text-[10px] sm:px-5 sm:py-4 sm:text-xs lg:text-sm dark:bg-zinc-800/45"
    >
      <slot></slot>
    </section>
  </div>
</template>
