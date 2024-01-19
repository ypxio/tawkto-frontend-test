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
          <CategoryCard
            v-bind="category"
          />
        </div>
      </div>
      <div id="mainbar">
        <ul id="articles">
          <li v-for="article in articles">
            <div class="article">
              <div class="article__icon">
                <i class="fa fa-file fa-lg" />
              </div>
              <div class="article__content">
                <h3>{{ article.title }}</h3>
                <span>Updated {{ article.updatedOn }}</span>
              </div>
              <div class="article__extra">
                <i class="fa fa-chevron-right fa-lg" />
              </div>
            </div>

          </li>
        </ul>
      </div>
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
    #articles {
      padding: 0;
      margin: 0;
      list-style-type: none;
      .article {
        padding: 20px;
        border: 1px solid #eeeeee;
        background: white;
        display: flex;
        width: 100%;
        margin-bottom: 18px;
        border-radius: 4px;
        &__icon {
          width: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: $green;
          }
        }
        &__content {
          flex-grow: 1;
          h3 {
            margin: 0;
            font-size: 20px;
            font-weight: normal;
            line-height: 24px;
          }
          span {
            font-size: 11px;
            color: $text-gray;
            line-height: 22px;
          }
        }
        &__extra {
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            color: $green;
          }
        }
      }
    }
  }
</style>