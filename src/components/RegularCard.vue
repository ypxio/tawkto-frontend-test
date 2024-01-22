<template>
  <div
    v-bind:class="[
      'card',
      {
        'hoverable': $props.hoverable
      }
    ]"
    @click="$emit('click')"
  >
    <div class="card__body">
      
      <!-- Icon -->
      <template v-if="$slots.icon">
        <slot name="icon"></slot>
      </template>
      <template v-else>
        <div class="card__body__icon--default">
          <i :class="['fa', 'fa-' + $props.icon, 'fa-3x']" />
        </div>
      </template>

      <!-- Title -->
      <template v-if="$slots.title">
        <slot name="title"></slot>
      </template>
      <template v-else>
        <h1 class="card__body__title--default">
          {{ $props.title }}
        </h1>
      </template>
      
      <!-- Subtitle -->
      <template v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </template>
      <template v-else>
        <h4 class="card__body__subtitle--default">
          {{ $props.subtitle }}
        </h4>
      </template>

    </div>
    <template v-if="$slots.extra">
      <div class="card__extra">
        <slot name="extra"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'icon', 'hoverable'],
}
</script>

<style lang="scss" scoped>
@import '../scss/_mixins.scss';
@import '../scss/_variables.scss';
.card {
  width: 100%;
  height: 100%;
  border: 1px solid #eeeeee;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  @include breakpoint(sm) {
    flex-direction: row;
  }
  @include breakpoint(md) {
    flex-direction: column;
  }
  &.hoverable {
    transition: all 0.5s ease-out;
    &:hover {
      border: 1px solid $green;
      cursor: pointer;
      margin-top: -5px;
    }
  }
  &__body {
    flex: 1;
    display: flex;
    padding: 20px 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__icon--default {
      padding: 20px 0 24px;
      i {
        min-height: 48px;
        color: $green;
      }
    }
    &__title--default, &__subtitle--default {
      margin: 0;
    }
    &__title--default {
      font-size: 23px;
      font-weight: 700;
      line-height: 28px;
      text-align: center;
    }
    &__subtitle--default {
      margin-top: 2px;
      font-weight: 400;
      color: $text-gray;
      font-size: 11px;
      line-height: 22px;
    }
  }
  &__extra {
    border-top: 1px solid #eee;
    @include breakpoint(sm) {
      flex: 1;
      border-left: 1px solid #eee;
      border-top: none;
    }
    @include breakpoint(md) {
      border-left: none;
      border-top: 1px solid #eee;
    }
    padding: 20px 30px;
  }
}
</style>