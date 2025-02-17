import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
    {
      path: '/',
      component: Main,
	  children: [
		{
			path: '/',
			name: 'home',
			component: Dashboard,
		},
	  ],
    },
	{
		path: '/forgot-password',
		name: 'forgot-password',
		component: () => import('@/views/Forgot_password.vue'),
	},
    {
      path: '/css-check',
      name: 'css-check',
      component: () => import('@/components/css_check.vue'),
    },
  ],
})

export default router
