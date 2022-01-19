import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/municipio',
    name: 'Municipio',
    component: () => import(/* webpackChunkName: "municipio" */ '../views/Municipio.vue')
  },
  {
    path: '/normatividad',
    name: 'Normatividad',
    component: () => import(/* webpackChunkName: "normatividad" */ '../views/Normatividad.vue')
  },
  {
    path: '/tramites',
    name: 'Tramites',
    component: () => import(/* webpackChunkName: "tramites" */ '../views/Tramites.vue')
  },
  {
    path: '/transparencia',
    name: 'Transparencia',
    component: () => import(/* webpackChunkName: "transparencia" */ '../views/Transparencia.vue')
  },
  {
    path: '/whitepage',
    name: 'WhitePage',
    component: () => import(/* webpackChunkName: "whitepage" */ '../views/WhitePage.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
