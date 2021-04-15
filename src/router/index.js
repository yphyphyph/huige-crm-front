import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/index.vue'
import LOGIN from '../views/login/index.vue'
import Brand from '../views/brand/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Home,
        children:[
            {
                path: 'brand',
                name: 'Brand',
                component: Brand
            },


        ]
    },

    {
        path: '/login',
        name: 'Login',
        component: LOGIN
    },


    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
