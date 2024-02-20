import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import GalleryView from '../views/GalleryView.vue'
import StatioView from '../views/StatioView.vue'
import MyLogoView from '../views/MyLogoView.vue'
import CampusView from '../views/CampusView.vue'
import PrimitivismView from '../views/PrimitivismView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {   path: '/',                 name: 'home',              component: HomeView            },
    {   path: '/about',            name: 'about',             component: AboutView           },
    {   path: '/contact',          name: 'contact',           component: ContactView         },
    {   path: '/gallery',          name: 'gallery',           component: GalleryView         },
    {   path: '/statio',           name: 'statio',            component: StatioView          },
    {   path: '/mylogo',           name: 'my logo',           component: MyLogoView          },
    {   path: '/campus',           name: 'campus',            component: CampusView          },
    {   path: '/primitivism',      name: 'primitivism',       component: PrimitivismView     },
  ]
})

export default router