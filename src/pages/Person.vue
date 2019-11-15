<!--
 * @Author: your name
 * @Date: 2019-11-15 19:35:31
 * @LastEditTime: 2019-11-15 19:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\ydku\src\pages\Person.vue
 -->
<template>
	<div class="Person">
		<PersonHeader class="header"></PersonHeader>
		<PersonCenter class="center"></PersonCenter>
		<Myfooter class="footer"></Myfooter>
	</div>
</template>

<script>
import PersonHeader from '../components/PersonHeader';
import PersonCenter from '../components/PersonCenter';
import Myfooter from '../components/Myfooter';
export default {
	name: 'Person',
	data() {
		return {}
	},
	components: {
		PersonHeader,PersonCenter,Myfooter
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	position: fixed;
	bottom: 0;
}
</style>
