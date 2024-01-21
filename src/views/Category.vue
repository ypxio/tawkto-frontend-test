<template>
  <div>
    <div id="topbar" v-show="category">
      <breadcrumb
        
        :items="[
          {
            label: 'All categories',
            onClick: function() {
              $router.back()
            }
          },
          { label: title }
        ]"
      />
    </div>
    <div id="content">
      <div id="sidebar">
        <category-profile-card v-bind="category" />
      </div>
      <div id="mainbar">
        <category-article-list />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dataJSON from '../../data/data.json'
import RegularCard from '../components/RegularCard.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import CategoryProfileCard from '../modules/category/components/CategoryProfileCard.vue'
import CategoryArticleList from '../modules/category/components/CategoryArticleList.vue'
export default {
  components: {
    RegularCard,
    Breadcrumb,
    CategoryArticleList,
    CategoryProfileCard
  },
  data: function() {
    return {
      category: undefined,
      title: '',
      breadcrumbItems: []
    }
  },
  mounted: async function() {
    this.category = await this.getCategory(this.$route.params.id)
    this.title = this.category.title
  },
  methods: {
    getCategory(id) {
      return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'development') {
          axios.get('http://localhost:9000/api/category/' + id)
            .then(response => resolve(response.data))
            .catch(err => reject(err))
        } else {
          const category = dataJSON.categories.find(c => c.id === id)
          resolve(category)
        }
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
  padding-bottom: 60px;
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
  }
  #mainbar {
    width: 100%;
    @include breakpoint(md) { width: 60% }
    @include breakpoint(lg) { width: 70% }
  }
}
</style>