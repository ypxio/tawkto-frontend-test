<template>
  <div class="horizontal-card">
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

<style lang="scss" scoped>
@import '../scss/variables.scss';
.horizontal-card {
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
  }
  &__content {
    flex-grow: 1;
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
</style>