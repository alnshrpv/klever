<template>
  <v-app-bar
    app
    flat
    :class="[{ 'dark-header': isDark }, 'app-header']"
  >
    <v-container class="d-flex justify-space-between align-center fill-height">
      <!-- Логотип -->
      <div class="d-flex align-center">
        <RouterLink to="/" class="logo-link d-flex align-center">
          <v-img
            src="@/assets/img/logo.png"
            alt="Логотип"
            height="50"
            width="150"
            class="mr-2"
            cover
          />
        </RouterLink>
      </div>

      <!-- Левая иконка — Бургер меню (только на мобильных) -->
      <v-btn
        icon
        class="d-md-none"
        @click="$emit('toggle-drawer')"
        :title="'Меню'"
      >
        <v-icon color="primary">mdi-menu</v-icon>
      </v-btn>

      <!-- Темная тема -->
      <v-btn @click="toggleTheme" icon :title="isDark ? 'Светлая тема' : 'Тёмная тема'">
        <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>

      <!-- Версия для слабовидящих -->
      <v-btn
        @click="toggleAccessibility"
        icon
        :title="isAccessible ? 'Обычный режим' : 'Режим для слабовидящих'"
      >
        <v-icon>{{ isAccessible ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
      </v-btn>

<v-row class="d-none d-md-flex align-center" dense justify="end" no-gutters>
  <RouterLink class="nav-link mx-2" to="/">Главная</RouterLink>
  <RouterLink class="nav-link mx-2" to="/services">Услуги</RouterLink>
  <RouterLink class="nav-link mx-2" to="/about">О компании</RouterLink>
  <RouterLink class="nav-link mx-2" to="/contacts">Контакты</RouterLink>

  <template v-if="isUserLoaded">
    <template v-if="auth.user">
      <RouterLink class="nav-link mx-2" to="/profile">Профиль</RouterLink>
      <span class="nav-link mx-2" @click="logout" style="cursor: pointer">Выйти</span>
    </template>
    <template v-else>
      <RouterLink class="nav-link mx-2" to="/login">Войти</RouterLink>
    </template>
  </template>
</v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'
import { useAccessibility } from '@/composables/useAccessibility'

const router = useRouter()
const auth = useAuthStore()
const { isDark, toggleTheme } = useThemeSwitcher()
const { isAccessible, toggleAccessibility } = useAccessibility()
const theme = useTheme()

const isUserLoaded = ref(false)

onMounted(async () => {
  await auth.fetchUser()
  isUserLoaded.value = true
})

function logout() {
  auth.logout()
  router.push('/login')
}

watch(
  () => theme.global.name.value,
  (newTheme, oldTheme) => {
    const html = document.documentElement
    if (oldTheme) html.classList.remove(`theme-${oldTheme}`)
    if (newTheme) html.classList.add(`theme-${newTheme}`)
  },
  { immediate: true }
)
</script>



<style scoped>
.app-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 100, 0, 0.05);
  height: 86px;
  padding: 0 16px;
  color: #2e7d32;
}

.dark-header {
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
  box-shadow: none;
  color: #A5D6A7;
}

.nav-link {
  color: #2e7d32;
  font-weight: 500;
  transition: color 0.3s;
  text-decoration: none;
}

.nav-link:hover {
  color: #1b5e20;
}

.dark-header .nav-link {
  color: #2E7D32;
}

.dark-header .nav-link:hover {
  color: #81c784;
}

.logo-link {
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
}
</style>
