<template>
  <section class="hero-section">
    <v-carousel hide-delimiter-background show-arrows="hover" height="500" cycle>
      <v-carousel-item v-for="(img, i) in images" :key="i">
        <v-img :src="img" cover height="100%" class="carousel-image">
          <div class="overlay d-flex align-center justify-center">
            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="12" md="8" class="text-center text-white">
                  <h1 class="hero-title mb-4"> Полный цикл <br /> рекламного производства </h1>
                  <p class="subtitle-1 mb-6"> Создаём эффективную рекламу для вашего бизнеса — от идеи до монтажа.</p>
                <v-btn color="success" size="large" rounded class="elevation-4" :to="'/contacts'">Связаться с нами</v-btn>

                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script setup>
const images = [
  '/img/hero1.jpg',
  '/img/hero2.jpg',
  '/img/hero3.jpg'
]
</script>

<style scoped>
.hero-section {
  margin-top: 22px;
}
.carousel-image {
  height: 500px;
  width: 100%;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  padding: 32px 16px;
}
.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: white;
}
.text-white {
  color: white !important;
}
@media (max-width: 960px) {
  .carousel-image {
    height: 350px;
  }
  .hero-title {
    font-size: 32px;
  }
}
@media (max-width: 600px) {
  .carousel-image {
    height: 280px;
  }
  .hero-title {
    font-size: 24px;
  }
}
</style>
