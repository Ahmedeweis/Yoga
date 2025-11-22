import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/GameView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/resulte/:finalScore',
    name: 'result',
    component: () => import('../views/ResultScreen.vue')
  },
  {
    path: '/remm',
    name: 'remm',
    component: () => import('../views/remm.vue')
  },
  {
    path: '/all-questions',
    name: 'all-questions',
    component: () => import('../views/AllQuestionsView.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
