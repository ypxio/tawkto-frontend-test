<template>
  <div>
    <div v-if="this.category">
      <breadcrumb
        :items="[
          {
            label: 'All categories',
            onClick: () => $router.back()
          },
          {
            label: this.category.title
          },
        ]"
      />
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
import Breadcrumb from '../components/Breadcrumb.vue'
import CategoryArticleList from '../modules/category/components/CategoryArticleList.vue'
export default {
  components: {
    Card,
    Breadcrumb,
    CategoryArticleList
  },
  data() {
    return {
      category: undefined,
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