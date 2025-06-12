<template>
  <v-container
    class="py-16 advantages-section"
    fluid
    :class="{ 'dark-mode': isDark }"
  >
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <h2 class="advantages-title mb-10">Наши преимущества</h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        v-for="adv in advantages"
        :key="adv.title"
        class="mb-8"
      >
        <div class="advantage-card">
          <v-icon size="48" color="success">{{ adv.icon }}</v-icon>
          <h3 class="text-lg font-weight-bold mt-4 advantage-title">{{ adv.title }}</h3>
          <p class="advantage-text">{{ adv.text }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

const { isDark } = useThemeSwitcher()

const advantages = [
  { icon: 'mdi-rocket-launch', title: 'Скорость', text: 'Быстрое выполнение заказов без потери качества.' },
  { icon: 'mdi-account-group', title: 'Опыт', text: 'Команда экспертов с 10+ лет практики.' },
  { icon: 'mdi-cash-multiple', title: 'Цены', text: 'Прозрачная и гибкая система ценообразования.' },
]
</script>

<style scoped>
.advantages-section {
  background-color: #F1F8E9;
  border-radius: 24px;
  box-shadow: 0 6px 18px rgba(0, 128, 0, 0.08);
  transition: background-color 0.3s ease;
  margin-top: 64px;
  margin-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
}

.dark-mode {
  background-color: #1E1E1E;
  box-shadow: 0 6px 18px rgba(0, 128, 0, 0.2);
}

.advantages-title {
  font-size: 36px;
  font-weight: 700;
  color: #2E7D32;
  transition: color 0.3s ease;
}

.dark-mode .advantages-title {
   color: #2E7D32;;
}

.advantage-card {
  padding: 32px 24px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 128, 0, 0.08);
  transition: box-shadow 0.3s, background-color 0.3s;
  height: 100%;
}

.advantage-card:hover {
  box-shadow: 0 6px 20px rgba(0, 128, 0, 0.12);
}

.dark-mode .advantage-card {
  background-color: #292929;
  box-shadow: 0 6px 16px rgba(0, 128, 0, 0.25);
}

.advantage-title {
  font-size: 20px;
  color: #2E7D32;
}

.dark-mode .advantage-title {
  color: #A5D6A7;
}

.advantage-text {
  color: #4E5D52;
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.dark-mode .advantage-text {
  color: #C5E1A5;
}

@media (max-width: 600px) {
  .advantages-title {
    font-size: 26px;
  }
  .advantage-card {
    padding: 24px 16px;
  }
  .advantage-title {
    font-size: 18px;
  }
  .advantage-text {
    font-size: 15px;
  }
}
</style>
