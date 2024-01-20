<template>
  <ul id="articles">
    <li v-for="article in publishedArticles">
      <CategoryArticleItem v-bind="article" />
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import CategoryArticleItem from './CategoryArticleItem.vue'
export default {
  components: {
    CategoryArticleItem
  },
  data() {
    return {
      articles: []
    }
  },
  async mounted() {
    this.articles = await this.getArticles()
  },
  computed: {
    publishedArticles() {
      return this.articles
        .filter(d => d.status === 'published')
    },
  },
  methods: {
    getArticles() {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:9000/api/articles')
          .then(response => resolve(response.data))
          .catch(err => reject(err))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #articles {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>