<template>
  <horizontal-card
    :hoverable="true"
    @click="() => $router.push('/article/' + $props.id)"
  >
    <template v-slot:icon>
      <i :class="`fa fa-${$props.icon} fa-lg`" />
    </template>
    <template v-slot:content>
      <div class="card-content">
        <h3>{{ $props.title }}</h3>
        <span>Updated {{ $props.updatedOn | formatDate }}</span>
      </div>
    </template>
  </horizontal-card>
</template>

<script>
import HorizontalCard from '../../../components/HorizontalCard.vue';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export default {
  components: { HorizontalCard },
  props: ['id', 'title', 'updatedOn', 'icon'],
  created() {
    dayjs.extend(localizedFormat)
  },
  filters: {
    formatDate: (date) => {
      return dayjs(date).format('ll');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables.scss';
.card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: normal;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-size: 11px;
    color: $text-gray;
    line-height: 22px;
  }
}
i {
  color: $green;
}
</style>