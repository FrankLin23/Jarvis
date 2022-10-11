import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    {
      path: '/layout',
      component: () => import('@/layout/index.vue'),
    },
  ],
});

export default router;
