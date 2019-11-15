<template>
	<div class="RegisterHead">
		<i class="el-icon-arrow-left" @click="goBack"></i>
		<p>注册帐号</p>
		<router-link to="/LoginPage"><span>登录</span></router-link>
	</div>
</template>

<script>
export default {
	name: 'RegisterHead',
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
	-webkit-justify-content: space-around;
	position: fixed;
}
i{
	font-size: .3rem;
}
p{
	font-size: .2rem;
}
</style>