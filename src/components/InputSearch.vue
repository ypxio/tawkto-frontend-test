<template>
  <div id="input-search">
    <input
      type="text"
      placeholder="Search for answers"
    />
    <button>
      <i class="fa fa-search fa-lg" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
#input-search {
  width: 100%;
  display: flex;
  height: 60px;
  input {
    flex-grow: 1;
    border: 1px solid #eeeeee;
    border-right: none;
    padding-left: 22px;
    border-radius: 4px 0 0 4px;
    &::placeholder,
    &::-ms-input-placeholder {
      color: $text-gray;
      opacity: 1;
    }
    &:hover, &:focus {
      outline: none;
    }
    &:focus {
      border: 1px solid $green;
      border-right: none;
    }
  }
  button {
    background: $green;
    min-width: 80px;
    border: none;
    border-radius: 0 4px 4px 0;
    i {
      color: white;
    }
    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
}
</style>