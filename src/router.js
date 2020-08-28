import Vue from 'vue'
import VueRouter from 'vue-router'

import creator from './components/pages/Creator'
import configure from './components/pages/Configure'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    base:'',
    routes:[
        {
            path: '/',
            component: configure
        },
        {
            path: '/rysuj',
            component: creator
        }
    ]
})