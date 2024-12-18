import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/Login.vue'

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
      name: 'home',
      component: Main,
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
