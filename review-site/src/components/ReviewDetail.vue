<template>
    <div>
      <h1>{{ review.title.rendered }}</h1>
      <p v-html="review.content.rendered"></p>
      <p><strong>Rating:</strong> {{ review.acf.rating }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        review: {}
      };
    },
    mounted() {
      const reviewId = this.$route.params.id;
      axios.get(`https://your-site-url/wp-json/wp/v2/review/${reviewId}`)
        .then(response => {
          this.review = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
  