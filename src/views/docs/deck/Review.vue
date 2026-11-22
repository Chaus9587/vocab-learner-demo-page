<script setup>
import CodeCard from '@/components/CodeCard.vue'
</script>

<template>
  <!-- Reviewing -->
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Reviewing the card deck
  </h1>
  <article class="mb-12">
    <p class="text-sm lg:text-base">
      Type 2 in the input section allows you to review the cards in the card deck:
    </p>
    <CodeCard location="Terminal">
      <pre
        class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
      ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 2

<span class="text-[#4CBF99] dark:text-[#95E6CB]">Due today: 3 cards.</span>

<span class="font-bold">Review modes:</span>

  <a href="#meaning">1. <span class="font-bold">Meaning</span>     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">See the word, recall what it means</span></a>
  <a href="">2. <span class="font-bold">Spelling</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, type the word</span></a>
  <a href="">3. <span class="font-bold">Listening</span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hear the word, type it</span></a>
  <a href="">4. <span class="font-bold">Speaking</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, say the word</span></a>
  <a href="">5. <span class="font-bold">Sentence</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Write a sentence, get AI feedback</span></a>

<span class="text-[#EBA400] dark:text-[#FFB454]">Choose a mode (Enter = 1, q = back):</span></pre>
    </CodeCard>
    <p class="text-sm lg:text-base">
      Suppose the deck hold words 'dilemma', 'conspiracy', and 'status quo' as shown above.
    </p>
    <br>
    <p class="text-sm lg:text-base">Click on each functions to delve deeper about them.</p>
    <br><br>


    <h2 class="origin-left scale-x-95 pb-6 text-[2rem]/10 font-medium lg:text-4xl scroll-mt-28" id="meaning">Review system</h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">In the review system, the app will:</p><br>
      <ul class="list-disc pl-4">
        <li>Randomly draw a card from the deck, and give the task for you to do based on the review mode. </li>
        <li>Repeat this until all cards have drawn once.</li>
      </ul>
      <br>
      <p class="text-sm lg:text-base">If you finish the task correctly. The app will:</p><br>
      <ul class="list-disc pl-4">
        <li>The app moves on to pick another random card.</li>
        <li>You gain 1 point.</li>
      </ul>
      <br>
      <p class="text-sm lg:text-base">Vice versa:</p><br>
      <ul class="list-disc pl-4">
        <li>
          That word will be reviewed again at the end of the review session. Then, the app moves on
          to pick another random card.
        </li>
        <li>You gain no points, even when you remembered it when it appears again.</li>
      </ul>
      

    </section>

    
    <h2 class="origin-left scale-x-95 pb-6 text-[2rem]/10 font-medium lg:text-4xl scroll-mt-28" id="meaning">1: Meaning</h2>
    <div>
      <p class="text-sm lg:text-base">
        Entering 1 starts the reviewing process. The app will pick a random word card from the deck:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">Choose a mode (Enter = 1, q = back):</span> 1

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">conspiracy</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        You may recall the pronounciation of the word: (The audio file will be generated if it
        hasn't)
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span> p
<span class="text-[#22A4E6] dark:text-[#59C2FF]">The audio of 'conspiracy' is generating...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully to audio_cache\words\conspiracy.mp3.</span>
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span></pre>
      </CodeCard>
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: The audio will be automatically played.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        Press enter to 'flip' the card, which will show the word defintions & related examples (if
        any)
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span>

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"conspiracy"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> An agreement or arrangement between multiple parties to do something harmful, immoral or
     subversive; an instance of collusion.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> (law) An agreement between two or more persons to break the law at some time in the future.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (loosely) A secret agreement to do something.

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Did you remember it? (y/n):</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        Whether you remember the word's defintion affects the later staage & future reviewing
        process.
      </p>
      <br />
      <p class="text-sm lg:text-base">If you remember the word:</p>
      <br />
      <ul class="list-disc pl-4">
        <li>The app moves on to pick another random card</li>
        <li>You gain 1 point</li>
      </ul>
      <br />
      <p class="text-sm lg:text-base">If you don't remember the word:</p>
      <br />
      <ul class="list-disc pl-4">
        <li>
          That word will be reviewed again at the end of the review session. Then, the app moves on
          to pick another random card
        </li>
        <li>You gain no points, even when you remembered it when it appears again.</li>
      </ul>
      <br />
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 2 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">dilemma</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span>
  
Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"dilemma"</span>:
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> A circumstance in which a choice must be made between two or more 
     alternatives that seemequally undesirable.
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> Any difficult circumstance or problem.
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (logic) A type of syllogism of the form "if A is true then B is true; 
     if C is true then D is true; either A or C is true; therefore either 
     B or D is true".

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Did you remember it? (y/n):</span> y

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 3 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">status quo</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span>

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"status quo"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Did you remember it? (y/n):</span> n

<span class="font-bold text-[#FA8532] dark:text-[#FF8F40]">No problem, this card will come back soon.</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Try again</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">status quo</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span>

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"status quo"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Did you remember it? (y/n):</span> y

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 1 · next review in 1 day</span></pre>
      </CodeCard>
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: The user cannot recall the meaning of 'status quo' in the first try, so no points for
        that card.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        After reviewing all cards, the app will summarize this session:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Session finished</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───────────────────────────────────────</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Reviewed</span>  <span class="font-bold">3 cards</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Correct</span>   <span class="font-bold text-[#86B300] dark:text-[#AAD94C]">2</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Wrong</span>     <span class="font-bold text-[#E65050] dark:text-[#F07178]">1</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Score</span>     <span class="font-bold">67%</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Main menu</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────────</span>

  <span class="font-bold">1.</span> Look up and add words
  <span class="font-bold">2.</span> Review cards
  <span class="font-bold">3.</span> Import words from a file (PDF, Word, scan, text)
  <span class="font-bold">4.</span> View my deck
  <span class="font-bold">5.</span> Progress
  <span class="font-bold">6.</span> Export deck to CSV
  <span class="font-bold">7.</span> Remove words

  <span class="font-bold">c.</span> Clear the screen
  <span class="font-bold">q.</span> Quit

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span></pre>
      </CodeCard>
    </div>
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