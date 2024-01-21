<template>
  <div id="breadcrumb">
    <ul>
      <li v-for="item in renderedItems">
        <template v-if="item.onClick">
          <a href="#" @click="item.onClick">
            {{ item.label }}
          </a>
        </template>
        <template v-else>
          <template v-if="item.separator">
            <i class="fa fa-chevron-right fa-xs" />
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    renderedItems() {
      // add chevron right icon as separator between items[]
      return this.$props.items.reduce((prev, cur, index, items) => {
        prev.push(cur)
        if (index + 1 < items.length) {
          prev.push({ separator: true }) 
        }
        return prev
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
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
</style>