import { createRouter, createWebHistory } from 'vue-router';
import ReviewList from '../components/ReviewList.vue';
import ReviewDetail from '../components/ReviewDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: ReviewList },
  { path: '/review/:id', name: 'ReviewDetail', component: ReviewDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
