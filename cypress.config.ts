import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Включение плагинов или событий
      return config;
    },
    baseUrl: 'http://localhost:5173', // Пример настройки baseUrl
  },
});
