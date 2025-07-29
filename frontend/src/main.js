import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

import quasar from './plugins/quasar'

const pinia = createPinia()
createApp(App).use(pinia).use(router).use(quasar).mount('#app')
