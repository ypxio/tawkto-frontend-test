<template>
  <div>
    <h1>category detail view & list articles</h1>
    <div>{{ $route.params.id }}</div>
    <a href="#" @click="$router.back()">all categories</a>
  </div>
</template>

<script>

export default {
  async created() {
    console.log(this.$route)
  }
}

</script>