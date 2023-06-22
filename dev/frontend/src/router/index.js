
import {createRouter, createWebHistory} from 'vue-router'

import homeView from '@/views/home.vue'
import loginView from '@/views/login.vue'
import settingsView from '@/views/settings.vue'
import usersView from '@/views/admin/users.vue'
import indexView from '@/views/index.vue'

import beforeEach from './beforeEach'


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
            component: loginView,
            meta: {
                noHeader: true
            }
        },
        {
            path: '/index',
            name: 'Index',
            component: indexView
        },
        {
            path: '/index/users',
            name: 'Users',
            component: usersView
        },
        {
            path: '/settings',
            name: 'Settings',
            component: settingsView
        }
    ]
})

router.beforeEach (beforeEach);

export default router;