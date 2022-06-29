import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CalorieCalculator from '../views/CalorieCalculator.vue'
import BasicNutritionKnowledge from '../views/BasicNutritionKnowledge.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Calculator',
    name: 'Calorie Calculator',
    component: CalorieCalculator
  },
  {
    path: '/Nutrition',
    name: 'Nutrition Knowledge',
    component: BasicNutritionKnowledge
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
