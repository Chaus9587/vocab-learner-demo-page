<script setup>
import CodeCard from '@/components/CodeCard.vue'
import InlineCode from '@/components/InlineCode.vue'

const scrollToHeading = (id) => {
  document.getElementById(id)?.scrollIntoView()
}
</script>

<template>
  <!-- Reviewing -->
  <h1 class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15">
    Reviewing the card deck
  </h1>
  <article>
    <section>
      <p class="text-sm lg:text-base">
        Type 2 in the input section allows you to review the cards in the card deck:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 2
  
<span class="text-[#4CBF99] dark:text-[#95E6CB]">Due today: 3 cards.</span>
  
<span class="font-bold">Review modes:</span>
  
  <a @click.prevent="scrollToHeading('meaning')">1. <span class="font-bold">Meaning</span>     <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">See the word, recall what it means</span></a>
  <a @click.prevent="scrollToHeading('spelling')">2. <span class="font-bold">Spelling</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, type the word</span></a>
  <a @click.prevent="scrollToHeading('listening')">3. <span class="font-bold">Listening</span>   <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hear the word, type it</span></a>
  <a @click.prevent="scrollToHeading('speaking')">4. <span class="font-bold">Speaking</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Read the clues, say the word</span></a>
  <a @click.prevent="scrollToHeading('sentence')">5. <span class="font-bold">Sentence</span>    <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Write a sentence, get AI feedback</span></a>
  
<span class="text-[#EBA400] dark:text-[#FFB454]">Choose a mode (Enter = 1, q = back):</span></pre>
      </CodeCard>
      <p class="text-sm lg:text-base">
        Suppose the deck holds the words 'dilemma', 'conspiracy', and 'status quo' as shown in the
        previous section.
      </p>
      <br />
      <p class="text-sm lg:text-base">Click on each mode to delve deeper into it.</p>
      <br /><br />
    </section>

    <h2 class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl">
      Review system
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">In the review system, the app will:</p>
      <br />
      <ul class="list-disc pl-4">
        <li>
          Randomly draw a card from the deck, and give the task for you to do based on the review
          mode.
        </li>
        <li>Repeat this until all cards have drawn once.</li>
      </ul>
      <br />
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
...
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 2 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
...
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 3 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
...     
</pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">If you finish the task correctly, the app will:</p>
      <br />
      <ul class="list-disc pl-4">
        <li>The app moves on to pick another random card.</li>
        <li>You gain 1 point.</li>
        <li>Next review of this word card will be in 2 days.</li>
      </ul>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">Vice versa:</p>
      <br />
      <ul class="list-disc pl-4">
        <li>
          That word will be reviewed again at the end of the review session. Then, the app moves on
          to pick another random card.
        </li>
        <li>You gain no points, even when you remembered it when it appears again.</li>
        <li>Next review of this word card will be in 1 day.</li>
      </ul>
      <br />
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#E65050] dark:text-[#F07178]">Incorrect</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 1 · next review tomorrow</span></pre>
      </CodeCard>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 3 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
...     
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Try again</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
...     </pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">After the review, the app gives back the session details:</p>
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
  <span class="font-bold">8.</span> Edit a card
  <span class="font-bold">9.</span> Practise one word
  
  <span class="font-bold">c.</span> Clear the screen
  <span class="font-bold">q.</span> Quit
  
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span></pre>
      </CodeCard>
      <p class="text-sm lg:text-base">
        IMPORTANT: You cannot review those cards until the card's next review date.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        You can still practise the word cards in the deck if needed:
      </p>
      <CodeCard location="Terminal">
        <pre class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]">...

<span class="font-bold">c.</span> Clear the screen
<span class="font-bold">q.</span> Quit

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 2

<span class="text-[#86B300] dark:text-[#AAD94C]">No cards are due today. Next review: 2026-11-23.</span>

