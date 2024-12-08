<template>
    <nav>
      <ul>
        <li><router-link to="/">Review List</router-link></li>
      </ul>
    </nav>
</template>
  
<script>
  export default {
    name: 'NavigationBar'
  }
</script>
  
<style scoped>
  nav {
    padding: 10px;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  
  li {
    padding: 10px;
  }
</style>
  