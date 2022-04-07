import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
        },
        {
            path:'/lien-he',
            name: 'contact',
            component:()=>import('@/pages/Contact.vue')
        },
        {
            path:'/dang-nhap',
            name:'login',
            component:()=>import('@/pages/Login.vue')
        }
    ],
    mode: "history"
})
