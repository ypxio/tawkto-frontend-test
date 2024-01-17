<script setup>

import { ref, computed } from 'vue'
import axios from 'axios'

const data = ref([])

axios
  .get('http://localhost:9000/api/categories')
  .then(response => {
    data.value = response.data
  })

const filteredCategories = computed(() => {
  return data.value.filter(d => d.enabled)
})

</script>

<template>
  <div>
    <h1>home categories view</h1>
    <pre>
      {{ JSON.stringify(filteredCategories, null, 2) }}
    </pre>
    <router-link to="/category/a">category A</router-link>
    <router-link to="/category/b">category B</router-link>
  </div>
</template>