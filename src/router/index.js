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
    {
      path: '/home/:id',
      component: () => import('@/views/HomePage.vue'), // 코드 스플리팅
    },
    {
      path: '/bulletin',
      component: () => import('@/views/BulletinPage.vue'), // 코드 스플리팅
    },
    {
      path: '/study/:type/:id',
      component: () => import('@/views/StudyPage.vue'), // 코드 스플리팅
    },
    {
      path: '/attend',
      component: () => import('@/views/AttendPage.vue'), // 코드 스플리팅
    },
    {
      path: '/attend/check',
      component: () => import('@/views/AttendCheckPage.vue'), // 코드 스플리팅
    },
    // {
    //   path: '*',
    //   component: () => import('@/views/NotFoundPage.vue'),
    // },
  ],
});
