<template>
	<div class="Listen">
		<header>我听</header>
		<div class="login" :style="showStyle">
			<b>登录可同步云端已购、收藏、历史等记录</b>
			<router-link to="/RegisterPage"><p>登录</p></router-link>
		</div>
		<ul class="list">
			<li>
				<div>
					<i class="iconfont icon-iconfontxiazai"><span>我的下载</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<div></div>
			</li>
			<li>
				<div>
					<i class="iconfont icon-xin"><span>我的收藏</span></i>
					<span>{{collectList.length}}<i class="el-icon-arrow-right"></i></span>
				</div>	
				<div class="collect">
					<ul>
						<li v-for="(item,index) in collectList" :key="index">
							<div><img :src="item.url" alt=""></div>
							<div>{{item.name}}</div>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<div>
					<i class="iconfont icon-History"><span>我的历史</span></i>
					<span>{{historyList.length}}<i class="el-icon-arrow-right"></i></span>
				</div>
				<div class="collect">
					<ul>
						<li v-for="(item,index) in historyList" :key="index">
							<div><img :src="item.url" alt=""></div>
							<div>{{item.name}}</div>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<div>
					<i class="iconfont icon-shopping-car"><span>我的已购</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<div></div>
			</li>
			<li>
				<div>
					<i class="iconfont icon-mine-red"><span>关注的主播</span></i>
					<span><i class="el-icon-arrow-right"></i></span>
				</div>
				<div></div>
			</li>
		</ul>
	</div>
</template>

<script>

import axios from 'axios';
import {getCookie} from '../assets/js/fun.js';
import {removeCookie} from '../assets/js/fun.js';

export default {
	name: 'Listen',
	data() {
		return {
			collectList:[],
			historyList:[],
			showStyle:"padding-top: .6rem;"
		}
	},
	created(){
		this.showLogin();
	},
	methods:{
		showLogin(){
			let tel = getCookie("tel");
			let name = getCookie("name");
			if(tel != null || name != null){
				this.showStyle = true;
				axios.get('/collect/selectAll?sid='+'1')
				.then(res=>{
					console.log(res.data);
					this.collectList = res.data;
				})
				.catch(err=>{
					console.log(err);
				});
				axios.get('/collect/selectAll?sid='+'2')
				.then(res=>{
					this.historyList = res.data;
				})
				.catch(err=>{
					console.log(err);
				})
			}else{
				if(removeCookie("tel") || removeCookie("name")){
					this.showStyle = false;
				}
			}
		}
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
.list>li div:nth-of-type(1){
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	-webkit-align-items: center;
	height: .7rem;
}
.list>li div:nth-of-type(1) i span{
	font-size: .16rem;
}
.iconfont:before{
	margin-right: 10px;
	color: #ff797c;
	font-size: .2rem;
	font-weight: 600;
}
.collect{
	width: 100%;
}
.collect ul{
	display: -webkit-flex;
	overflow-x: auto;  
}
.collect li{
	width: 44%;
	height: .6rem;
	line-height: .6rem;
	margin-left: 5%;
	flex-shrink: 0;
}
.collect ul li div:nth-of-type(1){
	width: 42%;
	height:100%;
	float: left;
}
.collect ul li div:nth-of-type(2){
	width: 58%;
	height:100%;
	background: #eee;
	border-radius: 4px;
	float: left;
	text-indent: 8px;
	color: #888
}
.collect ul li img{
	width: 100%;
	height: 100%;
	border-radius: 4px;
}
</style>