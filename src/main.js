import { createApp } from 'vue'
import App from './App.vue'

// styles
import './assets/styles/scss/main.scss'
import './assets/styles/css/loader.css'

import store from './store'
import router from './router'

const app = createApp(App)

app
.use(router)
.use(store)
.mount('#app')
