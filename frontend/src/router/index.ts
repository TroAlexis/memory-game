import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Start from '../views/Start.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Start,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
