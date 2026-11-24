<script setup>
import CodeCard from '@/components/CodeCard.vue'
import DocTable from '@/components/DocTable.vue'
import InlineCode from '@/components/InlineCode.vue'

const commandColumns = [{ label: 'Type', code: true }, { label: 'Removes' }]
const commandRows = [
  ['banana, accept', 'Those words (separate them with commas)'],
  ['1,3,5-8', 'Those numbers from the list'],
  ['amb*', 'Words that start with "amb" (* = any letters, ? = one letter)'],
  ['box 1', 'Every card in box 1 (box 5 or mastered = the words you already know well)'],
  ['all', 'Every word in your deck'],
  ['banana, 3, 5-8', 'You can mix them'],
]
</script>

<template>
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Removing words from the deck
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 7 in the input section. The app lists your words in numbered columns (the same numbers
        as in <InlineCode>4. View my deck</InlineCode>) and shows what you can type:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 7

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Remove words</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───────────────────────────────────────────</span>

  1. apple    2. banana   3. mango    4. orange   5. peach

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  5 words  ·  box 1: 2,  box 2: 3</span>

<span class="font-bold">  What to remove:</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">banana, accept</span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">words (separate them with commas)</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">1,3,5-8       </span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">numbers from the list</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">amb*          </span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">words that start with "amb" (* = any letters)</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">box 1         </span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">every card in box 1 (box 5 = mastered words)</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">all           </span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">every word in your deck</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">u             </span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">undo the last removal</span>
    <span class="text-[#EBA400] dark:text-[#FFB454]">l             </span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">show the list again</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  Press Enter to go back.</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Remove:</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">What you can type:</p>
      <DocTable :columns="commandColumns" :rows="commandRows" />
    </section>

    <h2 class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl">
      Removing and undoing
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        The app shows the words it is about to remove and waits for <InlineCode>y</InlineCode>.
        After a removal the numbers change, so the new list is shown straight away:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Remove:</span> banana, 5

  These 2 words will be removed:
    <span class="text-[#A37ACC] dark:text-[#D2A6FF]">banana, peach</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">Remove them? (y/N)</span> y
<span class="text-[#86B300] dark:text-[#AAD94C]">Removed 2 words.</span><span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  Type u to undo.</span>

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  The numbers have changed:</span>

  1. apple    2. mango    3. orange

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  3 words  ·  box 2: 3</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        Changed your mind? Type <InlineCode>u</InlineCode> to put the cards back, with their box,
        review date and score. You can undo more than once.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Remove:</span> u
<span class="text-[#86B300] dark:text-[#AAD94C]">Put back 2 words:</span>
    <span class="text-[#A37ACC] dark:text-[#D2A6FF]">banana, peach</span>

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  The numbers have changed:</span>

  1. apple    2. banana   3. mango    4. orange   5. peach

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  5 words  ·  box 1: 2,  box 2: 3</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        If any part of what you typed is wrong, nothing is removed, so a typo never deletes the
        wrong word:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Remove:</span> apple, kiwi
<span class="text-[#FA8532] dark:text-[#FF8F40]">  "kiwi" is not in your deck.</span>
<span class="text-[#FA8532] dark:text-[#FF8F40]">Nothing was removed. Please check and try again (h = help).</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        Removing every word at once needs you to type <InlineCode>delete all</InlineCode>, so it
        can't happen by accident:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Remove:</span> all

  These 5 words will be removed:
    <span class="text-[#A37ACC] dark:text-[#D2A6FF]">apple, banana, mango, orange, peach</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">Type "delete all" to remove every word in your deck:</span></pre>
      </CodeCard>
      <br />

      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>
          <InlineCode>l</InlineCode> shows the list again and <InlineCode>h</InlineCode> shows the
          help.
        </li>
        <li>Press Enter on an empty line to go back to the main menu.</li>
        <li>
          Before each removal, the deck is copied to <InlineCode>deck.backup.json</InlineCode>, next
          to the deck file.
        </li>
      </ul>
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
