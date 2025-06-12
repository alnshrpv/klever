import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactsView from '@/views/ContactsView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import UserProfile from '@/views/UserProfile.vue' 

const routes = [
  { path: '/', component: HomeView },
  { path: '/services', component: ServicesView },
  { path: '/contacts', component: ContactsView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  {path: '/profile', component: UserProfile }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
