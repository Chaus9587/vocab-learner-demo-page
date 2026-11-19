<script setup>
import Card from './Card.vue'
import CodeCard from './CodeCard.vue';
</script>

<template>
  <Card 
    title="Explore vocabularies... in a Jupyter Notebook?" 
    contentClass="bg-amber-100/40 dark:bg-zinc-800/30"
  >
    <p class="text-sm lg:text-base">
      By providing a dictionary, etc. It is feasible for users to learn English inside a program.
    </p>
    <br>  
    <p class="text-sm lg:text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum magnam vitae accusantium nostrum velit nihil vel quo maiores explicabo tempora!
    </p>
  </Card>
  <Card 
    title="Prerequisite"
  >
    <p class="text-sm lg:text-base">Install <a href="https://nodejs.org/">Node.js</a> (>= v24.12.0) on your computer:</p>

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