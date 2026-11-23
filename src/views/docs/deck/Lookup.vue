<script setup>
import CodeCard from '@/components/CodeCard.vue'
</script>

<template>
  <!-- Lookup & add words -->
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Lookup & add words to the deck
  </h1>
  <article class="mb-12">
    <p class="text-sm lg:text-base">Type 1 in the input section:</p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 1
  
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Type an English word to look it up. Press Enter on an empty line to go back.</span>
  
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word:</span></pre>
    </CodeCard>
    <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
      Note: You can press enter on an empty line to go back to the main menu.
    </p>
    <br />
    <p class="text-sm lg:text-base">
      Look up a word in the input section gives the word's definition and related examples (if any):
    </p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word:</span> dilemma
  
Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"dilemma"</span>:
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> A circumstance in which a choice must be made between two or more 
     alternatives that seemequally undesirable.
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> Any difficult circumstance or problem.
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (logic) A type of syllogism of the form "if A is true then B is true; 
     if C is true then D is true; either A or C is true; therefore either 
     B or D is true".</pre>
    </CodeCard>
    <br />
    <p class="text-sm lg:text-base">You can also get the pronounciation of the word:</p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="text-[#EBA400] dark:text-[#FFB454]">Play pronunciation? (y/N)</span> y
<span class="text-[#22A4E6] dark:text-[#59C2FF]">The audio of 'dilemma' is generating...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully to audio_cache\words\dilemma.mp3.</span></pre>
    </CodeCard>
    <audio controls>
      <source src="@/assets/dilemma.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <br />
    <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
      Note: The audio will be automatically played when it is generated (when you choose to play the
      pronounciation).
    </p>
    <br />
    <p class="text-sm lg:text-base">
      Then you can choose whether or not to save the word to the card deck:
    </p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="text-[#EBA400] dark:text-[#FFB454]">Add to your deck? (y/N)</span> y
<span class="text-[#86B300] dark:text-[#AAD94C]">Added "dilemma" to your deck (1 word).</span></pre>
    </CodeCard>
    <br />
    <p class="text-sm lg:text-base">A word that contains examples:</p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word:</span> pedestrian

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"pedestrian"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> (not comparable) Of or intended for those who are walking.
     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">&gt;</span> <span class="text-[#4CBF99] dark:text-[#95E6CB]">pedestrian crossing</span>
     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">&gt;</span> <span class="text-[#4CBF99] dark:text-[#95E6CB]">pedestrian zone</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> (comparable, figurative) Ordinary, dull; everyday; unexceptional.
     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">&gt;</span> <span class="text-[#4CBF99] dark:text-[#95E6CB]">His manner of dress was pedestrian but tidy.</span>
     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">&gt;</span> <span class="text-[#4CBF99] dark:text-[#95E6CB]">a pedestrian life</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (dance) Pertaining to ordinary, everyday movements incorporated in postmodern dance.
     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">&gt;</span> <span class="text-[#4CBF99] dark:text-[#95E6CB]">The choreographer prefers pedestrian movements.</span>

<span class="text-[#EBA400] dark:text-[#F9AF4F]">Play pronunciation? (y/N)</span> n
<span class="text-[#EBA400] dark:text-[#F9AF4F]">Add to your deck? (y/N)</span> n</pre>
    </CodeCard>
    <br />
    <p class="text-sm lg:text-base">Of course, you can continue to do this multiple times:</p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word:</span> conspiracy
  
Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"conspiracy"</span>:
  
  <span class="text-[#787B80]/70 dark:text-[#686868]">1.</span> An agreement or arrangement between multiple parties to do something harmful, 
     immoral or subversive; an instance of collusion.
  
  <span class="text-[#787B80]/70 dark:text-[#686868]">2.</span> (law) An agreement between two or more persons to break the law at some time 
     in the future.
  
  <span class="text-[#787B80]/70 dark:text-[#686868]">3.</span> (loosely) A secret agreement to do something.
  
<span class="text-[#EBA400] dark:text-[#F9AF4F]">Play pronunciation? (y/N)</span> n
<span class="text-[#EBA400] dark:text-[#F9AF4F]">Add to your deck? (y/N)</span> y
<span class="text-[#86B300] dark:text-[#AAD94C]">Added "conspiracy" to your deck (2 words).</span>
  
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Word:</span> status quo
  
Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"status quo"</span>:
  
  <span class="text-[#787B80]/70 dark:text-[#686868]">1.</span> The state of things; the way things are, as opposed to the way they could be; 
     the existing state of affairs.
  
<span class="text-[#EBA400] dark:text-[#F9AF4F]">Play pronunciation? (y/N)</span> y
<span class="text-[#22A4E6] dark:text-[#53BDFA]">The audio of 'status quo' is generating...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully to audio_cache\words\status_quo.mp3.</span>
<span class="text-[#EBA400] dark:text-[#F9AF4F]">Add to your deck? (y/N)</span> y
<span class="text-[#86B300] dark:text-[#AAD94C]">Added "status quo" to your deck (3 words).</span></pre>
    </CodeCard>
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
