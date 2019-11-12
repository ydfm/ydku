<template>
	<div class="LoginHead">
		<i class="el-icon-arrow-left" @click="goBack"></i>
		<p>登录</p>
	</div>
</template>

<script>
export default {
	name: 'LoginHead',
	data() {
		return {}
	},
	methods:{
		goBack:function(){
			this.$router.go(-1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
	width: 100%;
	height: .5rem;
	background: linear-gradient(to right,#ff8787 30%,#fe5858 70%);
	display: -webkit-flex;
	-webkit-align-items: center;
}
i{
	font-size: .3rem;
	padding-left: 5%;
}
p{
	font-size: .2rem;
	margin-left: 35%;
}
</style>