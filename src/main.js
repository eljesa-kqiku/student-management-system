import { createApp } from 'vue'
import './assets/style/main.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import {Observer} from "mobx-vue-lite";

let app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlusIconsVue)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// app.use(Observer)

app.mount('#app')