<script setup>
import { RouterLink } from 'vue-router'
import Card from './Card.vue'
import CodeCard from './CodeCard.vue'
import DocTable from './DocTable.vue'

const modeColumns = [{ label: 'Review mode' }, { label: 'What you do' }, { label: 'Needs' }]
const modeRows = [
  ['Meaning', 'See the word, recall its meaning, then mark yourself', 'Nothing extra'],
  ['Spelling', 'Read the definitions (word hidden) and a hint, then type the word', 'Nothing extra'],
  ['Listening', 'Hear the word, then type it', 'Speech (ElevenLabs key)'],
  ['Speaking', 'Read the clues, then say the word into the microphone', 'Speech (ElevenLabs key)'],
  ['Sentence', 'Write a sentence with the word and get feedback from the AI tutor', 'LLM settings'],
]

const buttonClass =
  'inline-block w-fit rounded-full px-6 py-3 text-sm transition duration-200 ease-in-out hover:scale-105'
</script>

<template>
  <Card
    title="Explore vocabularies, in a Jupyter Notebook?"
    contentClass="bg-orange-100/40 dark:bg-zinc-800/30"
  >
    <p class="text-sm lg:text-base">This python package features:</p>
    <br />
    <ul class="list-disc space-y-1 pl-4">
      <li>English dictionary with definitions and example sentences</li>
      <li>A flashcard deck that brings each word back after 1, 2, 4, 7 and 14 days</li>
      <li>Text-to-Speech & Speech-to-Text functions</li>
      <li>Vocabulary scanner for PDF, Word, text files and photos of your notes</li>
      <li>Traditional Chinese translations and sentence feedback from an AI tutor</li>
    </ul>
    <br />
    <p class="text-sm lg:text-base">
      This python package aims to provide a new platform for students to learn English, widen their
      linguistic variety and range of vocabularies. Use it as a terminal app, or import its modules
      in your own notebook.
    </p>
  </Card>

  <Card title="Five ways to review a word">
    <p class="text-sm lg:text-base">
      Every word you save becomes a flashcard. Review it in the way that suits you:
    </p>
    <DocTable :columns="modeColumns" :rows="modeRows" />
    <p class="text-sm lg:text-base">
      A right answer moves the card up a box, so you see it less often. A wrong answer sends it
      back to box 1, so it comes back tomorrow.
      <RouterLink to="/docs/card-deck/review">See how reviewing works</RouterLink>.
    </p>
  </Card>

  <Card title="Start in two commands" contentClass="bg-orange-100/40 dark:bg-zinc-800/30">
    <p class="text-sm lg:text-base">Install the package with pip (Python 3.10 or newer):</p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre"
      ><span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">word-flashcard-vocab-learner</span></pre>
    </CodeCard>
    <p class="text-sm lg:text-base">Then start the app:</p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre"
      ><span class="text-[#EBA400] dark:text-[#FFB454]">word-flashcard</span></pre>
    </CodeCard>
    <p class="text-sm lg:text-base">
      No API key is needed to look up, import, review and export words. Keys only add the extras.
    </p>
    <div class="mt-8 flex flex-wrap gap-4">
      <RouterLink
        to="/docs/installation"
        :class="[
          buttonClass,
          'bg-orange-300/80 hover:bg-orange-300 dark:bg-orange-400/80 dark:hover:bg-orange-400',
        ]"
        >Read the docs</RouterLink
      >
      <a
        href="https://github.com/ShingWong08/word-flashcard-vocab-learner"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          buttonClass,
          'border border-[#6666664f] hover:bg-orange-100 dark:border-orange-300/40 dark:hover:bg-zinc-800',
        ]"
        >View on GitHub</a
      >
    </div>
  </Card>
</template>

<style scoped>
p,
li,
a {
  transform: scaleX(95%);
  transform-origin: left;
}

p a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

li {
  padding-left: 4px;
}
</style>
