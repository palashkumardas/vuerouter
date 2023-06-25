import {createRouter,createWebHistory } from 'vue-router';
import homePage from '../pages/homePage.vue'
import aboutPage from '../pages/aboutPage.vue';
import profilePage from '../pages/profilePage.vue';

const routes = [
    { path: '/', name:'Home', component: homePage },
    { path: '/about', name:'About', component: aboutPage },
    { path: '/profile', name:'Profile', component: profilePage }

  ]
  

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  export default router
  