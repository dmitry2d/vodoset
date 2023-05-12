import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/styles/global.less'

console.log ('Welcome to Vodoset 2.0')

createApp(App)
    .use(router)
    .mount('#app')

