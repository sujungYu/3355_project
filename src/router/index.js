import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // 코드 스플리팅
    },
    // {
    //   path: '*',
    //   component: () => import('@/views/NotFoundPage.vue'),
    // },
  ],
});
