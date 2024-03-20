import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Faire apparaitre la page depuis le haut
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});
