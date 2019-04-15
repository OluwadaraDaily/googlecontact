<template>
	<div>
		<button @click="show=!show">Test</button>
		<transition>
			<p>Yo! What's good?</p>
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
	
</style>