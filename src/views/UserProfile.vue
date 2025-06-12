<template>
  <v-container>
    <h1>Профиль пользователя</h1>
    <v-card class="pa-4 mt-4">
      <p><strong>Имя:</strong> {{ user?.name || 'Загрузка...' }}</p>
    <p><strong>Email:</strong> {{ user?.email || 'Загрузка...' }}</p>
    </v-card>
    <h2 class="mt-6">Ваши заявки</h2>
    <v-card v-for="order in orders" :key="order._id" class="my-2 pa-4">
      <p><strong>Тип заявки:</strong> {{ order.type }}</p>
      <p><strong>Сообщение:</strong> {{ order.message }}</p>
      <p><strong>Дата:</strong> {{ new Date(order.createdAt).toLocaleString() }}</p>
    </v-card>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from '@/axios'

const user = ref({})
const orders = ref([])

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    const res = await axios.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    user.value = res.data

    const userId = res.data._id 

const ordersRes = await axios.get(`/api/orders/user/${userId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

    orders.value = ordersRes.data.orders
  } catch (err) {
    console.error('Ошибка при загрузке профиля:', err)
  }
})

</script>
