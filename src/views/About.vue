<script setup>
import { RouterLink } from "vue-router";
import Card from "@/components/Card.vue";
import AppFooter from "@/components/AppFooter.vue";
import DocTable from "@/components/DocTable.vue";

const REPO_URL = "https://github.com/ShingWong08/word-flashcard-vocab-learner";

// The authors listed in the python package (pyproject.toml).
const team = ["Shing8981", "Chaus9587", "KristyChong", "AndyTLY"];

const tools = [
  {
    name: "Free Dictionary API",
    use: "definitions and example sentences, with no key needed",
    href: "https://freedictionaryapi.com/",
  },
  {
    name: "ElevenLabs",
    use: "text-to-speech and speech-to-text for the Listening and Speaking modes",
    href: "https://elevenlabs.io/",
  },
  {
    name: "Any OpenAI-compatible LLM",
    use: "the AI tutor: Chinese translations, sentence feedback and picking words",
  },
  {
    name: "Tesseract OCR",
    use: "reading words from scans and photos",
    href: "https://github.com/tesseract-ocr/tesseract",
  },
  {
    name: "Vue 3, Vite and Tailwind CSS",
    use: "this website",
  },
];

const contributionColumns = [{ label: "Person" }, { label: "Contributions" }];

const contributionRows = [
  [
    "ShingWong08",
    "Set up the project, packaging and the PyPI releases. Wrote speech-to-text, the dictionary lookup, the LLM connection and settings and the coloured terminal output. Also wrote most of the test suite and both READMEs.",
  ],
  [
    "Kristy-Chong",
    "Wrote the text-to-speech module. Worked on the Leitner scheduler, CSV export and user input, and added error handling for reading and saving the deck file.",
  ],
  [
    "AndyTLY",
    "Built vocabulary-scanner. In word-flashcard-vocab-learner, wrote the card and deck model, the review scheduler, the command-line entry point, the import feature, the remove words screen and the review, deck and import screens, and made the app repair hand-edited deck files.",
  ],
  [
    "Chaus9587",
    "Built the documentation website using vue.js, vite and hosted on Netlify. In the package, added example sentences to the dictionary lookups, optimised the code, updated how the deck is handled and made the demo notebook.",
  ],
];
</script>

<template>
  <div
    class="flex items-center gap-18 px-8 py-24 sm:px-16 md:justify-between md:px-24 md:py-32 lg:gap-30 lg:px-28 xl:px-40"
  >
    <section class="max-w-2xl">
      <p class="font-light text-neutral-700/60 dark:text-neutral-500">
        CS1302A group project
      </p>
      <h1 class="mt-3 mb-6 text-4xl/10 sm:text-6xl/17">About us</h1>
      <p class="text-sm lg:text-base">
        We are a group of four students at City University of Hong Kong. For our
        CS1302A group project we built
        <span class="font-medium">word-flashcard-vocab-learner</span>, a python
        package that helps secondary school students in Hong Kong learn English
        words.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        You look a word up, keep it as a flashcard, and the app asks you about
        it again after 1, 2, 4, 7 and 14 days until you know it. Translations
        are in Traditional Chinese. This website shows what the package can do
        and how to use it.
      </p>
    </section>
    <img
      src="@/assets/laptop.jpg"
      alt="A laptop, and a notebook with a pen on it"
      class="hidden shrink-0 rounded-3xl border-8 border-double border-orange-300 object-cover opacity-90 lg:block lg:w-100 xl:w-130 lg:h-100 dark:border-orange-400 dark:opacity-75"
    />
  </div>

  <Card title="The team" contentClass="bg-orange-100/40 dark:bg-zinc-800/30">
    <section>
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="member in team"
          :key="member"
          class="flex items-center gap-4 rounded-xl border border-[#6666664f] bg-white/50 px-4 py-4 dark:bg-zinc-800/45"
        >
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-300/80 font-semibold dark:bg-orange-400/80"
            aria-hidden="true"
            >{{ member[0] }}</span
          >
          <span>
            <span class="block font-medium">{{ member }}</span>
            <span class="block text-xs text-neutral-600 dark:text-neutral-400"
              >Package author</span
            >
          </span>
        </li>
      </ul>
      <br />
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        This website was designed by Chaus9587.
      </p>
    </section>
    <br />
    <section>
      <DocTable
        :columns="contributionColumns"
        :rows="contributionRows"
        class="lg:w-[60vw]"
      ></DocTable>
    </section>
  </Card>

  <Card title="Built with">
    <ul class="list-disc space-y-2 pl-4 text-sm lg:text-base">
      <li v-for="tool in tools" :key="tool.name">
        <a
          v-if="tool.href"
          :href="tool.href"
          target="_blank"
          rel="noopener noreferrer"
          >{{ tool.name }}</a
        ><span v-else class="font-medium">{{ tool.name }}</span
        >: {{ tool.use }}
      </li>
    </ul>
  </Card>

  <Card title="Source code" contentClass="bg-orange-100/40 dark:bg-zinc-800/30">
    <p class="text-sm lg:text-base">
      The package is open source under the MIT License. The code, the full
      README and the tests are on
      <a :href="REPO_URL" target="_blank" rel="noopener noreferrer">GitHub</a>.
      Found a bug or have an idea? Open an
      <a :href="`${REPO_URL}/issues`" target="_blank" rel="noopener noreferrer"
        >issue</a
      >.
    </p>
    <br />
    <p class="text-sm lg:text-base">
      New here? Start with the
      <RouterLink to="/docs/installation">installation guide</RouterLink>.
    </p>
    <br />
    <p class="text-sm lg:text-base">
      Introductory video:
      <a
        href="https://youtu.be/wxcqpKDQdDI"
        target="_blank"
        rel="noopener noreferrer"
        >Click me</a
      >
    </p>
    <br />
    <p class="text-sm lg:text-base">
      The source code for this website:
      <a
        href="https://github.com/Chaus9587/vocab-learner-demo-page"
        target="_blank"
        rel="noopener noreferrer"
        >Click me</a
      >
    </p>
  </Card>

  <AppFooter />
</template>

<style scoped>
p,
.list-disc > li,
a {
  transform: scaleX(95%);
  transform-origin: left;
}

.list-disc > li {
  padding-left: 4px;
}

a {
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
