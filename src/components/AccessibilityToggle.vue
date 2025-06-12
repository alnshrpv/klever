<template>
  <v-btn @click="toggleAccessibility" icon :title="isAccessible ? 'Обычный режим' : 'Режим для слабовидящих'">
    <v-icon>{{ isAccessible ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
  </v-btn>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAccessible = ref(false)

onMounted(() => {
  isAccessible.value = localStorage.getItem('accessible') === 'true'
  document.documentElement.classList.toggle('accessible-mode', isAccessible.value)
})

function toggleAccessibility() {
  isAccessible.value = !isAccessible.value
  document.documentElement.classList.toggle('accessible-mode', isAccessible.value)
  localStorage.setItem('accessible', isAccessible.value)
}
</script>
