<template>
	<div id="header-wrapper">
		<div id="header-container">
			<div id="header-text">
				<h1>Knowledge base doesn't have to be boring</h1>
				<h3>Everything you need to Manage your Messaging</h3>
			</div>
			<input-search />
		</div>
	</div>
</template>

<script>
import InputSearch from './InputSearch.vue';
export default {
	components: { InputSearch }
}
</script>

<style lang="scss" scoped>
	@import '../scss/_variables.scss';
	@import '../scss/_mixins.scss';
	#header {
		&-wrapper {
			display: flex;
			align-items: center;
			background: white;
			justify-content: center;
			padding: 20px;
			@include breakpoint(sm) {
				height: 300px;
			}
		}
		&-container {
			display: flex;
			flex-direction: column;
			gap: 37px;
			width: 100%;
			@include breakpoint(sm) { width: 480px }
			@include breakpoint(md) { width: 540px }
			@include breakpoint(lg) { width: 600px }
			@include breakpoint(xl) { width: 720px }
		}
		&-text {
			text-align: center;
			font-family: $font-family;
			color: $text-black;
			display: flex;
			flex-direction: column;
			gap: 9px;
			h1, h3 {
				font-style: normal;
				margin: 0px;
			}
			h1 {
				font-weight: bold;
				font-size: 34px;
				line-height: 41px;
			}
			h3 {
				font-weight: normal;
				font-size: 20px;
				line-height: 24px;
			}
		}
	}
</style>