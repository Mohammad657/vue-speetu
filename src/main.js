import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMobileDetection from "vue-mobile-detection";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(VueMobileDetection).use(store).use(router).mount('#app')
