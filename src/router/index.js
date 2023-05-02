import { createRouter, createWebHistory } from 'vue-router'
import Restaurantes from '../components/Restaurantes.vue'
import Bares from '../components/Bares.vue'
import Description from '../components/Description.vue'
import ErrorPage from '../components/ErrorPage.vue'

const routes = [
  { path: '/Restaurantes', component: Restaurantes },
  { path: '/Bares', component: Bares },
  { path: '/Descrition', component: Description },
  { path:'/:pathMatch(.*)*', component:ErrorPage}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
