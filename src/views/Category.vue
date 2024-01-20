<template>
  <div>
    <div id="breadcrumb">
      <ul>
        <li>
          <a href="#" @click="$router.back()">All categories</a>
        </li>
        <li>
          <i class="fa fa-chevron-right fa-xs" />
        </li>
        <li>
          {{ category.title }}
        </li>
      </ul>
    </div>
    <div id="content">
      <div id="sidebar">
        <div id="category-card">
          <Card
            v-bind="category"
          />
        </div>
      </div>
      <div id="mainbar">
        <CategoryArticleList />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card.vue'
import CategoryArticleList from '../modules/category/components/CategoryArticleList.vue'
export default {
  components: { Card, CategoryArticleList },
  data() {
    return {
      category: {},
    }
  },
  async mounted() {
    this.category = await this.getCategory(this.$route.params.id)
  },
  methods: {
    getCategory(id) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:9000/api/category/' + id)
          .then(response => resolve(response.data))
          .catch(err => reject(err))
      })
    },
  }
}

</script>

<style lang="scss" scoped>
  @import '../scss/_variables.scss';
  pre {
    white-space: pre-wrap;    
  }
	#breadcrumb {
    margin: 21px 0;
    ul {
      margin: 0;
      padding: 0;
      li {
        display: inline;
        font-size: 13px;
        color: $text-gray;
        margin-right: 14px;
        a {
          color: $green;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  #content {
    display: flex;
    width: 100%;
    gap: 60px;
    #sidebar {
      width: 30%;
      #category-card {
        height: 345px;
      }
    }
    #mainbar {
      width: 70%;
    }
  }
</style>