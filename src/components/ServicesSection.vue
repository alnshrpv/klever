<template>
  <v-container
    class="py-16 services-section"
    fluid
    :class="{ 'dark-mode': isDark }"
  >
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="services-title mb-10">Наши услуги</h2>
      </v-col>
      <v-col
        v-for="service in services"
        :key="service.title"
        cols="12"
        md="4"
        class="mb-6"
      >
        <v-card
          elevation="4"
          class="pa-6 text-center service-card"
        >
          <v-icon size="48" color="success">{{ service.icon }}</v-icon>
          <h3 class="service-title mt-4">{{ service.title }}</h3>
          <p class="service-text mt-2">{{ service.text }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'

const { isDark } = useThemeSwitcher()

const services = [
  { icon: 'mdi-format-paint', title: 'Дизайн', text: 'Создание фирменного стиля, баннеров и макетов.' },
  { icon: 'mdi-printer', title: 'Печать', text: 'Широкоформатная, интерьерная и сувенирная печать.' },
  { icon: 'mdi-hammer-screwdriver', title: 'Монтаж', text: 'Установка рекламных конструкций любой сложности.' },
]
</script>

<style scoped>
.services-section {
  background-color: #F1F8E9;
  border-radius: 24px;
  box-shadow: 0 6px 18px rgba(0, 128, 0, 0.08);
  transition: background-color 0.3s ease;
  margin-top: 64px;
  margin-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
}

/* Dark mode */
.dark-mode {
  background-color: #1E1E1E;
  box-shadow: 0 6px 18px rgba(0, 128, 0, 0.2);
}

/* Заголовок */
.services-title {
  font-size: 36px;
  font-weight: 700;
  color: #2E7D32;
  transition: color 0.3s ease;
}

.dark-mode .services-title {
    color: #2E7D32;;
}

.service-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 128, 0, 0.08);
  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Центрируем по горизонтали */
}

.service-card:hover {
  box-shadow: 0 6px 20px rgba(0, 128, 0, 0.12);
}

.dark-mode .service-card {
  background-color: #292929;
  box-shadow: 0 6px 16px rgba(0, 128, 0, 0.25);
}

.service-title {
  font-size: 20px;
  font-weight: 700;
  color: #2E7D32;
  transition: color 0.3s ease;
}

.dark-mode .service-title {
   color: #2E7D32;;
}

.service-text {
  color: #4E5D52;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 8px;
  transition: color 0.3s ease;
}

.dark-mode .service-text {
  color: #C5E1A5;
}

@media (max-width: 600px) {
  .services-title {
    font-size: 26px;
  }
  .service-card {
    padding: 24px 16px;
    min-height: auto;
  }
  .service-title {
    font-size: 18px;
  }
  .service-text {
    font-size: 15px;
  }
}
</style>
