import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
import 'bootstrap/dist/css/bootstrap.min.css'; // 确保 CSS 加载
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 确保 Bootstrap JS 正确加载

app.use(createPinia())
app.use(router)

app.mount('#app')
