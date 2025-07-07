import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import './style.css'
import vuetify from "./plugins/vuetify.js";

createApp(App)
    .use(vuetify)
    .mount('#app')
