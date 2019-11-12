<template>
	<div class="Person">
		<PersonHeader class="header"></PersonHeader>
		<PersonCenter class="center"></PersonCenter>
		<YdFooter class="footer"></YdFooter>
	</div>
</template>

<script>
import PersonHeader from '../components/PersonHeader';
import PersonCenter from '../components/PersonCenter';
import YdFooter from '../components/YdFooter';
export default {
	name: 'Person',
	data() {
		return {}
	},
	components: {
		PersonHeader,PersonCenter,YdFooter
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
