<template>
	<div class="Register">
		<form>
			<div>
				<p>手&nbsp;机&nbsp;号：<input type="text" v-model="vip" value="userphone"></p>
				<span></span>
			</div>
			<div>
				<p>验&nbsp;证&nbsp;码：<input type="text"><i>2345</i><b>获取验证码</b></p>
				<span></span>
			</div>
			<div>
				<p>用&nbsp;户&nbsp;名：<input type="text" v-model="vip" value="userphone"></p>
				<span></span>
			</div>
			<div>
				<p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="text" v-model="vip" value="userphone"></p>
				<span></span>
			</div>
			<div>
				<p>确认密码：<input type="text"></p>
				<span></span>
			</div>
			<p class="GoRegister"><input type="button" value="立即注册"><span></span></p>
		</form>
		<ul>
			<li><img src="../assets/img/wechat.jpg" alt=""></li>
			<li><img src="../assets/img/weibo.jpg" alt=""></li>
			<li><img src="../assets/img/qq.jpg" alt=""></li>
			<li><img src="../assets/img/deng.jpg" alt=""></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Register',
	data() {
		return {}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Register{
	width: 100%;
	padding-top: .5rem;
}
form{
	width: 90%;
	padding-top: .5rem;
	margin: 0 auto;
}
form div{
	height: .7rem;
	text-indent: 10px;
}
form span{
	display: block;
	line-height: .3rem;
}
form div p{
	line-height: .4rem;
	border: 1px solid #eee;
	border-radius: .08rem;
	box-sizing: border-box;
}
form input{
	border: 0;
	border-left: 1px solid #eee;
	outline: 0;
	text-indent: 10px;
}
form div:nth-of-type(2) p{
	position: relative;
}
form b,form i{
	position: absolute;
	top: 6px;
	display: block;
	width: .8rem;
	height: .3rem;
	line-height: .3rem;
	text-align: center;
	background: #eee;
	font-weight: 100;
	text-indent: 0;
}
form b{
	right: 6px;
}
form i{
	right: 90px;
	letter-spacing: 3px;
	font-weight: 600;
	font-size: 16px;
}
.GoRegister{
	text-align: center;
}
.GoRegister input{
	width: 2.65rem;
	height: .5rem;
	background: linear-gradient(to right,#ff8787 30%,#fe5858 70%);
	border-radius: .25rem;
	letter-spacing: 2px;
}
ul{
	width: 100%;
	display: -webkit-flex;
	-webkit-justify-content: space-around;
	padding: .38rem 0;
}
ul li{
	width: .5rem;
	height: .5rem;
}
img{
	width: 100%;
	height: 100%;
}
</style>