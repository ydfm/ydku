<!--
 * @Author: your name
 * @Date: 2019-11-15 19:57:11
 * @LastEditTime: 2019-11-15 19:59:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\ydku\src\pages\ListenPage.vue
 -->
<template>
	<div class="ListenPage">
		<Listen></Listen>
		<Myfooter class="footer"></Myfooter>
	</div>
</template>

<script>
import Listen from "../components/Listen";
import Myfooter from "../components/Myfooter";
export default {
	name: 'ListenPage',
	data() {
		return {}
	},
	components:{
		Listen,Myfooter
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