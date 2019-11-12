<template>
	<div class="Listen">
		<header>我听</header>
		<div class="login">
			<b>登录可同步云端已购、收藏、历史等记录</b>
			<router-link to="/LoginPage"><p>登录</p></router-link>
		</div>
		<ul class="list">
			<li>
				<div>
					<i class="iconfont icon-iconfontxiazai"><span>我的下载</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<p></p>
			</li>
			<li>
				<div>
					<i class="iconfont icon-xin"><span>我的收藏</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<p></p>
			</li>
			<li>
				<div>
					<i class="iconfont icon-History"><span>我的历史</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<p></p>
			</li>
			<li>
				<div>
					<i class="iconfont icon-shopping-car"><span>我的已购</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<p></p>
			</li>
			<li>
				<div>
					<i class="iconfont icon-mine-red"><span>关注的主播</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<p></p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Listen',
	data() {
		return {}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Listen{
	width: 100%;
}
header{
	width: 100%;
	height: .5rem;
	padding-left: 5%;
	font-size: .2rem;
	line-height: .5rem;
	background: white;
	position: fixed;
	z-index: 1;
}
.login{
	width: 90%;
	height: .3rem;
	line-height: .3rem;
	margin: 0 auto;
	padding-top: .5rem;
}
.login b{
	font-weight: 300;
	float: left;
}
.login p{
	width: .7rem;
	height: .3rem;
	text-align: center;
	background: linear-gradient(to right,#ff8787 30%,#fe5858 70%);
	float: right;
	border-radius: .15rem;
}
.list{
	width: 90%;
	margin: 0 auto;
	margin-top: .15rem;
}
.list li div{
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	-webkit-align-items: center;
	height: .7rem;
}
.list li div i span{
	font-size: .16rem;
}
.iconfont:before{
	margin-right: 10px;
	color: #ff797c;
	font-size: .2rem;
	font-weight: 600;
}
</style>