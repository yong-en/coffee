import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        //
        // {
        //     path: '/about',
        //     name: 'about',
        //
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },
        {
            path:'/edit',
            name: 'edit',
            component: () => import(/* webpackChunkName: "about" */ './views/edit.vue')
        } ,
        {
            path:'/code',
            name: 'code',
            component: () => import(/* webpackChunkName: "about" */ './views/code.vue')
        } ,
        {
            path:'/test',
            name: 'test',
            component: () => import(/* webpackChunkName: "about" */ './views/test.vue')
        } ,
        {
            path:'/an',
            name: 'an',
            component: () => import(/* webpackChunkName: "about" */ './views/an.vue')
        } ,
        {
            path:'/par',
            name: 'par',
            component: () => import(/* webpackChunkName: "about" */ './views/par.vue')
        } ,

    ]
})
