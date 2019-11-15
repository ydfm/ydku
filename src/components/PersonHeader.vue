<template>
	<div class="header">
		<div class="headerMain">
			<i class="iconfont icon-ling"></i>
			<span>个人中心</span>
			<i class="iconfont icon-saoyisao"></i>
		</div>	
	</div>
</template>

<script>
export default {
	name: 'PersonHeader',
	data () {
		return {
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	width: 100%;
	background: white;
	position: fixed;
	z-index: 1;
}
.headerMain{
	width: 90%;
	height: .5rem;
	margin: 0 auto;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	line-height: .5rem;
}
i{
	font-size: .25rem;
}
</style>
