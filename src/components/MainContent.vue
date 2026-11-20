<script setup>
import Card from './Card.vue'
import CodeCard from './CodeCard.vue'
</script>

<template>
  <Card
    title="Explore vocabularies, in a Jupyter Notebook?"
    contentClass="bg-orange-100/40 dark:bg-zinc-800/30"
  >
    <p class="text-sm lg:text-base">This python package features:</p>
    <br />
    <ul class="list-disc pl-4">
      <li>English Dictionary</li>
      <li>Text-to-Speech & Speech-to-Text functions</li>
      <li>CEFR Vocabulary Level Scanner for English Documents</li>
    </ul>
    <br />
    <p class="text-sm lg:text-base">
      This python package aims to provide a new platform for students to learn English, widen their
      linguistic variety and range of vocabularies.
    </p>
  </Card>
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
