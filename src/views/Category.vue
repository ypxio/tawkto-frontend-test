<template>
  <div>
    <div id="topbar">
      <breadcrumb :items="breadcrumbItems" />
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
      breadcrumbItems: [
        {
          label: 'All categories',
          onClick: () => $router.back()
        }
      ]
    }
  },
  async mounted() {
    this.category = await this.getCategory(this.$route.params.id)
    this.breadcrumbItems.push(
      {
        label: this.category.title
      },
    )
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
  @import '../scss/_mixins.scss';
  #topbar {
    padding: 21px 0;
  }
  #content {
    display: flex;
    flex-direction: column;
    @include breakpoint(md) {
      flex-direction: row;
    }
    width: 100%;
    gap: 20px;
    @include breakpoint(md) { gap: 40px }
    @include breakpoint(lg) { gap: 60px }
    #sidebar {
      width: 100%;
      @include breakpoint(md) { width: 40% }
      @include breakpoint(lg) { width: 30% }
      #category-card {
        height: 345px;
      }
    }
    #mainbar {
      width: 100%;
      @include breakpoint(md) { width: 60% }
      @include breakpoint(lg) { width: 70% }
    }
  }
</style>