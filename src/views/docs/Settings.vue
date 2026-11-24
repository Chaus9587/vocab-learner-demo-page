<script setup>
import { RouterLink } from "vue-router";
import CodeCard from "@/components/CodeCard.vue";
import DocTable from "@/components/DocTable.vue";
import InlineCode from "@/components/InlineCode.vue";

const featureColumns = [{ label: "Feature" }, { label: "What it needs" }];
const featureRows = [
  ["Look up words and add them to the deck", "No key"],
  [
    "Import words from text, CSV, PDF, Word and images",
    "No key (PDF and Word need the documents extra, images need the OCR extra)",
  ],
  ["Review in Meaning and Spelling modes", "No key"],
  ["Progress, export to CSV, remove and edit cards", "No key"],
  ["Chinese translations", "The LLM_* settings"],
  ["Sentence mode (AI feedback on your sentence)", "The LLM_* settings"],
  ["Let the AI tutor pick words from a passage", "The LLM_* settings"],
  [
    "Pronunciation, Listening and Speaking modes",
    "ELEVENLABS_API_KEY and the speech extra",
  ],
];

const variableColumns = [
  { label: "Variable", code: true },
  { label: "Used for" },
];
const variableRows = [
  [
    "LLM_API_KEY",
    "Chinese translations, sentence feedback and picking words from a passage (with the other LLM_* settings below)",
  ],
  ["ELEVENLABS_API_KEY", "Pronunciation, Listening and Speaking modes"],
  [
    "WORD_FLASHCARD_DECK",
    "Optional. Where the deck is saved. Default: ~/.word_flashcard/deck.json",
  ],
  [
    "TESSERACT_CMD",
    "Optional. Full path of tesseract.exe if Tesseract OCR is not on your PATH",
  ],
];

const llmColumns = [
  { label: "Variable", code: true },
  { label: "Example", code: true },
  { label: "Needed by the AI tutor" },
];
const llmRows = [
  ["LLM_API_KEY", "nvapi-...", "Yes"],
  ["LLM_BASE_URL", "https://integrate.api.nvidia.com/v1", "Yes"],
  ["LLM_MODEL", "minimaxai/minimax-m3.1-flash", "Yes"],
  ["LLM_TOP_P", "1.0", "Yes"],
  ["LLM_MAX_TOKENS", "2000", "Yes"],
  ["LLM_SYSTEM_MESSAGE", "You are an AI assistant.", "No"],
  ["LLM_TEMPERATURE", "1.0", "No"],
  ["LLM_REASONING_EFFORT", "low", "No"],
  ["LLM_TIMEOUT", "60", "No (seconds)"],
];

const fileColumns = [{ label: "Path", code: true }, { label: "Contents" }];
const fileRows = [
  ["~/.word_flashcard/deck.json", "Your flashcards and progress"],
  [
    "~/.word_flashcard/deck.backup.json",
    "The deck as it was just before the last removal",
  ],
  [
    "translation_cache/zh-TW.json",
    "Saved translations, so each word is translated only once",
  ],
  [
    "audio_cache/words/",
    "Saved pronunciations, so each word is generated only once",
  ],
  ["recording/", "Microphone recordings, deleted after transcription"],
];
</script>

