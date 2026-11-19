<script setup>

const props = defineProps({
  location: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    default: ""
  }
})

</script>

<template>
  <div class="w-fit max-w-full min-w-full sm:min-w-[min(70vw,100%)] md:min-w-[min(60vw,100%)] lg:min-w-[min(45vw,100%)] border border-[#6666664f] rounded-xl my-6 dark:border-orange-300/40">
    <section class="py-3 px-4 bg-orange-100/55 dark:bg-zinc-800 rounded-t-xl flex justify-between">
      <p class="scale-x-95 origin-left text-xs text-black/70 dark:text-white/70">{{ location }}</p>
      <p class="scale-x-95 origin-left text-xs text-black/70 dark:text-white/70">{{ lang }}</p>
    </section>
    <section class="py-3 px-4 text-xs lg:text-sm dark:bg-zinc-800/45 rounded-b-xl overflow-x-auto">
      <slot>
        
      </slot>
    </section>
  </div>
</template>