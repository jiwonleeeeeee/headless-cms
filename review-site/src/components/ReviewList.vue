<template>
    <div>
      <h1>Review List</h1>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <a :href="'/reviews/' + review.id">{{ review.title.rendered }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reviews: []
      };
    },
    mounted() {
      axios.get('https://dev-movies-review-site.pantheonsite.io/wp-json/wp/v2/review') 
        .then(response => {
          this.reviews = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
  