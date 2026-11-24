<script setup>
import { RouterLink } from "vue-router";
import CodeCard from "@/components/CodeCard.vue";
import InlineCode from "@/components/InlineCode.vue";

const functions = [
  {
    key: "1",
    label: "Look up and add words",
    to: "/docs/card-deck/lookup-and-add",
    summary:
      "Type a word to see its definitions, hear it, and add it to your deck.",
  },
  {
    key: "2",
    label: "Review cards",
    to: "/docs/card-deck/review",
    summary:
      "Go through the cards due today in one of five review modes, 20 at a time.",
  },
  {
    key: "3",
    label: "Import words from a file",
    to: "/docs/card-deck/import-cards",
    summary:
      "Pick out the vocabulary of a text, CSV, PDF, Word file or photo and add it at once.",
  },
  {
    key: "4",
    label: "View my deck",
    to: "/docs/card-deck/view-deck",
    summary:
      "Every word with its box, next review date, score and translation.",
  },
  {
    key: "5",
    label: "Progress",
    to: "/docs/card-deck/progress",
    summary:
      "Words due today and this week, your accuracy, and the words you miss most.",
  },
  {
    key: "6",
    label: "Export deck to CSV",
    to: "/docs/card-deck/export",
    summary:
      "Open your deck in Excel, or move it to Quizlet, Anki or Google Sheets.",
  },
  {
    key: "7",
    label: "Remove words",
    to: "/docs/card-deck/remove-words",
    summary: "Remove words by name, number, pattern or box, with undo.",
  },
  {
    key: "8",
    label: "Edit a card",
    to: "/docs/card-deck/edit-card",
    summary:
      "Fix the spelling, the Chinese translation or the meaning of a card.",
  },
  {
    key: "9",
    label: "Practise one word",
    to: "/docs/card-deck/practise-one-word",
    summary: "Review a single card now, whatever its review date.",
  },
];
</script>

<template>
  <h1
    class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
  >
    Core functions
  </h1>

  <article>
    <section class="mb-16">
      <p class="text-sm lg:text-base">The main menu of the app:</p>
      <CodeCard location="Terminal (Output)">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Main menu</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────────</span>

  <span class="font-bold">1.</span> <RouterLink to="/docs/card-deck/lookup-and-add">Look up and add words</RouterLink>
  <span class="font-bold">2.</span> <RouterLink to="/docs/card-deck/review">Review cards</RouterLink>
  <span class="font-bold">3.</span> <RouterLink to="/docs/card-deck/import-cards">Import words from a file (PDF, Word, scan, text)</RouterLink>
  <span class="font-bold">4.</span> <RouterLink to="/docs/card-deck/view-deck">View my deck</RouterLink>
  <span class="font-bold">5.</span> <RouterLink to="/docs/card-deck/progress">Progress</RouterLink>
  <span class="font-bold">6.</span> <RouterLink to="/docs/card-deck/export">Export deck to CSV</RouterLink>
  <span class="font-bold">7.</span> <RouterLink to="/docs/card-deck/remove-words">Remove words</RouterLink>
  <span class="font-bold">8.</span> <RouterLink to="/docs/card-deck/edit-card">Edit a card</RouterLink>
  <span class="font-bold">9.</span> <RouterLink to="/docs/card-deck/practise-one-word">Practise one word</RouterLink>

  <span class="font-bold">c.</span> Clear the screen
  <span class="font-bold">q.</span> Quit

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span></pre>
      </CodeCard>
      <p class="text-sm lg:text-base">
        Click on each function to delve deeper into it.
      </p>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
    >
      Card Deck for Vocabularies
    </h2>
    <section class="mb-16">
      <p class="w-[105.26%] text-sm lg:text-base">
        <InlineCode class="mr-5 inline-block origin-left scale-x-[1.0526]"
          >word-flashcard-vocab-learner</InlineCode
        >
        features a card deck that allow users to save, load, and revise searched
        words. It aims to help users to memorize vocabularies quickly, and
        develop a wider lexical choice.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        Every card sits in one of five boxes. A right answer moves it up a box
        and a wrong answer sends it back to box 1, so the words you find hard
        come back more often.
      </p>
      <br />

      <ul class="space-y-3">
        <li
          v-for="item in functions"
          :key="item.key"
          class="text-sm lg:text-base"
        >
          <span class="font-semibold">{{ item.key }}.</span>
          <RouterLink :to="item.to" class="ml-1.5 font-medium">{{
            item.label
          }}</RouterLink>
          <span class="block pl-5 text-zinc-600 dark:text-zinc-400">{{
            item.summary
          }}</span>
        </li>
      </ul>
      <br />
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: Your deck is saved in
        <InlineCode>~/.word_flashcard/deck.json</InlineCode> after every answer.
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
