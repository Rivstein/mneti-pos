/**
 * Admin routes array
 */

const routes = [
    {
        path: '/admin-dashboard',
        name: 'admin dashboard',
        component: () => import('@/views/admin/DashboardView.vue')
    }
];

export default routes;