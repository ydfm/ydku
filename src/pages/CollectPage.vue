<template>
	<div class="CollectPage">
		<GoBackListen></GoBackListen>
		<Collect></Collect>
	</div>
</template>

<script>

import GoBackListen from "../components/GoBackListen";
import Collect from "../components/Collect";

export default {
	name: 'CollectPage',
	data() {
		return {}
	},
	components:{
		GoBackListen,Collect
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>