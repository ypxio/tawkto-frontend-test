<template>
  <horizontal-card>
    <template v-slot:icon>
      <i :class="`fa fa-${$props.icon} fa-lg`" />
    </template>
    <template v-slot:content>
      <h3>{{ $props.title }}</h3>
      <span>Updated {{ $props.updatedOn | formatDate }}</span>
    </template>
  </horizontal-card>
</template>

<script>
import HorizontalCard from '../../../components/HorizontalCard.vue';
import dayjs from 'dayjs';

export default {
  components: { HorizontalCard },
  props: ['title', 'updatedOn', 'icon'],
  filters: {
    formatDate: (date) => {
      return dayjs(date).format('ll');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables.scss';
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
i {
  color: $green;
}
</style>