import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#4d730f',
            secondary: '#4d730f',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#4d730f',
            secondary: '#4d730f',
          },
        },
      },
  },
})
