import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import CultureView from '../views/CultureView.vue'
import InfrastructureView from '../views/InfrastructureView.vue'
import IndustriesView from '../views/IndustriesView.vue'
import TourismView from '../views/TourismView.vue'
import AboutView from '../views/AboutView.vue'
import WeatherView from '../views/WeatherView.vue'
import QuizView from '../views/QuizView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: IntroductionView,
  },
  {
    path: '/culture',
    name: 'culture',
    component: CultureView,
  },
  {
    path: '/infrastructure',
    name: 'infrastructure',
    component: InfrastructureView,
  },
  {
    path: '/industries',
    name: 'industries',
    component: IndustriesView,
  },
  {
    path: '/tourism',
    name: 'tourism',
    component: TourismView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/about/quiz',
    name: 'quiz',
    component: QuizView,
  },
  {
    path: '/introduction/weather',
    name: 'weather',
    component: WeatherView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
