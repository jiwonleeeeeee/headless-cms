<template>
  <div>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <router-link :to="`/review/${review.id}`">{{ review.title.rendered }}</router-link>
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
    axios.get('http://dev-movies-review-site.pantheonsite.io/wp-json/wp/v2/review')
      .then(response => {
        this.reviews = response.data;  
      })
      .catch(error => {
        console.error("There was an error fetching the reviews:", error);
      });
  }
}
</script>
