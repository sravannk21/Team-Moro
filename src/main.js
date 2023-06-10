import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './routers'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();