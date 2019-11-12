<template>
	<div class="Login">
		<el-tabs type="card" class="form">
			<el-tab-pane label="手机登录">
				<div class="tdDiv">
					<p>手&nbsp;机&nbsp;号：<input type="text"></p>
					<span></span>
				</div>
				<div class="tdDiv">
					<p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="text"></p>
					<span></span>
				</div>
				<p class="GoLogin"><input type="button" value="登录"><span></span></p>
			</el-tab-pane>
			<el-tab-pane label="用户名登录">
				<div class="tdDiv">
					<p>用&nbsp;户&nbsp;名：<input type="text"></p>
					<span></span>
				</div>
				<div class="tdDiv">
					<p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="text"></p>
					<span></span>
				</div>
				<p class="GoLogin"><input type="button" value="登录"><span></span></p>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			activeName: 'first',
			addable:true
		}
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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