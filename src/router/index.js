import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectSection from '../components/ProjectSection.vue'
import TalktousSection from '../components/TalktousSection.vue'
// import solutions from '../views/Solutions.vue'
// import services from '../views/Services.vue'
// import contact from '../views/Contact.vue'

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
      component: AboutSection,
    },
    {
      path: '/expertises',
      name: 'expertises',
      component:ServicesSection,
    },
    {
      path: '/projects',
      name: 'projects',
      component:ProjectSection,
    },
    {
      path: '/contact',
      name: 'contact',
      component:TalktousSection,
    },
   
  ],
})

export default router
