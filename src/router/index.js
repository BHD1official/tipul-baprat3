import { createRouter, createWebHistory } from 'vue-router'
import PickTriviaType from '../views/PickTriviaType.vue'
import HomePage from '../views/HomePage.vue'
import OpenPage from '../views/OpenPage.vue'
import EasyTrivia from '../components/EasyTriviaComponents/EasyTrivia.vue'
import HardTrivia from '../components/HardTriviaComponents/HardTrivia.vue'
import Timer from '../components/HardTriviaComponents/Timer.vue'
import LearningScreen from '../views/LearningScreen.vue'
import ChooseTash from '../components/ChooseTash.vue'

const routes = [
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/',
    name: 'openPage',
    component: OpenPage
  },
  {
    path: '/pickTriviaType',
    name: 'pickTriviaType',
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
  },
  {
    path: '/:subject',
    name: 'learningScreen',
    component: LearningScreen,
    props: true
  },
  {
    path: '/chooseTash',
    name: 'chooseTash',
    component: ChooseTash,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
