<template>
	<div class="RegisterPage">
		<RegisterHead></RegisterHead>
		<Register></Register>
	</div>
</template>

<script>
import RegisterHead from '../components/RegisterHead';
import Register from '../components/Register';
export default {
	name: 'RegisterPage',
	data() {
		return {}
	},
	components:{
		RegisterHead,Register
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>