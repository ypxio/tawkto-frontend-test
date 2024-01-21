<template>
  <regular-card
    :icon="$props.icon"
    :hoverable="true"
    @click="onClick"
    class="category-grid-item-card"
  >
    <template v-slot:title>
      <h3 class="category-grid-item-card__title">
        {{ $props.title }}
      </h3>
    </template>
    <template v-slot:subtitle>
      <div class="category-grid-item-card__meta">
        <span class="category-grid-item-card__meta--primary">
          {{ $props.totalArticle }} articles
        </span>
        <span
          class="category-grid-item-card__meta--secondary"
          :title="`last update on ${$options.filters.formatDate($props.updatedOn)}`"
        >
          Last update {{ $props.updatedOn | humanlyDiff }}
        </span>
      </div>
    </template>
  </regular-card>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import RegularCard from '../../../components/RegularCard.vue';
export default {
  components: { RegularCard },
  props: ['id', 'icon', 'title', 'totalArticle', 'updatedOn'],
  created() {
    dayjs.extend(relativeTime);
    dayjs.extend(localizedFormat)
  },
  filters: {
    formatDate: (date) => {
      return dayjs(date).format('llll');
    },
    humanlyDiff: (date) => {
      if (!date){
        return null;
      }
      return dayjs(date).fromNow();
    }
  },
  methods: {
    onClick() {
      this.$router.push('/category/' + this.$props.id)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables.scss';
.category-grid-item-card {
  &__title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0;
  }
  &__meta {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 21px;
    &--primary {
      font-weight: 400;
      color: $green;
      font-size: 13px;
      line-height: 16px;
    }
    &--secondary {
      font-weight: 400;
      color: $text-gray;
      font-size: 11px;
      line-height: 13px;
    }
  }

}
</style>