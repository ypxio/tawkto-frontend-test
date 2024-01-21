<template>
  <div class="category-profile-card">
    <regular-card
      :title="$props.title"
      :subtitle="`Updated ${$options.filters.humanlyDiff(this.$props.updatedOn)}`"
      :icon="$props.icon"
      v-bind:hoverable="true"
    >
      <template v-slot:extra>
        <div class="category-profile-card__extra">
          <i class="fa fa-info-circle fa-lg" />
          <p>
            {{ $props.description }}
          </p>
        </div>
      </template>
    </regular-card>
  </div>
</template>

<script>
import RegularCard from '../../../components/RegularCard.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
export default {
  components: { RegularCard },
  props: ['title', 'icon', 'updatedOn', 'description'],
  created() {
    dayjs.extend(relativeTime);
  },
  filters: {
    humanlyDiff: (date) => {
      if (!date){
        return null;
      }
      return dayjs(date).fromNow();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables.scss';
.category-profile-card {
  min-height: 345px;
  &__extra {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 14px;
    i {
      color: $green;
    }
    p {
      margin: 0;
      text-align: center;
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      color: $text-gray;
    }
  }
}
</style>