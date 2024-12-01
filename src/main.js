import { createApp } from 'vue'
import './assets/style/main.css'
import App from './views/App/App.vue'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Observer from "mobx-vue-lite";
import '@/common/plugins/interceptor'

let app = createApp(App)
app.use(router)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(Observer)

app.mount('#app')