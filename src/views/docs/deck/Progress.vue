<script setup>
import { RouterLink } from "vue-router";
import CodeCard from "@/components/CodeCard.vue";
import DocTable from "@/components/DocTable.vue";

const boxColumns = [{ label: "Box" }, { label: "Next review after" }];
const boxRows = [
  ["1", "1 day"],
  ["2", "2 days"],
  ["3", "4 days"],
  ["4", "7 days"],
  ["5", "14 days (mastered)"],
];
</script>

<template>
  <h1
    class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
  >
    Checking your progress
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 5 in the input section to see how your learning is going. Suppose
        the deck holds the 5 fruits from the
        <RouterLink to="/docs/card-deck/view-deck">previous section</RouterLink
        >, after one review:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 5

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Your progress</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Words in deck   </span>  5
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Due today       </span>  0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Due this week   </span>  5
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Mastered (box 5)</span>  0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Never reviewed  </span>  0
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Accuracy        </span>  3 of 5 answers correct (60%)

  <span class="font-bold">Cards per box</span>

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    Box 1</span>  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">(every 1 day)  </span>  2  <span class="text-[#4CBF99] dark:text-[#95E6CB]">████████████████████</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    Box 2</span>  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">(every 2 days) </span>  3  <span class="text-[#4CBF99] dark:text-[#95E6CB]">██████████████████████████████</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    Box 3</span>  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">(every 4 days) </span>  0
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    Box 4</span>  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">(every 7 days) </span>  0
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    Box 5</span>  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">(every 14 days)</span>  0

  <span class="font-bold">Words to practise more</span>

    banana  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">wrong 1, right 0</span>
    peach   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">wrong 1, right 0</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">What the numbers mean:</p>
      <br />
      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>
          <span class="font-medium">Due today</span>: cards to review today,
          overdue ones included.
        </li>
        <li>
          <span class="font-medium">Due this week</span>: cards due within the
          next 7 days.
        </li>
        <li>
          <span class="font-medium">Mastered</span>: cards that reached box 5.
        </li>
        <li>
          <span class="font-medium">Never reviewed</span>: cards you have not
          answered yet.
        </li>
        <li>
          <span class="font-medium">Accuracy</span>: right answers out of all
          answers, over the whole deck.
        </li>
        <li>
          <span class="font-medium">Words to practise more</span>: up to 5 words
          you got wrong most often. Try them with
          <RouterLink to="/docs/card-deck/practise-one-word"
            >9. Practise one word</RouterLink
          >.
        </li>
      </ul>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
    >
      How the boxes work
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        The app uses the Leitner system for spaced repetition. Every card is in
        one of five boxes. A right answer moves the card up one box, so you see
        it less often. A wrong answer sends it back to box 1, so it comes back
        tomorrow.
      </p>
      <DocTable :columns="boxColumns" :rows="boxRows" />
      <p class="text-sm lg:text-base">
        A new card starts in box 1 and is due straight away. A word you get
        right four times in a row ends up in box 5 and only comes back every two
        weeks.
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
