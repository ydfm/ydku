<template>
	<div class="Register">
		<form>
			<div>
				<p>手&nbsp;机&nbsp;号：<input type="text" v-model="tel" @blur="telFun" placeholder="11位数字"></p>
				<span v-html="msg1"></span>
			</div>
			<div>
				<p>验&nbsp;证&nbsp;码：
					<input type="text" @blur="testCodeFun" v-model="testCode">
					<i>{{code}}</i><b @click="getCode">换一张</b>
				</p>
				<span v-html="msg2"></span>
			</div>
			<div>
				<p>用&nbsp;户&nbsp;名：<input type="text" v-model="name" @blur="nameFun" placeholder="6-15位字母数字_组成不以数字开头"></p>
				<span v-html="msg3"></span>
			</div>
			<div>
				<p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="pass" @blur="passFun" placeholder="6-12位，数字，字母和_组成"></p>
				<span v-html="msg4"></span>
			</div>
			<div>
				<p>确认密码：<input type="password" @blur="surePassFun" v-model="surePass"></p>
				<span v-html="msg5"></span>
			</div>
			<p class="GoRegister"><input type="button" value="立即注册" @click="goRegist"><span v-html="msg6"></span></p>
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

import {checkReg} from '../assets/js/fun.js';
import {testCode} from '../assets/js/fun.js';
import {checkpass} from '../assets/js/fun.js';

import axios from 'axios';

export default {
	name: 'Register',
	data() {
		return {
			tel:"",
			testCode:"",
			name:"",
			pass:"",
			surePass:"",
			msg1:"",
			msg2:"",
			msg3:"",
			msg4:"",
			msg5:"",
			code:"",
			msg6:""
		}
	},
	created(){ 
		//页面加载完成显示验证码
		this.code = testCode();
	},
	methods:{
		//手机号输入框失去焦点
		telFun(){
			if(this.tel == ""){
				this.msg1 = "请输入手机号";
			}else if(!checkReg("tel",this.tel)){
				this.msg1 = "请输入正确的手机号";
			}
		},
		//验证码输入框失去焦点
		testCodeFun(){
			if(this.testCode == ""){
				this.msg2 = "请输入验证码";
			}else if(!checkpass(this.testCode,this.code)){
				this.msg2 = "请保持验证码一致";
			}else{
				return;
			}
		},
		//点击验证码
		getCode(){
			this.code = testCode();
		},
		//用户名输入框失去焦点
		nameFun(){
			if(this.name == ""){
				this.msg3 = "请输入用户名";
			}else if(!checkReg("name",this.name)){
				this.msg3 = "请输入正确的用户名";
			}	
		},
		//密码输入框失去焦点
		passFun(){
			if(this.pass == ""){
				this.msg4 = "请输入密码";
			}else if(!checkReg("pass",this.pass)){
				this.msg4 = "请输入正确的密码";
			}
		},
		//确认密码输入框失去焦点
		surePassFun(){
			if(this.surePass == ""){
				this.msg5 = "请确认密码";
			}else if(!checkpass(this.pass,this.surePass)){
				this.msg5 = "请保持密码与确认密码一致";
			}
		},
		//注册
		goRegist(){
			if(this.tel == ""  || this.testCode == ""  || this.name == ""  || this.pass == ""  || this.surePass == ""){
				this.msg6 = "亲，请将信息输入完整！";
				return false;
			}else{
				// axios.post('user/regist',{
				// 	'tel':this.tel,
				// 	'name':this.name,
				// 	'pass':this.pass
				// })
			  	axios.post('user/regist?tel='+this.tel+'&name='+this.name+'&pass='+this.pass)
				.then(res=>{
					if(res.data == 1){
						this.$router.push('/LoginPage');
					}else if(res.data == 0){
						this.msg6 = "注册失败，请重新注册！";
					}else if(res.data == -1){
						this.msg6 = "用户名或手机号被占用";
					}
				})
				.catch(err=>{
					console.log(err);
				});
			}
		}
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
	width: 90%;
	height: .7rem;
	text-indent: 10px;
}
form span{
	display: block;
	line-height: .3rem;
	font-size: 10px;
	color: red;
}
p span{
	font-size: 14px;
}
form div p{
	line-height: .4rem;
	border: 1px solid #eee;
	border-radius: .08rem;
	box-sizing: border-box;
}
form input{
	width: 2.2rem;
	border: 0;
	border-left: 1px solid #eee;
	outline: 0;
	text-indent: 3px;
}
form div:nth-of-type(2) p{
	position: relative;
}
form b,form i{
	position: absolute;
	top: 6px;
	display: block;
	height: .3rem;
	line-height: .3rem;
	text-align: center;
	font-weight: 100;
	text-indent: 0;
	background: #eee;
}
form b{
	right: 6px;
	width: .6rem;
}
form i{
	right: 70px;
	letter-spacing: 3px;
	font-weight: 600;
	font-size: 16px;
	width: .6rem;
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
	padding-top: .5rem;
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