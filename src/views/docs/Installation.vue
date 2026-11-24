<script setup>
import { RouterLink } from "vue-router";
import CodeCard from "@/components/CodeCard.vue";
</script>

<template>
  <article>
    <h1
      class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
    >
      Installations
    </h1>

    <section class="mb-12">
      <ul class="list-disc space-y-1.5 pl-4 text-sm lg:text-base">
        <li>
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            >Python</a
          >
          (>= v3.10)
        </li>
        <li>
          Speech features:
          <a
            href="https://files.portaudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            >the PortAudio library</a
          >
          (for recording) and
          <a
            href="https://ffmpeg.org/"
            target="_blank"
            rel="noopener noreferrer"
            >ffmpeg</a
          >
          on your PATH (for playback)
        </li>
        <li>
          Importing scans and photos:
          <a
            href="https://github.com/tesseract-ocr/tesseract"
            target="_blank"
            rel="noopener noreferrer"
            >Tesseract OCR</a
          >
          (on Windows, the
          <a
            href="https://github.com/UB-Mannheim/tesseract/wiki"
            target="_blank"
            rel="noopener noreferrer"
            >UB Mannheim installer</a
          >
          is the easiest)
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <p class="text-sm lg:text-base">In your terminal, run this command:</p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">word-flashcard-vocab-learner</span></pre>
      </CodeCard>

      <br />
      <p class="text-sm lg:text-base">
        In your python environment, write: (skip this if you are only going to
        use the main application)
      </p>
      <CodeCard location="myProject.py (or .ipynb)" lang="Python">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#FA8532] dark:text-[#FF8F40]">from</span> <span class="text-[#22A4E6] dark:text-[#59C2FF]">word_flashcard_vocab_learner</span> <span class="text-[#FA8532] dark:text-[#FF8F40]">import</span> (
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">cardDeck</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">connectFreeDictionaryAPI</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">exportDeckToCSV</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">genAITutor</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">importVocabulary</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">leitnerScheduler</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">removeWords</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">reviewCards</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">showProgress</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">speechHelper</span>,
    <span class="text-[#22A4E6] dark:text-[#59C2FF]">terminalDisplay</span>,
)</pre>
      </CodeCard>

      <br />
      <p class="text-sm lg:text-base">
        Everything is now set! To turn on translations and the speech features,
        add your
        <RouterLink to="/docs/settings">API keys</RouterLink> (optional).
      </p>
    </section>

    <section class="mb-12">
      <p class="text-sm lg:text-base">
        In case you want to clone the repository and run the project in the
        project folder. Initialize the package in this way:
      </p>

      <br />
      <p class="text-sm lg:text-base">
        Open a virtual environment in the project folder: (Optional)
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">python</span> <span class="text-[#A37ACC] dark:text-[#D2A6FF]">-m</span> <span class="text-[#86B300] dark:text-[#AAD94C]">venv</span> <span class="text-[#86B300] dark:text-[#AAD94C]">env</span></pre>
      </CodeCard>

      <br />
      <p class="text-sm lg:text-base">Continued with:</p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">env\Scripts\activate</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># Windows</span>

<span class="text-[#FA8532] dark:text-[#FF8F40]">source</span> <span class="text-[#86B300] dark:text-[#AAD94C]">env/bin/activate</span>       <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># macOS / Linux</span></pre>
      </CodeCard>

      <br />
      <p class="text-sm lg:text-base">
        Then, install the packages in the project folder:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">.</span>                 <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># core features</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[speech]"</span>       <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + speech-to-text / text-to-speech</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[documents]"</span>    <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + import from PDF and Word (.docx)</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[ocr]"</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + import from scans and photos (also needs Tesseract OCR)</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[dev]"</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + pytest</span></pre>
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
