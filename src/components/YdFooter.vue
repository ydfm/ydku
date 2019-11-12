<template>
	<div class="YdFooter">
		<ul>
			<li>
				<i class="iconfont icon-shouye"><span>首页</span></i>
			</li>
			<li>
				<i class="iconfont icon-huiyuantubiao"><span>超级会员</span></i>
			</li>
			<li>
				<div><span class="el-icon-caret-right"></span></div>
			</li>
			<li>
				<router-link to="/ListenPage"><i class="iconfont icon-bofang"><span>我听</span></i></router-link>
			</li>
			<li>
				<router-link to="/Person"><i class="iconfont icon-gerenzhongxin"><span>个人中心</span></i></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'YdFooter',
	data() {
		return {}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.YdFooter{
	width: 100%;
	height: .5rem;
	border-top: 1px solid #f1f1f1;
	background: white;
	position: fixed;
	bottom: 0;
}
ul{
	display: -webkit-flex;
	-webkit-justify-content: space-around;
	text-align: center;
}
ul li{
	height: .5rem;
	display: -webkit-flex;
	-webkit-align-items: center;
}
ul li div{
	width: .4rem;
	height: .4rem;
	border-radius: 50%;
	background: rgba(0,0,0,.4);
	border: 1px solid #8f8f8f;
}
ul li div span{
	text-align: center;
	line-height: .4rem;
	font-size: .3rem;
	color: white;
}
ul li span{
	display: block;
}
ul li .iconfont{
	color: #5a5a5a;
	font-size: .23rem;
}
ul li .iconfont span{
	color: #8f8f8f;
	font-size: 10px;
}
</style>