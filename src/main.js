import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'
import Main from './components/Main.vue'
import Login from './components/Login.vue'

import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import router from "./router";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component("Menubar", Menubar)
    .mount('#app')