<span class="text-[#EBA400] dark:text-[#FFB454]">Practise all cards anyway? Your progress will not change. (y/N)</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        You can check your card deck's status in <InlineCode>4. View my deck</InlineCode> section.
      </p>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
      id="meaning"
    >
      1: Meaning
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Entering 1 starts the meaning reviewing process. The app will pick a random word card from
        the deck:
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
        You may recall the pronunciation of the word: (The audio file will be generated if it
        hasn't)
      </p>

      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span> p
<span class="text-[#22A4E6] dark:text-[#59C2FF]">The audio is generating...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully.</span>
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span></pre>
      </CodeCard>

      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: The audio will be automatically played.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        Press enter to 'flip' the card, which will show the word definitions & related examples (if
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
        Then, input whether you remember the word's definition or not. 1 pt if you remember, 0 pts
        if you forgot, and the card will appear again in the end.
      </p>
      <br />

      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 2 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
  
  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">dilemma</span>
  
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span>
  
  Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"dilemma"</span>:
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> A circumstance in which a choice must be made between two or more 
     alternatives that seem equally undesirable.
  
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
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 1 · next review tomorrow</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Try again</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>
  
  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">status quo</span>
  
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Press Enter to flip the card (p = play sound, q = stop):</span>
  
  Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"status quo"</span>:
  
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.
  
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Did you remember it? (y/n):</span> y

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span></pre>
      </CodeCard>

      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: The user cannot recall the meaning of 'status quo' in the first try, so no points for
        that card.
      </p>
      <br />

      <p class="text-sm lg:text-base">
        After reviewing all cards, the app will summarize this session.
      </p>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
      id="spelling"
    >
      2: Spelling
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Entering 2 starts the spelling reviewing process. The app will pick a random word card from
        the deck:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

<span class="font-bold">Clues:</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hint:</span>   s_____ ___ (9 letters)

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Type the word (q = stop):</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        Then, input the spelling of the word. 1 pt for correct answer, 0 pts for wrong answer and
        the card will appear again in the end.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Type the word (q = stop):</span> stats quo

<span class="font-bold text-[#E65050] dark:text-[#F07178]">Not quite. The answer is "status quo".</span>

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"status quo"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 1 · next review tomorrow</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">The review process continues:</p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 2 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

<span class="font-bold">Clues:</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> A circumstance in which a choice must be made between two or more alternatives that seem
     equally undesirable.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> Any difficult circumstance or problem.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (logic) A type of syllogism of the form "if A is true then B is true; if C is true then D is
     true; either A or C is true; therefore either B or D is true".

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hint:</span>   d______ (7 letters)

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Type the word (q = stop):</span> dilemma

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 3 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

<span class="font-bold">Clues:</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> An agreement or arrangement between multiple parties to do something harmful, immoral or
     subversive; an instance of collusion.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> (law) An agreement between two or more persons to break the law at some time in the future.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (loosely) A secret agreement to do something.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hint:</span>   c_________ (10 letters)

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Type the word (q = stop):</span> conspiracy

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">Lastly, the 'try again' for incorrect cards:</p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Try again</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────────</span>

<span class="font-bold">Clues:</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> The state of things; the way things are, as opposed to the way they could be; the existing
     state of affairs.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hint:</span>    s_____ ___ (9 letters)

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Type the word (q = stop):</span> status quo

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        After reviewing all cards, the app will summarize this session.
      </p>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
      id="listening"
    >
      3: Listening
    </h2>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Entering 3 starts the reviewing process in listening mode. The app will pick a random word
        card from the deck and play the word's pronunciation:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="text-[#4CBF99] dark:text-[#95E6CB]">Listen and type the word you hear.</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your answer (r = replay, q = stop):</span></pre>
      </CodeCard>
      <audio controls>
        <source src="@/assets/status_quo.mp3" />
      </audio>
      <br />
      <p class="text-sm text-zinc-600 italic dark:text-zinc-400">
        Note: The audio will be automatically played. The audio file will be generated if it hasn't.
      </p>
      <br />

      <p class="text-sm lg:text-base">
        Then, input the spelling of the word. 1 pt for correct answer, 0 pts for wrong answer and
        the card will appear again in the end.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your answer (r = replay, q = stop):</span> status quo

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">The reviewing process continues:</p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 2 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="text-[#4CBF99] dark:text-[#95E6CB]">Listen and type the word you hear.</span>

<span class="text-[#22A4E6] dark:text-[#59C2FF]">The audio is generating...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully.</span>
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your answer (r = replay, q = stop):</span> dilema

<span class="font-bold text-[#E65050] dark:text-[#F07178]">Not quite. The answer is "dilemma".</span>

Definitions of <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">"dilemma"</span>:

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> A circumstance in which a choice must be made between two or more alternatives that seem
     equally undesirable.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> Any difficult circumstance or problem.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (logic) A type of syllogism of the form "if A is true then B is true; if C is true then D is
     true; either A or C is true; therefore either B or D is true".
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 1 · next review tomorrow</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 3 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="text-[#4CBF99] dark:text-[#95E6CB]">Listen and type the word you hear.</span>

<span class="text-[#22A4E6] dark:text-[#59C2FF]">The audio is generating...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully.</span>
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your answer (r = replay, q = stop):</span> conspiracy

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span>

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Try again</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">──────────────────────────────────────────────</span>

  <span class="text-[#4CBF99] dark:text-[#95E6CB]">Listen and type the word you hear.</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your answer (r = replay, q = stop):</span> dilemma

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span></pre></CodeCard
      ><br />

      <p class="text-sm lg:text-base">
        After reviewing all cards, the app will summarize this session.
      </p>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
      id="speaking"
    >
      4: Speaking
    </h2>

    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Entering 4 starts the reviewing process in speaking mode. The app will pick a random word
        card from the deck and ask you to record the word:
      </p>

      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

<span class="font-bold">Clues:</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">1.</span> An agreement or arrangement between multiple parties to do something harmful, 
     immoral or subversive; an instance of collusion.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">2.</span> (law) An agreement between two or more persons to break the law at some time 
     in the future.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">3.</span> (loosely) A secret agreement to do something.

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Hint:</span>    c_________ (10 letters)

  <span class="text-[#4CBF99] dark:text-[#95E6CB]">Say the word out loud.</span>
<span class="text-[#4CBF99] dark:text-[#95E6CB]">Please record your audio. This will record for 3 seconds.</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">Press Enter to start recording...</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        Press enter to start recording. Then, the app gives 'Correct' or 'Incorrect' based on your
        pronunciation.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        >  <span class="text-[#4CBF99] dark:text-[#95E6CB]">Say the word out loud.</span>
<span class="text-[#4CBF99] dark:text-[#95E6CB]">Please record your audio. This will record for 3 seconds.</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">Press Enter to start recording...</span>
<span class="text-[#E65050] dark:text-[#F07178]">Recording...</span>
<span class="text-[#22A4E6] dark:text-[#59C2FF]">Recording complete. Saving to 'recording\2026-11-22_18-04-41.wav'...</span>
<span class="text-[#86B300] dark:text-[#AAD94C]">Audio saved successfully.</span>
You said: <span class="text-[#A37ACC] dark:text-[#D2A6FF]">Conspiracy</span>

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span></pre>
      </CodeCard>
      <p class="text-sm lg:text-base">
        1 pt for correct answer, 0 pts for wrong answer and the card will appear again in the end,
        as usual.
      </p>
      <br />
      <p class="text-sm lg:text-base">
        After reviewing all cards, the app will summarize this session.
      </p>
    </section>

    <h2
      class="origin-left scale-x-95 scroll-mt-28 pb-6 text-[2rem]/10 font-medium lg:text-4xl"
      id="sentence"
    >
      5: Sentence
    </h2>

    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Entering 5 starts the reviewing process in sentence mode. The app will pick a random word
        card from the deck and ask you to make a sentence with it:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Card 1 of 3</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────────</span>

  <span class="font-bold text-[#A37ACC] dark:text-[#D2A6FF]">dilemma</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Meaning:</span> A circumstance in which a choice must be made between two or more alternatives 
           that seem equally undesirable.

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Write a sentence using "dilemma" (q = stop):</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        1 pt for correct use of word, 0 pts for inaccurate uses and the card will appear again in
        the end.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Write a sentence using "dilemma" (q = stop):</span> I have a dilemma
<span class="text-[#22A4E6] dark:text-[#59C2FF]">Checking your sentence...</span>

<span class="font-bold">Feedback:</span> Good use of “dilemma”. The sentence is correct.

<span class="font-bold text-[#86B300] dark:text-[#AAD94C]">Correct!</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Box 2 · next review in 2 days</span></pre>
      </CodeCard>
      <br />
      <p class="text-sm lg:text-base">
        After reviewing all cards, the app will summarize this session.
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

a:hover {
  cursor: pointer;
}

li {
  padding-left: 4px;
}
</style>
