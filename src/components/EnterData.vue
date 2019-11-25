<template>
	<div class="Enter">
		<div class="img">
			<img src="../assets/img/headImg.jpg" alt="">
		</div>
		<div class="middle">
			<div id="loginBox" v-show="loginStyle">
				<router-link to="/RegisterPage"><h2>立即登录</h2></router-link>
				<h5>登录后同步你的收藏</h5>
			</div>
			<div id="welcomBox" v-show="welcomStyle">
				欢迎您：<span v-html="nt"></span>&nbsp;&nbsp;！
				<input @click="btnLogout" type="button" value="退出">
			</div>
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

import {getCookie} from '../assets/js/fun.js';
import {removeCookie} from '../assets/js/fun.js';

export default {
	name: 'EnterData',
	data () {
		return {
			loginStyle:false,
			welcomStyle:false,
			nt:""
		}
	},
	created(){
		this.showuser();
	},
	methods:{
		showuser(){
			let tel = getCookie("tel");
			let name = getCookie("name");

			console.log(tel);
			console.log(name);

			if(tel != null){
				this.nt = tel;
				this.loginStyle = false;
				this.welcomStyle = true;
			}else if(name != null){
				this.nt = name;
				this.loginStyle = false;
				this.welcomStyle = true;
			}
			else{
				this.loginStyle = true;
				this.welcomStyle = false;
			}
		},
		btnLogout(){
			removeCookie("tel");
			removeCookie("name");
			this.showuser();
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
	text-align: center;
}
#loginBox h2{
	font-size: 16px;
	color: black;
	font-weight: 100;
}
#loginBox h5{
	font-size: 12px;
	color: #aaaaaa;
	font-weight: 100;
}
#welcomBox input{
	margin-top: 10px;
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
.gift span{
	font-size: 10px;
	color: #ffcbcb;
	display: block;
}
</style>
