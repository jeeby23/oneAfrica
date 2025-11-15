import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import expertises from '../views/Expertises.vue'
import projects from '../views/Projects.vue'
import solutions from '../views/Solutions.vue'
import services from '../views/Services.vue'
import contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/expertises',
      name: 'expertises',
      component:expertises,
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects,
    },
    {
      path: '/solutions',
      name: 'solutions',
      component:solutions,
    },
    {
      path: '/contact',
      name: 'contact',
      component:contact,
    },
    {
      path: '/services',
      name: 'services',
      component:services,
    },
  ],
})

export default router
