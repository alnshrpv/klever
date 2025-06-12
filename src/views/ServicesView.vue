<template>
  <v-container class="py-16" style="min-height: 738px;">
  <h1 class="text-h4 mb-6 text-center">Наши услуги</h1>
    <v-row><v-col cols="12" md="6" lg="4" v-for="(service, index) in services" :key="index">
        <v-card class="service-card"> <v-img :src="service.image" class="service-image" height="200" cover />
          <v-card-title class="text-h6 service-title">
            {{ service.title }}
          </v-card-title>
          <v-card-text class="service-text"> {{ service.description }}
            <div class="service-price mt-2 font-weight-bold text-green-darken-2">{{ service.price }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const services = [
    {
    title: 'Изготовление вывесок',
    description: 'Производим световые и несветовые вывески любых форматов и размеров.',
    price: 'от 5 000 ₽',
    image: require('@/assets/services/signboards.jpg')
  },
  {
    title: 'Баннеры и плакаты',
    description: 'Печать баннеров и плакатов высокого качества для наружной и интерьерной рекламы.',
    price: 'от 1 500 ₽',
    image: require('@/assets/services/banners.jpg')
  },
  {
    title: 'Полиграфия',
    description: 'Флаеры, буклеты, визитки, каталоги и другие печатные материалы для вашего бизнеса.',
    price: 'от 800 ₽',
    image: require('@/assets/services/printing.jpg')
  },
  {
    title: 'Сувенирная продукция',
    description: 'Брендирование ручек, кружек, блокнотов и другой сувенирной продукции.',
    price: 'от 300 ₽',
    image: require('@/assets/services/souvenirs.jpg')
  },
  {
    title: 'Изготовление штампов',
    description: 'Оперативное изготовление печатей и штампов по вашим макетам.',
    price: 'от 900 ₽',
    image: require('@/assets/services/stamps.jpg')
  },
    {
    title: 'УФ-печать',
    description: 'Ультрафиолетовая печать на пластике, дереве, металле и других поверхностях.',
    price: 'от 1 200 ₽',
    image: require('@/assets/services/uv-print.jpg')
  },
  {
  title: 'Навигационные таблички',
  description: 'Изготовление табличек для офисов, БЦ, госучреждений — с номером кабинета, логотипом и пиктограммами.',
  price: 'от 500 ₽',
  image: require('@/assets/services/signage.jpg')
},
{
  title: 'Столярное производство с эпоксидной смолой',
  description: 'Изготовление эксклюзивной мебели, столешниц и декоративных панелей с заливкой эпоксидной смолой. Индивидуальный дизайн под ваш интерьер.',
  price: 'от 15 000 ₽',
  image: require('@/assets/services/epoxy-wood.jpg')
},
{
  title: 'Индивидуальный дизайн',
  description: 'Разработка уникального визуального стиля для вашего бренда: от логотипов и цветовых решений до макетов рекламной продукции. Учитываем ваши цели и предпочтения.',
  price: 'от 5 000 ₽',
  image: require('@/assets/services/custom-design.jpg')
}
]
</script>

<style scoped>
h1 {
  font-weight: 700;
  color: #2E7D32;
  text-align: center;
  margin-bottom: 24px;
}

.service-price {
  font-size: 16px;
}

.service-card {
  padding: 0;
  border-radius: 12px;
  background-color: var(--v-theme-surface);
  color: var(--v-theme-on-surface);
  box-shadow: 0 4px 16px rgba(var(--v-theme-primary-rgb, 76, 175, 80), 0.08);
  border: 4px solid rgba(0, 110, 49, 0.562);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%; 
}

.v-row > .v-col {
  display: flex;
  flex-direction: column;
}
.dark-mode .service-card {
  border: none; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(var(--v-theme-primary-rgb, 76, 175, 80), 0.12);
}

.service-image {
  width: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

.service-title {
    color: #2E7D32;
  font-weight: 600;
  padding: 16px 16px 0 16px;
}

.service-text {
  font-size: 15px;
  line-height: 1.6;
  color: var(--v-theme-on-surface);
  padding: 8px 16px 16px 16px;
  flex-grow: 1;
}
</style>
