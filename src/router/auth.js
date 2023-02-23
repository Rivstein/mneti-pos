/**
 * Auth routes array
 */

const routes = [
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/RegisterView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/LoginView.vue')
    },
    {
        path: '/admin-login',
        name: 'admin login',
        component: () => import('@/views/auth/AdminLogin.vue')
    }
];

export default routes;