<template>
  <h1
    class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
  >
    API keys and settings
  </h1>

  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        You don't need any API key to start. Definitions and example sentences
        come from the free dictionary API, so you can look up, import, review
        and export words straight away. The keys only turn on the extra
        features:
      </p>
      <DocTable :columns="featureColumns" :rows="featureRows" />
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
    >
      Setting up the .env file
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        The keys live in a file called <InlineCode>.env</InlineCode>. Copy the
        example file from the project folder:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">copy</span> <span class="text-[#86B300] dark:text-[#AAD94C]">.env.example .env</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># Windows</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">cp</span> <span class="text-[#86B300] dark:text-[#AAD94C]">.env.example .env</span>            <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># macOS / Linux</span></pre>
      </CodeCard>

      <p class="text-sm lg:text-base">Then fill in the keys you have:</p>
      <CodeCard location=".env">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># AI tutor: Chinese translations, sentence feedback, picking words</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_API_KEY</span>=<span class="text-[#86B300] dark:text-[#AAD94C]">YOUR_LLM_API_KEY</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_BASE_URL</span>=<span class="text-[#86B300] dark:text-[#AAD94C]">https://integrate.api.nvidia.com/v1</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_MODEL</span>=<span class="text-[#86B300] dark:text-[#AAD94C]">minimaxai/minimax-m3.1-flash</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_SYSTEM_MESSAGE</span>=<span class="text-[#86B300] dark:text-[#AAD94C]">You are an AI assistant.</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_TEMPERATURE</span>=<span class="text-[#A37ACC] dark:text-[#D2A6FF]">1.0</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_TOP_P</span>=<span class="text-[#A37ACC] dark:text-[#D2A6FF]">1.0</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_MAX_TOKENS</span>=<span class="text-[#A37ACC] dark:text-[#D2A6FF]">2000</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_REASONING_EFFORT</span>=<span class="text-[#86B300] dark:text-[#AAD94C]">low</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">LLM_TIMEOUT</span>=<span class="text-[#A37ACC] dark:text-[#D2A6FF]">60</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># Pronunciation, Listening and Speaking modes</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">ELEVENLABS_API_KEY</span>=<span class="text-[#86B300] dark:text-[#AAD94C]">YOUR_ELEVENLABS_API_KEY</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># Optional</span>
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># WORD_FLASHCARD_DECK=C:\path\to\deck.json</span>
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># TESSERACT_CMD=C:\Program Files\Tesseract-OCR\tesseract.exe</span></pre>
      </CodeCard>
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: Keep <InlineCode>.env</InlineCode> in the folder you run
        <InlineCode>word-flashcard</InlineCode> from. It holds your private
        keys, so never commit it or share it.
      </p>
      <br />

      <p class="text-sm lg:text-base">What each variable does:</p>
      <DocTable :columns="variableColumns" :rows="variableRows" />
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
    >
      The AI tutor (LLM settings)
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Any OpenAI-compatible API works. The LLM settings have no default values
        in the code, so each one has to be in <InlineCode>.env</InlineCode>. The
        AI tutor needs five of them:
      </p>
      <DocTable :columns="llmColumns" :rows="llmRows" />

      <p class="text-sm lg:text-base">
        Until all five are set, the Sentence mode and the translations stay off.
        The review menu tells you what is missing:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold">Review modes:</span>

  1. <span class="font-bold">Meaning</span>     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">See the word, recall what it means</span>
  2. <span class="font-bold">Spelling</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, type the word</span>

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">  More modes:</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    - Listening, Speaking: set ELEVENLABS_API_KEY and run  pip install ".[speech]"</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">    - Sentence: set LLM_API_KEY, LLM_BASE_URL, LLM_MODEL, LLM_TOP_P, LLM_MAX_TOKENS in .env</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">Choose a mode (Enter = 1, q = back):</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">If a call to the AI tutor fails:</p>
      <br />
      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>
          <InlineCode>410 Gone</InlineCode>: the provider retired the model.
          Pick a current one from your provider's model list and update
          <InlineCode>LLM_MODEL</InlineCode>.
        </li>
        <li>
          <InlineCode>401 Unauthorized</InlineCode>: the key is not a key for
          that provider (for example, the
          <InlineCode>YOUR_LLM_API_KEY</InlineCode> placeholder is still there).
        </li>
        <li>
          <InlineCode>403 Forbidden</InlineCode>: the key is for the right
          provider but is wrong.
        </li>
      </ul>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
    >
      Files the app creates
    </h2>
    <section class="mb-12">
      <DocTable :columns="fileColumns" :rows="fileRows" />
      <p class="text-sm lg:text-base">
        The cache and recording folders are created in whatever folder you run
        <InlineCode>word-flashcard</InlineCode> from. You can edit
        <InlineCode>deck.json</InlineCode> by hand: a missing or wrong value is
        repaired when the deck loads, so one bad entry won't stop the app.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        Next:
        <RouterLink to="/docs/main-app">start the main application</RouterLink>.
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
