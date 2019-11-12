<template>
	<div class="LoginPage">
		<LoginHead></LoginHead>
		<Login></Login>
	</div>
</template>

<script>
import LoginHead from '../components/LoginHead';
import Login from '../components/Login';
export default {
	name: 'LoginPage',
	data() {
		return {}
	},
	components:{
		LoginHead,Login
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>