<template>
	<div class="ListenPage">
		<Listen></Listen>
		<YdFooter></YdFooter>
	</div>
</template>

<script>
import Listen from "../components/Listen";
import YdFooter from "../components/YdFooter";
export default {
	name: 'ListenPage',
	data() {
		return {}
	},
	components:{
		Listen,YdFooter
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>