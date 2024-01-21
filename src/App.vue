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
	@import 'scss/_variables.scss';
	@import 'scss/_mixins.scss';
	@import 'scss/main.scss';
	html, body {
		font-family: $font-family;
	}
	#container {
		background: #fafafa;
		min-height: 100vh;
	}
	#router-view {
		display: flex;
		width: 100%;
		@include breakpoint(lg) {
			width: 985px;
		}
		padding: 0 20px;
		margin: 0 auto;
		// overflow: auto;
		height: 100%;
		>div {
			display: flex;
			width: 100%;
			flex-direction: column;
		}
	}
</style>