<template>
  <div id="grid">
    <div v-for="category in filteredCategories">
      <CategoryCard
        v-bind="category"
        
        @onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CategoryCard from '../components/CategoryCard.vue';
export default {
  components: { CategoryCard },
  data() {
    return {
      categories: []
    }
  },
  async mounted() {
    this.categories = await this.getCategories()
  },
  computed: {
    filteredCategories() {
      return this.categories.filter(d => d.enabled)
    }
  },
  methods: {
    getCategories() {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:9000/api/categories')
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject(err);
          })
      })
    },
    onClick(id) {
      this.$router.push('/category/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
	#grid {
    margin: 60px 0;
		display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    &>div {
      min-height: 220px;
    }
	}
</style>