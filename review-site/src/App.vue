<template>
  <div id="app">
    <h1>Review List</h1>
    <!-- reviewList 컴포넌트 사용 -->
    <ReviewList />
  </div>
</template>

<script>
// reviewList 컴포넌트 import
import ReviewList from './components/ReviewList.vue'

export default {
  name: 'App',
  components: {
    ReviewList // 컴포넌트 등록
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
