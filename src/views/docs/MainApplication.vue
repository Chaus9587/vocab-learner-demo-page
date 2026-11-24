<script setup>
import { RouterLink } from "vue-router";
import CodeCard from "@/components/CodeCard.vue";
import InlineCode from "@/components/InlineCode.vue";
</script>

<template>
  <article>
    <h1
      class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
    >
      Main application
    </h1>

    <section class="mb-12">
      <p class="text-sm lg:text-base">
        After a successful installation, type in your terminal:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">word-flashcard</span></pre>
      </CodeCard>
      <p class="text-sm lg:text-base">To boot up the application.</p>
      <CodeCard location="Terminal (Output)">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Welcome to the Word Flashcard Vocab Learner!</span>
This package helps you learn English vocabulary more easily!

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Your deck has 3 words, 3 due for review today.</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Main menu</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────────</span>

  <span class="font-bold">1.</span> Look up and add words
  <span class="font-bold">2.</span> Review cards<span class="text-[#FA8532] dark:text-[#FF8F40]">  (3 due)</span>
  <span class="font-bold">3.</span> Import words from a file (PDF, Word, scan, text)
  <span class="font-bold">4.</span> View my deck
  <span class="font-bold">5.</span> Progress
  <span class="font-bold">6.</span> Export deck to CSV
  <span class="font-bold">7.</span> Remove words
  <span class="font-bold">8.</span> Edit a card
  <span class="font-bold">9.</span> Practise one word

  <span class="font-bold">c.</span> Clear the screen
  <span class="font-bold">q.</span> Quit

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        Use the keyboard keys to control the application. (i.e. 1-9, c, q in
        this menu)
      </p>
      <br />
      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>
          <InlineCode>2. Review cards</InlineCode> shows how many cards are due
          today, when there are any.
        </li>
        <li>
          <InlineCode>c</InlineCode>, <InlineCode>clear</InlineCode> or
          <InlineCode>cls</InlineCode> clears the screen.
        </li>
        <li>
          <InlineCode>q</InlineCode> (or <InlineCode>Ctrl+C</InlineCode>) quits
          the app. Your answers are saved after every card, so you never lose a
          session.
        </li>
      </ul>
      <br />
      <p class="text-sm lg:text-base">
        Next:
        <RouterLink to="/docs/core-functions"
          >see what each option does</RouterLink
        >. To turn on translations and the speech modes, set up your
        <RouterLink to="/docs/settings">API keys</RouterLink>.
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
