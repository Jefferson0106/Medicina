import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DaisborQa from '../views/DaisborQa.vue'
import ReguistroQdes from '../views/ReguistroQdes'
import TabletaINfom from '../views/TabletaINfom'
import EditarQre from '../views/EditarQre'
import PublicidaDad from '../views/PublicidaDad'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/daisborqa',
    name: '/DaisborQa',
    component: DaisborQa
  },
  {
    path: '/ReguistroQdes',
    name: '/ReguistroQdes',
    component: ReguistroQdes
  },
  {
    path: '/TabletaINfom',
    name: '/TabletaINfom',
    component: TabletaINfom
  },
  {
    path: '/EditarQre/:id',
    name: '/EditarQre',
    component: EditarQre
  },
  {
    path: '/PublicidaDad',
    name: '/PublicidaDad',
    component: PublicidaDad
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
