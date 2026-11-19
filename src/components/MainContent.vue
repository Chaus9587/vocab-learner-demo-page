<script setup>
import Card from './Card.vue'
import CodeCard from './CodeCard.vue';
</script>

<template>
  <Card 
    title="Explore vocabularies, in a Jupyter Notebook?" 
    contentClass="bg-amber-100/40 dark:bg-zinc-800/30"
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
    title="Requirements"
  >
    <p class="text-sm lg:text-base">Install <a href="https://www.python.org/">Python</a> (>= v3.10) on your computer:</p>

    <br>

    <p class="text-sm lg:text-base">Then, open the template folder in VS Code, or other code editor, type in the terminal: </p>
    <CodeCard lang="Terminal">
      <pre class="font-code whitespace-pre">npm install</pre>
    </CodeCard>

    <br>
    
    <p class="text-sm lg:text-base">Run this command to start a development server:</p>
    <CodeCard lang="Terminal">
      <pre class="font-code whitespace-pre">npm run dev</pre>
    </CodeCard>
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
</style>