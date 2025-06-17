<template>
  <v-container class="py-16 d-flex justify-center align-center" style="height: 738px;">
    <v-card class="pa-8" max-width="400" elevation="3">
      <h2 class="text-h5 mb-4 text-center">Вход</h2>
      <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email" required></v-text-field>
        <v-text-field v-model="password" label="Пароль" type="password" required></v-text-field>
        <v-btn type="submit" color="primary" block class="mt-4">Войти</v-btn>
        <RouterLink to="/register">
          <v-btn text block class="mt-2">Нет аккаунта?<br> Зарегистрироваться</v-btn>
        </RouterLink>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth' 

const router = useRouter()
const auth = useAuthStore() 

const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const res = await axios.post('https://klever.onrender.com/api/auth/login', {
      email: email.value,
      password: password.value,
    })

    await auth.login(res.data.token)

    alert('Успешный вход')
    router.push('/profile')

  } catch (err) {
    error.value = err.response?.data?.message || 'Ошибка входа'
    alert(`Ошибка: ${error.value}`)
  }
}
</script>




<style scoped>
.v-card {
  border-radius: 16px;
  /* Тень с использованием переменной цвета primary с прозрачностью */
  box-shadow: 0 6px 20px rgba(var(--v-theme-primary-rgb, 76, 175, 80), 0.15);
  background-color: var(--v-theme-surface);
  color: var(--v-theme-on-surface);
}

h2 {
  color: #2E7D32;
}

.v-btn {
  font-weight: 500;
    text-decoration: none;
    background-color: rgb(var(--v-theme-primary)) !important;
    color: rgb(var(--v-theme-on-primary)) !important;
}

.v-btn[text] {
  white-space: normal !important;
  word-break: break-word;
  line-height: 1.4;
  text-align: center;
  text-transform: none;
  font-size: 14px;
  font-weight: 500;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%; /* гарантирует, что текст не сжимается */
  display: inline-block;
}

/* Дополнительно — применим стиль к обёртке RouterLink, если кнопка внутри не тянется */
a > .v-btn {
  white-space: normal !important;
}



/* При наведении цвет текста кнопки меняется на secondary */
.v-btn[text]:hover {
  color: var(--v-theme-secondary);
}
</style>
