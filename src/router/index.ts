import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import WebDev from '../views/WebDev.vue';
import SoundDesign from '../views/SoundDesign.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/webdev',
      name: 'Web Dev',
      component: WebDev,
    },
    {
      path: '/sounddesign',
      name: 'Sound Design',
      component: SoundDesign,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'Home',
      component: Home,
    }
  ],
  scrollBehavior() {
    window.setTimeout(() => { window.scrollTo(0, 0); }, 200);
  },
});
