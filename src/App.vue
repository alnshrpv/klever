<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="d-md-none"
      absolute
    >
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to !== '/logout' ? item.to : undefined"
          router
          link
          @click="handleNavItemClick(item)"
          style="cursor: pointer"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <HeaderComp @toggle-drawer="drawer = !drawer" />
    <v-main>
      <router-view />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const { user } = storeToRefs(auth)
const router = useRouter()
const drawer = ref(false)

const navItems = computed(() => {
  const base = [
    { title: 'Главная', to: '/' },
    { title: 'Услуги', to: '/services' },
    { title: 'О компании', to: '/about' },
    { title: 'Контакты', to: '/contacts' }
  ]

  if (user.value) {
    return [...base, { title: 'Профиль', to: '/profile' }, { title: 'Выйти', to: '/logout' }]
  } else {
    return [...base, { title: 'Войти', to: '/login' }]
  }
})

function handleNavItemClick(item) {
  drawer.value = false
  if (item.to === '/logout') {
    auth.logout()
    router.push('/login')
  }
}
</script>

<style scoped>
.v-list-item-title {
  font-weight: 500;
  color: #2e7d32;
}
</style>
