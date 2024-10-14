import { createApp } from 'vue'
import './assets/style/main.css'
import App from './App.vue'
import router from "./router/index";

let app = createApp(App)
app.mount('#app')
app.use(router)
