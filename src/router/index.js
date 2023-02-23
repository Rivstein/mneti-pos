import { createRouter, createWebHistory } from 'vue-router'

// routes
import authRoutes from '@/router/auth.js'
import adminRoutes from '@/router/admin.js'


// concat routes into single array (merge arrays)
const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/AboutView.vue')
	}
].concat(
	authRoutes,
	adminRoutes
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
