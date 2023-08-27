import { createRouter, createWebHistory } from 'vue-router'
import PickTriviaType from '../views/PickTriviaType.vue'
import HomePage from '../views/HomePage.vue'
import EasyTrivia from '../components/EasyTriviaComponents/EasyTrivia.vue'
import HardTrivia from '../components/HardTriviaComponents/HardTrivia.vue'
import Timer from '../components/HardTriviaComponents/Timer.vue'

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/pickTriviaType',
    name: 'PickTriviaType',
    component: PickTriviaType
  },
  {
    path: '/easyTrivia',
    name: 'easyTrivia',
    component: EasyTrivia
  },
  {
    path: '/hardTrivia',
    name: 'hardTrivia',
    component: HardTrivia
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
