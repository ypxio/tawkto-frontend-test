<template>
	<div id="container">
		<tawk-header></tawk-header>
		<div id="router-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components:{
		'tawk-header': Header
	}
}
</script>

<style lang="scss">
	@import 'scss/main.scss';
	#container {
		background: #fafafa;
		min-height: 100vh;
	}
	#router-view {
		width: 960px;
		margin: 0 auto;
		background: red;
		overflow: auto;
	}
</style>