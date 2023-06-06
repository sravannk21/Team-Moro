import HomePage from './pages/HomePage.vue'
import Services from './pages/Services.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path:'/'
    },
    {
        name: 'Services',
        component: Services,
        path: '/services'
    },
    {
        name: 'Contact',
        component: Contact,
        path: '/contact'

    },
    {
        name: 'About',
        component: About,
        path: '/about'
    },
    {
        name: 'Portfolio',
        component: Portfolio,
        path: '/portfolio'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router