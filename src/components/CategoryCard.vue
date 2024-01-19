<template>
	<div
    class="card"
    @click="onClick"
  >
    <div class="card__icon">
      <i :class="`fa fa-3x fa-${$props.icon || 'circle'}`" />
    </div>
    <h3 class="card__title">{{ $props.title }}</h3>
    <div class="card__meta">
      <span class="card__meta-primary">{{ $props.totalArticle }} articles</span>
      <span
        class="card__meta-secondary"
        :title="`last update on ${$options.filters.formatDate(this.$props.updatedOn)}`"
      >
        Last update {{ this.$props.updatedOn | humanlyDiff }}
      </span>
    </div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
export default {
  props: [
    'id',
    'icon',
    'title',
    'totalArticle',
    'updatedOn'
  ],
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
      this.$emit('onClick', this.$props.id)
    },
  }
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';
  .card {
    width: 100%;
    height: 100%;
    border: 1px solid #eeeeee;
    background-color: white;
    text-align: center;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      border: 1px solid $green;
    }
    &__icon {
      color: $green;
      min-height: 48px;
    }
    &__title {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      margin: 20px 0;
    }
    &__meta {
      display: flex;
      flex-direction: column;
      &-primary {
        font-weight: 400;
        color: $green;
        font-size: 13px;
        line-height: 16px;
      }
      &-secondary {
        font-weight: 400;
        color: $text-gray;
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
</style>