import Vue from 'vue'
import Router from 'vue-router'
const _import = file => () => import('@/views/' + file + '.vue')
import Home from '@/views/home.vue';

Vue.use(Router);

export const routerMaps = [
    {
        path: '',
        name: '',
        redirect: '/home',
        meta: {

        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

const router = new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: routerMaps
});

export default router;