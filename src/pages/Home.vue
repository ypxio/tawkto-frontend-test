<template>
  <div id="grid">
    <div v-for="category in categories">
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
      originalCategories: []
    }
  },
  async mounted() {
    this.originalCategories = await this.getCategories()
  },
  computed: {
    categories() {
      return this.originalCategories
        .filter(d => d.enabled)
        .sort((a, b) => a.order - b.order)
    },
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