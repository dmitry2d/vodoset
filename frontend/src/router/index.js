
import {createRouter, createWebHistory} from 'vue-router'
import indexView from '@/views/index.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: indexView
        }
    ]
})

export default router;