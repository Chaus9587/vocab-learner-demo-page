<script setup>

const props = defineProps({
  lang: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <div class="sm:w-[70vw] md:w-[60vw] lg:w-[40vw] min-w-fit border border-[#6666664f] rounded-xl my-6 dark:border-orange-300/40">
    <section class="py-3 px-4 bg-amber-100/55 dark:bg-zinc-800 rounded-t-xl">
      <p class="scale-x-95 origin-left text-xs text-black/70 dark:text-white/70">{{ lang }}</p>
    </section>
    <section class="py-3 px-4 text-xs lg:text-sm">
      <slot>
        
      </slot>
    </section>
  </div>
</template>