<template>
	<div class="GoBackListen">
		<i class="el-icon-arrow-left" @click="goBack"></i>
		<p>我的收藏</p>
	</div>
</template>

<script>
export default {
	name: 'GoBackListen',
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
	background: white;
	display: -webkit-flex;
	-webkit-align-items: center;
	position: fixed;
    border-bottom: 1px solid grey;
}
i{
	font-size: .3rem;
}
p{
	font-size: .2rem;
    margin-left: 20px;
}
</style>