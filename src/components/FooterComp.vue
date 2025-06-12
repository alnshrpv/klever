<template>
<v-footer :color="isDark ? 'myCustomDarkTheme.primary' : 'myCustomLightTheme.primary'" :dark="isDark" padless>
<v-container class="footer-content py-4 text-center">
<v-row justify="center" align="center">
<v-col cols="12">
<p class="mb-2" style="color: #2E7D32;">&copy; 2025 Рекламное агентство «Клевер». Все права защищены.</p>
<div>
<v-btn icon size="small" variant="text" aria-label="Иконка ВКонтакте" href="https://vk.com/kleverbratsk"  
target="_blank" 
rel="noopener"
class="mx-1">
<v-icon size="30" style="color: #2E7D32;">mdi-vk</v-icon></v-btn></div>
</v-col>
</v-row>
</v-container>
</v-footer>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'myCustomDarkTheme')
</script>

<style scoped>
.footer-content {
max-width: 1200px;
margin: 0 auto;
padding-top: 16px !important;
padding-bottom: 16px !important;
}
p {
color: #2E7D32;
margin: 0;
color: var(--v-theme-on-primary);
user-select: none;
}
.v-btn {
transition: background-color 0.3s ease;
}
.v-btn:hover {
background-color: rgba(255, 255, 255, 0.1);
}
</style>
