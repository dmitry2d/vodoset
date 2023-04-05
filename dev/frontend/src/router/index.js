
import {createRouter, createWebHistory} from 'vue-router'
import homeView from '@/views/home.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: homeView
        }
    ]
})

export default router;