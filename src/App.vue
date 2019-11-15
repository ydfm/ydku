<!--
 * @Author: your name
 * @Date: 2019-11-09 11:40:55
 * @LastEditTime: 2019-11-15 20:38:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	font-size: 14px;
	/* color:#333; */
}
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
	margin:0;
	padding:0;
}
ul,ol,li{
	list-style: none;
}
a{
	text-decoration:none;
}
img{
	border:none;
	display: block;
}
body{
	font-family: "微软雅黑";
    background: #f5f5f9;
}
html{
	font-size: 26.67vw;
}
</style>
