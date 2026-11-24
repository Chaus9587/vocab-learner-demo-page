<script setup>
import CodeCard from "@/components/CodeCard.vue";
</script>

<template>
  <h1
    class="origin-left scale-x-95 pb-12 text-[2.75rem]/14 font-semibold lg:text-5xl/15"
  >
    Import word cards to deck by scanning documents
  </h1>
  <article>
    <section class="mb-12">
      <p class="text-sm lg:text-base">
        Type 3 in the input section brings you to the import section.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Choose:</span> 3

<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Import words from a text, CSV, PDF, Word (.docx) or image file.</span>
<span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Tip: you can drag the file into this window to type its path.</span>

<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">File path (Enter = back):</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        Drag the desired file (PDF, Word .docx, CSV, plain text, or an image
        such as .jpg, which needs OCR) into the command box, and remove
        unnecessary text/ symbols (if any).
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="font-bold text-[#EBA400] dark:text-[#FFB454]">File path (Enter = back):</span> C:\Users\demo\Documents\test.docx
<span class="text-[#22A4E6] dark:text-[#59C2FF]">Reading the file...</span>
<span class="text-[#EBA400] dark:text-[#FFB454]">Let the AI tutor pick the most useful words? (Y/n)</span> n

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Words found in test.docx</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───────────────────────────────</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">(only the first 100 are shown)</span>

    1. striving           2. journey            3. growth             4. dare
    5. try                6. fail               7. simple             8. powerful
    9. mantra            10. illuminated       11. path              12. throughout
   13. secondary         14. urging            15. break             16. comfort
   17. zone              18. confront          19. head-on           20. treat
   21. essential         22. failure           23. diminish          24. potential
   25. reveals           26. stronger          27. capable           28. deeply
   29. self-aware        30. reflecting        31. triumphs          32. purpose
   33. resilience        34. confidence        35. embrace           36. future
   37. filled            38. uncertainty       39. promise           40. experience
   41. certainty         42. curiosity         43. led               44. entrepreneurs
   45. cloud             46. programme         47. initially         48. hesitant
   49. understand        50. fit               51. heeding           52. resolve
   53. judge             54. dived             55. decision          56. marked
   57. pivotal           58. shift             59. academic          60. personal
   61. span              62. delved            63. computer          64. architecture
   65. operating         66. systems           67. programming       68. breadth
   69. services          70. engaged           71. directly          72. advances
   73. technology        74. ranging           75. exploring         76. robotics
   77. object            78. detection         79. generative        80. exhibitions
   81. direct            82. encounter         83. innovations       84. shattered
   85. notion            86. boxes             87. discovered        88. stunning
   89. landscape         90. logic             91. imagination       92. endless
   93. possibility       94. vague             95. rapidly           96. evolved
   97. steadfast         98. passion           99. mysterious       100. intimidating

<span class="font-bold">Which words do you want to add?</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Enter = all,  e.g. 1,3,5-8 = some,  n = none</span>
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your choice:</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        You can use the AI tutor to pick more "useful" words.
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        ><span class="text-[#EBA400] dark:text-[#FFB454]">Let the AI tutor pick the most useful words? (Y/n)</span> Y
          
<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Words found in test.docx</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────</span>

   1. setbacks          2. diminish          3. resilience        4. pivotal
   5. steadfast         6. intimidating      7. transformative    8. burgeoning
   9. interpersonal    10. aspirations      11. arduous          12. self-doubt
  13. conviction       14. cultivated       15. underpins        16. exhaustive
  17. underscored      18. adaptability

<span class="font-bold">Which words do you want to add?</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">Enter = all,  e.g. 1,3,5-8 = some,  n = none</span>
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your choice:</span></pre>
      </CodeCard>
      <br />

      <p class="text-sm lg:text-base">
        You can choose what words to add to the deck:
      </p>
      <CodeCard location="Terminal">
        <pre
          class="font-code whitespace-pre text-[#5C6166] dark:text-[#BFBDB6]"
        >
<span class="font-bold text-[#EBA400] dark:text-[#FFB454]">Your choice:</span> all

<span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">───</span> <span class="font-bold text-[#4CBF99] dark:text-[#95E6CB]">Adding 18 words</span> <span class="text-[#787B80]/55 dark:text-[#ACB6BF]/45">────────────────────────────────────────</span>

  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 1/18]</span> <span class="font-bold">setbacks</span>            <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 2/18]</span> <span class="font-bold">diminish</span>            <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 3/18]</span> <span class="font-bold">resilience</span>          <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 4/18]</span> <span class="font-bold">pivotal</span>             <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 5/18]</span> <span class="font-bold">steadfast</span>           <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 6/18]</span> <span class="font-bold">intimidating</span>        <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 7/18]</span> <span class="font-bold">transformative</span>      <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 8/18]</span> <span class="font-bold">burgeoning</span>          <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[ 9/18]</span> <span class="font-bold">interpersonal</span>       <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[10/18]</span> <span class="font-bold">aspirations</span>         <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[11/18]</span> <span class="font-bold">arduous</span>             <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[12/18]</span> <span class="font-bold">self-doubt</span>          <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[13/18]</span> <span class="font-bold">conviction</span>          <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[14/18]</span> <span class="font-bold">cultivated</span>          <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[15/18]</span> <span class="font-bold">underpins</span>           <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[16/18]</span> <span class="font-bold">exhaustive</span>          <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[17/18]</span> <span class="font-bold">underscored</span>         <span class="text-[#86B300] dark:text-[#AAD94C]">added</span>
  <span class="text-[#787B80]/70 dark:text-[#ACB6BF]/55">[18/18]</span> <span class="font-bold">adaptability</span>        <span class="text-[#86B300] dark:text-[#AAD94C]">added</span></pre>
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
