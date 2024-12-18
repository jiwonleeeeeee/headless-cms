import { createRouter, createWebHistory } from 'vue-router';
import ReviewList from '../components/ReviewList.vue';
import ReviewDetail from '../components/ReviewDetail.vue';

const routes = [
  {
    path: '/',
    name: 'ReviewList',
    component: ReviewList
  },
  {
    path: '/review/:id',
    name: 'ReviewDetail',
    component: ReviewDetail,
    props: true  
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
