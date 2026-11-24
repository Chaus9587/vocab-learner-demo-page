<script setup>
// A simple table for the docs pages, styled like CodeCard.
// columns: [{ label: 'Variable', code: true }, { label: 'Used by' }]
//   A column with code: true shows its cells in the code font and colour.
// rows: [['LLM_API_KEY', 'Chinese translations ...'], ...]
defineProps({
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="my-6 overflow-x-auto rounded-xl border border-[#6666664f]">
    <table class="w-full border-collapse text-left text-xs lg:text-sm">
      <thead class="bg-orange-100/55 dark:bg-zinc-800">
        <tr>
          <th
            v-for="column in columns"
            :key="column.label"
            class="px-4 py-3 font-semibold whitespace-nowrap text-black/80 dark:text-white/80"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white/50 dark:bg-zinc-800/45">
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="border-t border-[#6666664f]"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="px-4 py-2.5 align-top"
          >
            <code
              v-if="columns[cellIndex]?.code"
              class="font-code whitespace-nowrap text-[#EBA400] dark:text-[#FFB454]"
              >{{ cell }}</code
            >
            <template v-else>{{ cell }}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
