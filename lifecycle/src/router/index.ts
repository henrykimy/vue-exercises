import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import OptionsView from '../views/OptionsView.vue';
import SetupView from '../views/SetupView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Options API View',
        component: OptionsView
    },

    {
        path: '/setup',
        name: 'Script Setup View',
        component: SetupView
    },
]

export const router = createRouter({
    history: createWebHistory(''),
    routes
})