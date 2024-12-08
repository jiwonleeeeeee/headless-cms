<template>
  <div id="app">
    <NavigationBar />
    <h1>Movie Review</h1>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>


<style>
#app {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

h1 {
  margin-top: 20px;
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
}
</style>