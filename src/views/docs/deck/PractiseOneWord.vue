<script setup>
import { RouterLink } from 'vue-router'
import CodeCard from '@/components/CodeCard.vue'
</script>

<template>
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Practising one word
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 9 in the input section to review a single card right now, whatever its review date.
        Type the word, then pick a review mode:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 9

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Practise which word (Enter = back):</span> dilemma

<span class="font-bold">Review modes:</span>

  1. <span class="font-bold">Meaning</span>     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">See the word, recall what it means</span>
  2. <span class="font-bold">Spelling</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, type the word</span>
  3. <span class="font-bold">Listening</span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hear the word, type it</span>
  4. <span class="font-bold">Speaking</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, say the word</span>
  5. <span class="font-bold">Sentence</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Write a sentence, get AI feedback</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">Choose a mode (Enter = 1, q = back):</span> 2</pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        The card works exactly like in
        <RouterLink to="/docs/card-deck/review">2. Review cards</RouterLink>:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 1</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

<span class="font-bold">Clues:</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> A circumstance in which a choice must be made between two or more alternatives that seem
     equally undesirable.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> Any difficult circumstance or problem.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (logic) A type of syllogism of the form "if A is true then B is true; if C is true then D is
     true; either A or C is true; therefore either B or D is true".

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hint:</span>    d______ (7 letters)

<span class="text-[#EBA400] dark:text-[#FFB454]">Type the word (q = stop):</span> dilemma

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 3 · next review in 4 days</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Session finished</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───────────────────────────────────────</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Reviewed</span>  1 card
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Correct </span>  <span class="text-[#86B300] dark:text-[#AAD94C]">1</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Wrong   </span>  <span class="text-[#E65050] dark:text-[#F07178]">0</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Score   </span>  100%</pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        Unlike "Practise all cards anyway" in the review menu, this answer counts. The card's box
        and next review date change as in a normal review. Here, "dilemma" moved from box 2 to box
        3.
      </p>
      <br />
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: Use it for the words in "Words to practise more" on the
        <RouterLink to="/docs/card-deck/progress">progress screen</RouterLink>.
      </p>
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
