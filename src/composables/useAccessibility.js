import { ref, watch, onMounted } from 'vue'

const isAccessible = ref(false)

export function useAccessibility() {
  onMounted(() => {
    isAccessible.value = localStorage.getItem('accessible') === 'true'
    document.documentElement.classList.toggle('accessible-mode', isAccessible.value)
  })

  function toggleAccessibility() {
    isAccessible.value = !isAccessible.value
    document.documentElement.classList.toggle('accessible-mode', isAccessible.value)
    localStorage.setItem('accessible', isAccessible.value)
  }

  watch(isAccessible, (newVal) => {
    document.documentElement.classList.toggle('accessible-mode', newVal)
  })

  return {
    isAccessible,
    toggleAccessibility,
  }
}
