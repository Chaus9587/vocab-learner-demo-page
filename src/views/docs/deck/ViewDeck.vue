<script setup>
import CodeCard from "@/components/CodeCard.vue";
</script>

<template>
  <h1
    class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
  >
    Viewing the card deck's status
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 4 in the input section allows user to check the card deck's status:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 4
    
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Your deck: 5 words, 5 due today</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────</span>

  <span class="font-bold">#  Word    Box  Next review  Score  Chinese</span>
  <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───────────────────────────────────────────</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1</span>  apple     1  <span class="font-bold text-[#EBA400] dark:text-[#FFB454]">due now</span>        0/0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2</span>  banana    1  <span class="font-bold text-[#EBA400] dark:text-[#FFB454]">due now</span>        0/0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3</span>  mango     1  <span class="font-bold text-[#EBA400] dark:text-[#FFB454]">due now</span>        0/0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">4</span>  orange    1  <span class="font-bold text-[#EBA400] dark:text-[#FFB454]">due now</span>        0/0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">5</span>  peach     1  <span class="font-bold text-[#EBA400] dark:text-[#FFB454]">due now</span>        0/0

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Saved in: C:\Users\demo\.word_flashcard\deck.json</span></pre>
      </CodeCard>
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: Chinese translation will be displayed in normal uses.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        After a review, some cards will be due earlier than other cards because
        users got them wrong.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Your deck: 5 words, 0 due today</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────</span>

  <span class="font-bold">#  Word    Box  Next review  Score  Chinese</span>
  <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───────────────────────────────────────────</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1</span>  apple     2  2026-11-26     1/1
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2</span>  banana    1  2026-11-25     0/1
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3</span>  mango     2  2026-11-26     1/1
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">4</span>  orange    2  2026-11-26     1/1
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">5</span>  peach     1  2026-11-25     0/1

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Saved in: C:\Users\demo\.word_flashcard\deck.json</span></pre>
      </CodeCard>
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
