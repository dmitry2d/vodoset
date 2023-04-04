
import {createRouter, createWebHistory} from 'vue-router'
import authView from '@/views/auth.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: authView
        }
    ]
})

export default router;