<script setup>
import CodeCard from '@/components/CodeCard.vue'
import InlineCode from '@/components/InlineCode.vue';
</script>

<template>
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Core functions
  </h1>

  <article>
    <section class="mb-16">
      <p class="text-sm lg:text-base">The main menu of the app:</p>
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
      <p class="text-sm lg:text-base">Click on each functions to delve deeper about them.</p>
    </section>

    <h2 class="origin-left scale-x-95 pb-6 text-[2rem]/10 font-medium lg:text-4xl scroll-mt-28">Card Deck for Vocabularies</h2>
    <section class="mb-16">
      <p class="w-[105.26%] text-sm lg:text-base">
        <InlineCode class="inline-block scale-x-[1.0526] origin-left mr-5">word-flashcard-vocab-learner</InlineCode>
        features a card deck that allow users to save, load, and revise searched words. It aims to help users to memorize vocabularies quickly, and develop a wider lexical choice.
      </p>
      <br><br>
      
    
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
