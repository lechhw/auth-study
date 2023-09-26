import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const fixRoutes = [
    {
        // 서브 URL없는 경우 Home(환경설정 홈경로)으로 리다이렉트
        path: '/',
        redirect: '/dashboard',
        // meta: {},
    },
    {
        // 로그인
        path: '/user/login',
        name: 'login',
        component: () => import('@/view/user/login'),
        // meta: { auth: true },
        // beforeEnter: isAuthLogin,
    },
    {
        // 회원가입
        path: '/user/register',
        name: 'register',
        component: () => import('@/view/user/register'),
        // meta: { auth: true },
        // beforeEnter: isAuthLogin,
    },
    {
        // 대시보드
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/view/dashboard'),
        // meta: {},
    },
];

let router = new Router({
    base: process.env.VUE_APP_BASE_URL,
    mode: 'history',
    routes: fixRoutes,
});

export default router;
