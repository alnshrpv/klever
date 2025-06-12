<template>
  <v-container class="about-page py-16" style="height: 738px;">
    <h1 class="text-h4 font-weight-bold text-center mb-10">О компании</h1>
    <v-row align="center">
      <v-col cols="12" md="6">
        <p>
          Рекламное агентство <strong>«Клевер»</strong> — это команда профессионалов с многолетним опытом
          в сфере наружной и цифровой рекламы. Мы предлагаем полный спектр услуг: от
          разработки фирменного стиля до производства и размещения рекламных материалов.
        </p>
        <p class="mt-4">
          Наша миссия — помогать бизнесу быть заметным и узнаваемым. Мы ценим индивидуальный
          подход и всегда находим креативные решения под любую задачу.
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="/img/about.jpg" alt="О компании" class="rounded-lg elevation-3 about-image" height="320" cover/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.about-image {
  max-width: 100%;
  border: 4px solid var(--v-theme-primary); /* используем CSS-переменную из Vuetify темы */
}

p {
  line-height: 1.7;
  font-size: 16px;
   color: #2E7D32; /* текст из темы */
}

h1 {
   color: #2E7D32; /* цвет заголовка из темы */
}
</style>
