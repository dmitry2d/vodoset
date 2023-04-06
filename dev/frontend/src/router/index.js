
import {createRouter, createWebHistory} from 'vue-router'
import homeView from '@/views/home.vue'
import loginView from '@/views/login.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: homeView
        },
        {
            path: '/login',
            name: 'Login',
            component: loginView
        }
    ]
})

export default router;