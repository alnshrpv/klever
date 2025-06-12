<template>
  <v-container class="py-16 about-section" fluid :class="{ 'dark-mode': isDark }">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="about-title mb-6">О компании</h2>
        <p class="about-text">
          Мы — рекламно-производственная компания с опытом более 10 лет. Работаем с брендами
          любого масштаба и предлагаем полный спектр услуг — от дизайна до монтажа конструкций.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

const { isDark } = useThemeSwitcher()
</script>

<style scoped>
.about-section {
  background-color: #F1F8E9;
  border-radius: 24px;
  box-shadow: 0 6px 18px rgba(4, 219, 4, 0.08);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin-top: 64px;
  margin-bottom: 64px;
  padding: 64px 24px;
}

.dark-mode {
  background-color: #1E1E1E;
  box-shadow: 0 6px 18px rgba(0, 128, 0, 0.2);
}

.about-title {
  font-size: 36px;
  font-weight: 700;
  color: #2E7D32;
  transition: color 0.3s ease;
}

.dark-mode .about-title {
   color: #2E7D32;;
}

.about-text {
  font-size: 18px;
  line-height: 1.7;
  color: #4E5D52;
  max-width: 700px;
  margin: 0 auto;
  transition: color 0.3s ease;
}

.dark-mode .about-text {
  color: #C5E1A5;
}

@media (max-width: 600px) {
  .about-title {
    font-size: 26px;
  }

  .about-text {
    font-size: 16px;
  }
}
</style>
