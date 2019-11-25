<template>
	<div class="Login">
		<el-tabs type="card" class="form">
			<el-tab-pane label="手机登录" @click="clickTel">
				<div class="tdDiv">
					<p>手&nbsp;机&nbsp;号：<input type="text" v-model="tel"></p>
				</div>
				<div class="tdDiv">
					<p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="pass1" ></p>
				</div>
				<p class="GoLogin"><input type="button" value="登录" @click="goLogin1"><span v-html="msg1"></span></p>
			</el-tab-pane>
			<el-tab-pane label="用户名登录" @click="clickName">
				<div class="tdDiv">
					<p>用&nbsp;户&nbsp;名：<input type="text" v-model="name"></p>
				</div>
				<div class="tdDiv">
					<p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="pass2"></p>
				</div>
				<p class="GoLogin"><input type="button" value="登录" @click="goLogin2"><span v-html="msg2"></span></p>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>

import {addCookie} from '../assets/js/fun.js';
import axios from 'axios';

export default {
	name: 'Login',
	data() {
		return {
			activeName: 'first',
			addable:true,
			tel:'',
			name:'',
			pass1:'',
			pass2:'',
			msg1:'',
			msg2:''
		}
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
	  },
	  clickTel(){
		  this.goLogin1();
	  },
	  clickName(){
		  this.goLogin2();
	  },
	  goLogin1(){
		  if(this.tel == "" || this.pass1 == ""){
			  this.msg1 = "手机号或密码不能为空！"
		  }else{
			  	// axios.post('user/regist',{
				// 	"n_t":this.tel,
				// 	"pass":this.pass1
				// })
			  axios.post('user/login?n_t='+this.tel + '&pass='+this.pass1)
			  	.then(res=>{
				  if(res.data == 1){
					  console.log(res.data);
					  addCookie("tel",this.tel,7);
					  this.$router.push('/Person');
				  }else{
					  this.msg1 = "手机号或密码不对！"
				  }
			  })
			  .catch(err=>{
				  console.log(err);
			  })
		  }
	  },
	  goLogin2(){
		  if(this.name == "" || this.pass2 == ""){
			  this.msg2 = "用户名或密码不能为空！"
		  }else{
			  	// axios.post('user/regist',{
				// 	"n_t":this.name,
				// 	"pass":this.pass2
				// })
			  axios.post('user/login?n_t='+this.name + '&pass='+this.pass2)
			  .then(res=>{
				  if(res.data == 1){
					  console.log(res.data);
					  addCookie("name",this.name,7);
					  this.$router.push('/Person');
				  }else{
					  this.msg2 = "用户名或密码不对！"
				  }
			  })
			  .catch(err=>{
				  console.log(err);
			  })
		  }
	  }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Login{
	width: 100%;
}
.form{
	width: 90%;
	/* padding-top: .5rem; */
	margin: 0 auto;
	margin-top: .5rem;
}
.tdDiv{
	height: .7rem;
	/* overflow: hidden; */
}
span{
	display: block;
	line-height: .3rem;
	color: red;
}
.tdDiv p{
	line-height: .4rem;
	border: 1px solid #eee;
	border-radius: .08rem;
	box-sizing: border-box;
	text-indent: 10px;
}
input{
	border: 0;
	border-left: 1px solid #eee;
	outline: 0;
	text-indent: 10px;
}
.tdDiv:nth-of-type(2){
	position: relative;
}
b{
	display: block;
	width: 1.2rem;
	height: .4rem;
	border-radius: .2rem;
	border: 1px solid #eee;
	box-sizing: border-box;
	font-weight: 100;
	position: absolute;
	top: 0;
	right: 0;
}
.GoLogin{
	text-align: center;
}
.GoLogin input{
	width: 2.65rem;
	height: .5rem;
	background: linear-gradient(to right,#ff8787 30%,#fe5858 70%);
	border-radius: .25rem;
	letter-spacing: 2px;
}
</style>