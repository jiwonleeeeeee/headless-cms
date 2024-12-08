<template>
  <div>
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="search review..." 
      @input="filterReviews" 
    />

    <ul>
      <li v-for="review in filteredReviews" :key="review.id">
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
      reviews: [],        
      searchQuery: '',   
      filteredReviews: [] 
    };
  },
  mounted() {
    axios.get('http://dev-movies-review-site.pantheonsite.io/wp-json/wp/v2/review?per_page=20')
      .then(response => {
        console.log(response.data);
        this.reviews = response.data;  
        this.filteredReviews = this.reviews;  
      })
      .catch(error => {
        console.error("There was an error fetching the reviews:", error);
      });
  },
  methods: {
    filterReviews() {
      const query = this.searchQuery.toLowerCase();  
      this.filteredReviews = this.reviews.filter(review =>
        review.title.rendered.toLowerCase().includes(query)  
      );
    }
  }
}
</script>

<style scoped>
input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
