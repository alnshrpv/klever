<template>
  <v-container fluid class="pa-4 contact-page">
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column gap-4">
        <v-card class="pa-4">
          <h2 class="text-h6 mb-3">Контакты</h2>
          <p><strong>Адрес:</strong> 665709, Иркутская обл., г. Братск, ул. Приморская, 49Б</p>
          <p><strong>Адрес:</strong> 665717, г. Братск, ул. Мира, 27, оф. 101</p>
          <p><strong>ИНН:</strong> 3804118269 / <strong>КПП:</strong> 380401001</p>
          <p><strong>ОГРН:</strong> 1233800005273</p>
          <p><strong>Телефон:</strong> <a href="tel:+83953216016">8 (3953) 216-016</a></p>
        </v-card>
        <v-card class="pa-4">
          <h2 class="text-h6 mb-4">Форма обратной связи</h2>
          <v-form @submit.prevent="sendMessage">
            <v-text-field label="Имя" v-model="name" :rules="[nameRule]"  required outlined/>
            <v-text-field label="Email" v-model="email" :rules="[emailRule]" required outlined/>
            <v-text-field label="Telegram (необязательно)" v-model="telegram" outlined />
            <v-textarea label="Сообщение" v-model="message" :rules="[messageRule]" required outlined rows="4" />
            <v-btn type="submit" color="primary" class="mt-4" block :disabled="!isFormValid" > Отправить </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-0" height="100%">
          <div id="map" ref="map" class="map-container" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from '@/axios' 
import L from 'leaflet'

const name = ref('')
const email = ref('')
const telegram = ref('')
const message = ref('')

const nameRule = v => !!v || 'Введите имя'
const emailRule = v => !!v && /.+@.+\..+/.test(v) || 'Введите корректный email'
const messageRule = v => !!v || 'Введите сообщение'

const isFormValid = computed(() =>
  !!name.value &&
  !!email.value &&
  /.+@.+\..+/.test(email.value) &&
  !!message.value
)

const sendMessage = async () => {
  if (!isFormValid.value) return

  try {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (!token || !userId) {
      alert('Пожалуйста, войдите в систему, чтобы отправить заявку.')
      return
    }

  await axios.post('https://klever.onrender.com/api/orders', {
  type: 'Обратная связь',
  message: message.value,
  name: name.value,
  email: email.value,
  telegram: telegram.value || null
}, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

    name.value = ''
    email.value = ''
    telegram.value = ''
    message.value = ''

    alert('Сообщение отправлено и сохранено!')
  } catch (error) {
    console.error('Ошибка при отправке заявки:', error)
    alert('Ошибка при отправке заявки')
  }
}

const map = ref(null)

onMounted(() => {
  if (!map.value) return

  const leafletMap = L.map(map.value).setView([56.1516, 101.6342], 12)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(leafletMap)

  const emojiIcon = L.divIcon({
    className: 'custom-div-icon',
    html: '<div style="font-size: 32px;">📍</div>',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  })

  L.marker([56.29715013246073, 101.75794068228916], { icon: emojiIcon })
    .addTo(leafletMap)
    .bindPopup('665709, г. Братск, ул. Приморская, 49Б')

  L.marker([56.1535110565878, 101.61977392645896], { icon: emojiIcon })
    .addTo(leafletMap)
    .bindPopup('665717, г. Братск, ул. Мира, 27, оф. 101')
})
</script>

<style scoped>
.contact-page a {
  color: var(--v-theme-primary);
  text-decoration: none;
}
.contact-page a:hover {
  text-decoration: underline;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 12px;
}
</style>
