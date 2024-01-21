<template>
  <div id="grid">
    <div v-for="category in categories">
      <category-grid-item v-bind="category" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dataJSON from '../../../../data/data.json'
import CategoryGridItem from './CategoryGridItem.vue';
export default {
  components: { CategoryGridItem },
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
        if (process.env.NODE_ENV === 'development') {
          axios.get('http://localhost:9000/api/categories')
            .then(response => {
              resolve(response.data);
            })
            .catch(err => {
              reject(err);
            })
        } else {
          resolve(dataJSON.categories)
        }
      })
    },
    onClick(id) {
      this.$router.push('/category/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/_mixins.scss';
#grid {
  padding: 20px 0;
  gap: 20px;
  @include breakpoint(sm) {
    padding: 60px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
  // padding: 60px 0;
  &>div {
    min-height: 220px;
  }
}
</style>