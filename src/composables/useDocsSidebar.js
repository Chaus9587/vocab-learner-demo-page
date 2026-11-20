import { ref } from 'vue'

const isDocsSidebarOpen = ref(false)

export function useDocsSidebar() {
  const toggleDocsSidebar = () => {
    isDocsSidebarOpen.value = !isDocsSidebarOpen.value
  }

  const closeDocsSidebar = () => {
    isDocsSidebarOpen.value = false
  }

  return {
    isDocsSidebarOpen,
    toggleDocsSidebar,
    closeDocsSidebar,
  }
}
