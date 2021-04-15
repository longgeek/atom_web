import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index')
    },
    {
        path: '*',
        name: 'error',
        component: () => import('@/views/error')
    },
    {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project')
    },
    {
        path: '/project/detail:id?',
        name: 'project-detail',
        component: () => import('@/views/project-detail')
    },
    {
        path: '/event',
        name: 'event',
        component: () => import('@/views/event/event')
    },
    {
        path: '/event/detail:id?',
        name: 'event-detail',
        component: () => import('@/views/event/detail.vue')
    },
    {
        path: '/event/column:id?',
        name: 'event-column',
        component: () => import('@/views/event/column/column.vue')
    },
    {
        path: '/partner',
        name: 'partner',
        component: () => import('@/views/partner')
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import('@/views/aboutus')
    },
    {
        path: '/news/detail:id?',
        name: 'news-detail',
        component: () => import('@/views/news-detail')
    },
    {
        path: '/terms',
        name: 'terms',
        component: () => import('@/views/terms')
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: () => import('@/views/privacy')
    },
    {
        path: '/settings',
        name: 'settings',
        meta: { authRequired: true },
        component: () => import('@/views/settings')
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import('@/views/logout')
    },
]

export default routes
