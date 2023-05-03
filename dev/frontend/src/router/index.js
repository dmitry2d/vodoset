
import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'
import homeView from '@/views/home.vue'
import loginView from '@/views/login.vue'
import usersView from '@/views/users.vue'
import settingsView from '@/views/settings.vue'

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
        },
        {
            path: '/users',
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

router.beforeEach ((to, from, next) => {
    const auth = store.session.auth ();
    if (!auth) {
        if (to.name != 'Login') {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        if (to.name == 'Login') {
            next({name: 'Home'})
        } else {
            next()
        }
    }
})

export default router;