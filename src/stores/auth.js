// src/stores/auth.js
import { defineStore } from 'pinia'
import axios from '@/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    async fetchUser() {
      if (!this.token) return
      try {
        const res = await axios.get('https://klever.onrender.com/api/auth/me', {
          headers: { Authorization: `Bearer ${this.token}` },
        })
        this.user = res.data
      } catch {
        this.logout()
      }
    },
    login(token) {
      this.token = token
      localStorage.setItem('token', token)
      this.fetchUser()
    },
    logout() {
      this.user = null
      this.token = ''
      localStorage.removeItem('token')
    },
  },
})
