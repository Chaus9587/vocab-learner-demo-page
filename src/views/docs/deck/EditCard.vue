<script setup>
import CodeCard from "@/components/CodeCard.vue";
import InlineCode from "@/components/InlineCode.vue";
</script>

<template>
  <h1
    class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
  >
    Editing a card
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 8 in the input section, then the word you want to change. The app
        shows the card as it is now:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 8

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word to edit (Enter = back):</span> status quo

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"status quo"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  Chinese: </span><span class="text-[#86B300] dark:text-[#AAD94C]">現狀</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">New word (Enter = keep):</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        Then it asks three questions, one after another. Press Enter to keep
        that part as it is, or type <InlineCode>-</InlineCode> to clear it:
      </p>
      <br />
      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>
          <span class="font-medium">New word</span>: fix the spelling, unless
          the new spelling is already in your deck.
        </li>
        <li>
          <span class="font-medium">New Chinese</span>: change the Chinese
          translation.
        </li>
        <li>
          <span class="font-medium">New meaning</span>: replace all the
          definitions with one line of your own. The old example sentences are
          removed with them.
        </li>
      </ul>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">New word (Enter = keep):</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">New Chinese (Enter = keep, - = clear):</span> 維持現狀
<span class="text-[#EBA400] dark:text-[#FFB454]">New meaning, one line (Enter = keep, - = clear):</span> The existing state of affairs.
<span class="text-[#86B300] dark:text-[#AAD94C]">Updated "status quo".</span></pre>
      </CodeCard>
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: The card keeps its box, review date and score. Only the text
        changes.
      </p>
      <br />

      <p class="text-sm lg:text-base">
        The app stops without changing anything when the word is not in your
        deck, or when the new spelling belongs to another card:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word to edit (Enter = back):</span> kiwi
<span class="text-[#FA8532] dark:text-[#FF8F40]">"kiwi" is not in your deck.</span>

...

<span class="text-[#EBA400] dark:text-[#FFB454]">New word (Enter = keep):</span> dilemma
<span class="text-[#FA8532] dark:text-[#FF8F40]">"dilemma" is already in your deck, so nothing was changed.</span></pre>
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
