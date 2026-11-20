<script setup>
import CodeCard from '@/components/CodeCard.vue'
</script>

<template>
  <article>
    <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
      Main application
    </h1>

    <section class="mb-12">
      <p class="text-sm lg:text-base">After a successful installation, type in your terminal:</p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">word-flashcard</span></pre>
      </CodeCard>
      <p class="text-sm lg:text-base">To boot up the application.</p>
      <CodeCard location="Terminal (Output)">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Main menu</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────────</span>

  <span class="font-bold">1.</span> Look up and add words
  <span class="font-bold">2.</span> Review cards
  <span class="font-bold">3.</span> Import words from a file (PDF, Word, scan, text)
  <span class="font-bold">4.</span> View my deck
  <span class="font-bold">5.</span> Progress
  <span class="font-bold">6.</span> Export deck to CSV
  <span class="font-bold">7.</span> Remove words

  <span class="font-bold">c.</span> Clear the screen
  <span class="font-bold">q.</span> Quit

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">Use the keyboard keys to control the applications. (i.e. 1-7, c, q in this menu)</p>
    </section>
  </article>
</template>

<style scoped>
p,
li,
a {
  transform: scaleX(95%);
  transform-origin: left;
}

a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

li {
  padding-left: 4px;
}
</style>
