<script setup>
import { RouterLink } from 'vue-router'
import CodeCard from '@/components/CodeCard.vue'
import DocTable from '@/components/DocTable.vue'
import InlineCode from '@/components/InlineCode.vue'

const csvColumns = [{ label: 'Column', code: true }, { label: 'Contents' }]
const csvRows = [
  ['Word', 'The English word'],
  ['Chinese', 'The Chinese translation (empty if the AI tutor is not set up)'],
  ['Definitions', 'Every definition in one cell, numbered and separated by " | "'],
  ['Example', 'The first example sentence, if the word has one'],
  ['Box', 'The Leitner box, 1 to 5'],
  ['Next review', 'The date the card is due again'],
  ['Correct', 'How many times you got it right'],
  ['Wrong', 'How many times you got it wrong'],
  ['Added on', 'The date the word was added'],
]
</script>

<template>
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Exporting the deck to CSV
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 6 in the input section to save your deck as a CSV file. Press Enter to use the default
        name, <InlineCode>vocabulary.csv</InlineCode>, in the folder you started the app from:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 6

<span class="text-[#EBA400] dark:text-[#FFB454]">Save as (Enter = vocabulary.csv, q = back):</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Exported 5 words to C:\Users\demo\vocabulary.csv</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        You can also type a file name or a folder, or drag a folder into the window. A folder gets
        <InlineCode>vocabulary.csv</InlineCode> inside it, and a name without an extension gets
        <InlineCode>.csv</InlineCode> added. The app asks before it replaces a file:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">Save as (Enter = vocabulary.csv, q = back):</span> C:\Users\demo\Desktop
<span class="text-[#86B300] dark:text-[#AAD94C]">Exported 5 words to C:\Users\demo\Desktop\vocabulary.csv</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">Save as (Enter = vocabulary.csv, q = back):</span> C:\Users\demo\Desktop
<span class="text-[#EBA400] dark:text-[#FFB454]">C:\Users\demo\Desktop\vocabulary.csv already exists. Replace it? (y/N)</span> y
<span class="text-[#86B300] dark:text-[#AAD94C]">Exported 5 words to C:\Users\demo\Desktop\vocabulary.csv</span></pre>
      </CodeCard>
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: If the file is open in Excel, Windows won't let the app write to it. Close it first.
      </p>
    </section>

    <h2 class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl">
      What is in the file
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        One row per word, in alphabetical order, under a row of column titles:
      </p>
      <CodeCard location="vocabulary.csv" lang="CSV">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold">Word,Chinese,Definitions,Example,Box,Next review,Correct,Wrong,Added on</span>
apple,<span class="text-[#86B300] dark:text-[#AAD94C]">蘋果</span>,"1. A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.",,2,2026-11-26,1,0,2026-11-23
banana,<span class="text-[#86B300] dark:text-[#AAD94C]">香蕉</span>,"1. An elongated curved tropical fruit, which grows in bunches and has a creamy flesh and a smooth skin.",,1,2026-11-25,0,1,2026-11-23
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">...</span></pre>
      </CodeCard>
      <DocTable :columns="csvColumns" :rows="csvRows" />

      <p class="text-sm lg:text-base">Where you can use it:</p>
      <br />
      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>Excel and Google Sheets. The file is saved so that Excel shows the Chinese correctly.</li>
        <li>Quizlet and Anki, to study the same words on your phone.</li>
        <li>
          This app, through <RouterLink to="/docs/card-deck/import-cards">3. Import words</RouterLink
          >. The Chinese column comes back too, and words already in your deck are skipped, so
          importing the same file twice changes nothing.
        </li>
      </ul>
      <br />
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: Text that starts with <InlineCode>=</InlineCode>, <InlineCode>+</InlineCode>,
        <InlineCode>-</InlineCode> or <InlineCode>@</InlineCode> gets an apostrophe in front, so a
        spreadsheet never runs it as a formula.
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
