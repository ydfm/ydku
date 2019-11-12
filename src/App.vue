<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-09 09:45:54
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
    <router-view/>

</template>

<script>
export default {
  // name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
    margin:0;
    padding:0;
  }
  ul,ol,li{
    list-style: none;
  }
  html{
    font-size: 26.67vw;
  }
  body{
	  font-family: "微软雅黑";
    font-size: 14px;
    height: 100%;
  }
  a{
    text-decoration:none;
  }
  img{
    border:none;
    display: block;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: all .7s ease; 
  }
  .component-fade-enter, .component-fade-leave-to {
    transform:translateX(-100%);
  }
</style>
