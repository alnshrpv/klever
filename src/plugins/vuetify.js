import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#4CAF50',
    secondary: '#C8E6C9',
    background: '#F1F8E9',
    surface: '#FFFFFF',
    error: '#f44336',
    info: '#2196f3',
    success: '#4CAF50',
    warning: '#ff9800',
  },
}

const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: '#81C784',
    secondary: '#2E7D32',
    background: '#121212',
    surface: '#1E1E1E',
    error: '#EF9A9A',
    success: '#A5D6A7',
    info: '#4FC3F7',
    warning: '#FFD54F',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
})
