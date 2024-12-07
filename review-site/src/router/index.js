
import { createRouter, createWebHistory } from 'vue-router';
import ReviewList from '../components/ReviewList.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ReviewList, 
  },
  // 라우팅 추가는 여기
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
