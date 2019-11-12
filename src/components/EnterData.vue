<template>
	<div class="Enter">
		<div class="img">
			<img src="../assets/img/headImg.jpg" alt="">
		</div>
		<div class="middle">
			<router-link to="/RegisterPage"><h2>立即登录</h2></router-link>
			<h5>登录后同步你的收藏</h5>
		</div>
		<div class="gift">
			<div>
				<i class="iconfont icon-liwu"></i>
			</div>
			<div>
				<h4>签到有礼</h4>
				<span>赚积分</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EnterData',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Enter{
	width: 95%;
	margin-left: 5%;
	padding: .13rem 0;
	padding: .13rem 0;
	display: -webkit-flex;
	-webkit-align-items: center;
}
.img{
	width: .63rem;
	height: .63rem;
}
img{
	width: 100%;
	height: 100%;
}
.middle{
	-webkit-flex: 1;
	padding-left: .11rem;
}
h2{
	font-size: 16px;
	color: black;
	font-weight: 100;
}
h5{
	font-size: 12px;
	color: #aaaaaa;
	font-weight: 100;
}
.gift{
	width: .92rem;
	height: .38rem;
	background: #fd5353;
	border-top-left-radius: .2rem;
	border-bottom-left-radius: .2rem;
	display: -webkit-flex;
	-webkit-align-items: center;
}
.gift div:first-child{
	width: .32rem;
	height: .32rem;
	border: 1px solid #ffd9d9;
	border-radius: 50%;
	margin-left: .05rem;
	margin-right: .03rem;
	text-align: center;
	line-height: .32rem;
}
.gift div:first-child i{
	font-size: .25rem;
	color: #ffd9d9;
}
h4{
	font-size: 10px;
	color: white;
	font-weight: 100;
}
span{
	font-size: 10px;
	color: #ffcbcb;
	display: block;
}
</style>
