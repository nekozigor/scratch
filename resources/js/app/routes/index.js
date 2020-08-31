import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

import {Login, Index, Register, ResetPassword} from '../pages'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta:{auth: false}
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta:{auth: false}
    },
    {
        path: '/reset-password',
        component: ResetPassword,
        name: 'resetPassword',
        meta:{auth: false}
    },
    {
        path: '/',
        component: Index,
        name: 'index',
        meta:{auth: false}
    }
]

const router = new Router({
    routes
})

router.beforeEach(beforeEach)

export default router;