<template>
  <div v-if="review">
    <h2>{{ review.title.rendered }}</h2>
    <p>{{ review.content.rendered }}</p>
    <p><strong>Rating: </strong>{{ review.rating }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],  
  data() {
    return {
      review: null, 
    };
  },
  created() {
    if (this.id) {
      fetch(`http://dev-movies-review-site.pantheonsite.io/wp-json/wp/v2/review/${this.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.review = data; 
        })
        .catch((error) => console.log(error));
    }
  }
};
</script>
