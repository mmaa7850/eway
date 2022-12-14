import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../views/Index.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'index',
        component: () => import('../views/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
