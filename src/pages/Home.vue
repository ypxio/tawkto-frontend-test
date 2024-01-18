<script setup>

import { ref, computed } from 'vue'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard.vue';

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
  <div id="grid">
    <div v-for="category in filteredCategories">
      <CategoryCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
	#grid {
    margin: 60px 0;
		display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    &>div {
      min-height: 220px;
    }
	}
</style>