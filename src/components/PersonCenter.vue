<template>
	<div class="center">
		<div class="ban">
			<EnterData></EnterData>
			<ul class="ulNav">
				<li v-for="item in nav">
					<i class="iconfont" :class="item.iconCls"><span>{{item.name}}</span></i>
				</li>
			</ul>
			<div class="banner">
				<img src="../assets/img/Person_banner.jpg" alt="">
			</div>
		</div>	
		<ul class="list">
			<li>
				<span>积分商城</span>
				<div>
					<span>登录兑好礼</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</li>
			<li>
				<span>夜间模式</span>
				<div>
					<el-switch
					  v-model="value"
					  active-color="#13ce66"
					  inactive-color="#e8e8e8">
					</el-switch>
				</div>
			</li>
			<li>
				<span>定时关闭</span>
				<div><i class="el-icon-arrow-right"></i></div>
			</li>
			<li>
				<span>青少年模式</span>
				<div><i class="el-icon-arrow-right"></i></div>
			</li>
			<li>
				<span>预约</span>
				<div><i class="el-icon-arrow-right"></i></div>
			</li>
			<li>
				<span>任务中心</span>
				<div>
					<span>做任务领现金</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</li>
			<li>
				<span>免流量服务</span>
				<div>
					<span>播放下载流量全免</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</li>
			<li class="border_li">
				<span>我要当主播</span>
				<div>
					<span>申请成为主播</span>
					<i class="el-icon-arrow-right"></i>
				</div>
			</li>
			<li>
				<span>帮助与反馈</span>
				<div><i class="el-icon-arrow-right"></i></div>
			</li>
			<li>
				<span>设置</span>
				<div><i class="el-icon-arrow-right"></i></div>
			</li>
		</ul>
		<div class="area">
			<el-divider>发现</el-divider>
			<ul>
				<li><i class="iconfont icon-qianbaoguanlicopy"><span>互联网专区</span></i></li>
				<li><i class="iconfont icon-yunyingshangsanyaosu"><span>运营商专区</span></i></li>
				<li><i class="iconfont icon-hongbao"><span>天天种红包</span></i></li>
			</ul>
		</div>
		<div class="footerLogo">
			<img src="../assets/img/footer_logo.jpg" alt="">
		</div>
	</div>
</template>

<script>

import EnterData from './EnterData';

export default {
	name: 'PersonCenter',
	data () {
		return {
			nav:[
				{
					iconCls:"icon-qianbi",
					name:"蜻蜓币"
				},
				{
					iconCls:"icon-douzi",
					name:"金豆豆"
				},
				{
					iconCls:"icon-gouwuche",
					name:"已购项目"
				},
				{
					iconCls:"icon-youhuiquan",
					name:"优惠券"
				}
			],
			value: false
		}
	},
	components:{
		EnterData
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center{
	width: 100%;
	padding-top: .5rem;
}
.ban{
	width: 100%;
	background: #fcfafa;
}
.ulNav{
	display: -webkit-flex;
	-webkit-justify-content: space-around;
	text-align: center;
	padding: .15rem 0;
	margin-bottom: .22rem;
}
.ulNav i{
	font-size: .2rem;
}
.ulNav span,.area span{
	display: block;
}
.banner{
	width: 95%;
	height: .88rem;
	margin: 0 auto;
}
img{
	width: 100%;
	height: 100%;
}
.list{
	width: 80%;
	margin: 0 auto;
	margin-top: .15rem;
}
.list li{
	height: .56rem;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	-webkit-align-items: center;
	color: #6d6d6d;
}
.list li div span{
	color: #a6a6a6;
}
.border_li{
	border-bottom: 1px solid #ebebeb;
}
.area{
	width: 90%;
	margin: 0 auto;
}
.area ul{
	display: -webkit-flex;
	text-align: center;
}
.area ul li{
	margin-right: .3rem;
}
.area i{
	font-size: .3rem;
	color: #000000;
}
.area ul span{
	margin-top: 10px;
	color: #b3b3b3;
}
.footerLogo{
	width: 100%;
	padding-top: .45rem;
	padding-bottom: .8rem;
	text-align: center;
}
.footerLogo img{
	width: 2.07rem;
	height: .55rem;
}
</style>
