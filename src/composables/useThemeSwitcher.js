import { computed, watch, onMounted } from 'vue'
import { useTheme } from 'vuetify'

export function useThemeSwitcher() {
  const theme = useTheme()
  const isDark = computed(() => theme.global.name.value === 'myCustomDarkTheme')

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'myCustomDarkTheme' || savedTheme === 'myCustomLightTheme') {
      theme.global.name.value = savedTheme
    }
  })

  function toggleTheme() {
    theme.global.name.value = isDark.value ? 'myCustomLightTheme' : 'myCustomDarkTheme'
    localStorage.setItem('theme', theme.global.name.value)
  }

  watch(() => theme.global.name.value, (newTheme) => {
    localStorage.setItem('theme', newTheme)
  })

  return {
    isDark,
    toggleTheme,
  }
}
