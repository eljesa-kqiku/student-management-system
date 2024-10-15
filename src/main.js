import { createApp } from 'vue'
import './assets/style/main.css'
import App from './App.vue'
import router from "./router";

let app = createApp(App)
app.use(router)

app.mount('#app')