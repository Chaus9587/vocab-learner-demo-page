<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'

const isAtTop = ref(true)

const handleScroll = () => {
  isAtTop.value = window.scrollY <= 5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
