import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './App'
import test from './components/test'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    base:'',
    routes:[
        {
            path:'/',
            component: app
        },
        {
            path:'/test',
            component: test
        }
    ]
})