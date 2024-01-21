<template>
  <div
    v-bind:class="[
      'horizontal-card',
      {
        'hoverable': $props.hoverable
      }
    ]"
    @click="$emit('click')"
  >
    <div class="horizontal-card__icon">
      <slot name="icon"></slot>
    </div>
    <div class="horizontal-card__content">
      <slot name="content"></slot>
    </div>
    <div class="horizontal-card__extra">
      <i class="fa fa-chevron-right fa-lg" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['hoverable'],
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
.horizontal-card {
  padding: 20px 10px;
  @include breakpoint(sm) {
    padding: 20px;
  }
  border: 1px solid #eeeeee;
  background: white;
  display: flex;
  width: 100%;
  margin-bottom: 18px;
  border-radius: 4px;
  &.hoverable {
    &:hover {
      border: 1px solid $green;
      cursor: pointer;
    }
  }
  &__icon {
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
  }
  &__extra {
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: $green;
    }
  }
}
</style>