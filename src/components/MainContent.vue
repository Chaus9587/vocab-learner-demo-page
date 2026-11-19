<script setup>
import Card from './Card.vue'
import CodeCard from './CodeCard.vue';
</script>

<template>
  <Card 
    title="Explore vocabularies, in a Jupyter Notebook?" 
    contentClass="bg-orange-100/40 dark:bg-zinc-800/30"
  >
    <p class="text-sm lg:text-base">
      This python package features:
    </p>
    <br>
    <ul class="list-disc pl-4">
      <li>English Dictionary</li>
      <li>Text-to-Speech & Speech-to-Text functions</li>
      <li>CEFR Vocabulary Level Scanner for English Documents</li>
    </ul>
    <br> 
    <p class="text-sm lg:text-base">
      This python package aims to provide a new platform for students to learn English, widen their linguistic variety and range of vocabularies.
    </p>
  </Card>
  <Card 
    title="Requirements & Installation"
  >
    <section class="mb-12">
      <ul class="list-disc pl-4">
        <li><a href="https://www.python.org/">Python</a> (>= v3.10)</li>
        <li>Speech features: <a href="https://files.portaudio.com/">the PortAudio library</a> (for recording) and <a href="https://ffmpeg.org/">ffmpeg  </a> on your PATH (for playback)</li>
        <li> importing scans and photos: <a href="https://github.com/tesseract-ocr/tesseract">Tesseract OCR</a> (on Windows, the <a href="github.com/UB-Mannheim/tesseract/wiki">UB Mannheim installer</a> is the easiest)</li>
      </ul>
  
      <br>
      <p class="text-sm lg:text-base">In your terminal, run this command:</p>
      <CodeCard location="Terminal">
        <pre class="font-code whitespace-pre"><span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">word-flashcard-vocab-learner</span></pre>
      </CodeCard>
  
      <br>
      <p class="text-sm lg:text-base">In your python environment, write:</p>
      <CodeCard location="myProject.py (or .ipynb)" lang="Python">
        <pre class="font-code whitespace-pre"><span class="text-[#FA8532] dark:text-[#FF8F40]">import</span> <span class="text-[#22A4E6] dark:text-[#59C2FF]">word_flashcard_vocab_learner</span> <span class="text-[#FA8532] dark:text-[#FF8F40]">as</span> <span class="text-[#22A4E6] dark:text-[#59C2FF]">vlearner</span></pre>
      </CodeCard>
  
      <br>
      <p class="text-sm lg:text-base">Everything is now set!</p>
    </section>

    <section class="mb-12">
      <p class="text-sm lg:text-base">In case you want to clone the repository and run the project in the project folder. Initialize the package in this way:</p>

      <br>
      <p class="text-sm lg:text-base">Open a virtual environment in the project folder:</p>
      <CodeCard location="Terminal">
        <pre class="font-code whitespace-pre"><span class="text-[#EBA400] dark:text-[#FFB454]">python</span> <span class="text-[#A37ACC] dark:text-[#D2A6FF]">-m</span> <span class="text-[#86B300] dark:text-[#AAD94C]">venv</span> <span class="text-[#86B300] dark:text-[#AAD94C]">env</span></pre>
      </CodeCard>

      <br>
      <p class="text-sm lg:text-base">Continued with:</p>
      <CodeCard location="Terminal">
        <pre class="font-code whitespace-pre"><span class="text-[#EBA400] dark:text-[#FFB454]">env\Scripts\activate</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># Windows</span>

<span class="text-[#FA8532] dark:text-[#FF8F40]">source</span> <span class="text-[#86B300] dark:text-[#AAD94C]">env/bin/activate</span>       <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># macOS / Linux</span></pre>
      </CodeCard>

      <br>
      <p class="text-sm lg:text-base">Then, install the packages in the project folder:</p>
      <CodeCard location="Terminal">
        <pre class="font-code whitespace-pre"><span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">.</span>                 <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># core features</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[speech]"</span>       <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + speech-to-text / text-to-speech</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[documents]"</span>    <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + import from PDF and Word (.docx)</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[ocr]"</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + import from scans and photos (also needs Tesseract OCR)</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">pip</span> <span class="text-[#86B300] dark:text-[#AAD94C]">install</span> <span class="text-[#86B300] dark:text-[#AAD94C]">".[dev]"</span>          <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45"># + pytest</span></pre>
      </CodeCard>
    </section>
    
  </Card>
</template>

<style scoped>
p {
  transform: scaleX(95%);
  transform-origin: left;
}

a {
  text-decoration: underline;
}

li {
  padding: 2px;
}
</style>