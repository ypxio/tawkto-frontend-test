<template>
  <ul id="articles">
    <li v-for="article in publishedArticles">
      <category-article-item v-bind="article" />
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import dataJSON from '../../../../data/data.json'
import CategoryArticleItem from './CategoryArticleItem.vue'
export default {
  components: {
    CategoryArticleItem
  },
  data: function() {
    return {
      articles: []
    }
  },
  mounted: async function() {
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
        if (process.env.NODE_ENV === 'development') {
          axios.get('http://localhost:9000/api/articles')
            .then(response => resolve(response.data))
            .catch(err => reject(err))
        } else {
          resolve(dataJSON.articles)
        }
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