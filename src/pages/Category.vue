<template>
  <div>
    <div id="breadcrumb">
      <ul>
        <li>
          <a href="#" @click="$router.back()">all categories</a>
        </li>
        <li>
          Getting started
        </li>
      </ul>
    </div>
    <div id="content">
      <div id="sidebar">
        <pre>
          {{ JSON.stringify(category, null, 2) }}
        </pre>
      </div>
      <div id="mainbar">
        <pre>
          {{ JSON.stringify(articles, null, 2) }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      category: {},
      articles: []
    }
  },
  async created() {
    console.log(this.$route)
  },
  async mounted() {
    this.category = await this.getCategory(this.$route.params.id)
    this.articles = await this.getArticles()
  },
  methods: {
    getCategory(id) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:9000/api/category/' + id)
          .then(response => resolve(response.data))
          .catch(err => reject(err))
      })
    },
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
  pre {
    white-space: pre-wrap;    
  }
	#breadcrumb {
    background: red;
    ul {
      margin: 0;
      li {
        display: inline;

      }
    }
  }
  #content {
    display: flex;
    width: 100%;
    background: green;
    gap: 60px;
    #sidebar {
      background: blue;
      width: 30%;
    }
    #mainbar {
      background: yellow;
      width: 70%;
    }
  }
</style>