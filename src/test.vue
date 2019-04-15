<template>
	<div>
		<button @click="show=!show">Test</button>
		<transition name="fade">
			<p v-if="show">Yo! What's good?</p>
		</transition>
	</div>

</template>

<script type="text/javascript">
	export default {
		data() {
			return{
				show: false
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
</style>