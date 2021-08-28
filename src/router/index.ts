import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import WebDev from '../views/WebDev.vue';
import SoundDesign from '../views/SoundDesign.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sounddesign',
    name: 'Sound Design',
    component: SoundDesign,
  },
  {
    path: '/webdev',
    name: 'Web Dev',
    component: WebDev,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
