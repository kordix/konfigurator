import Vue from 'vue'
import VueRouter from 'vue-router'

import window from './components/Window'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    base:'',
    routes:[
        {
            path:'/',
            component: window
        }
    ]
})