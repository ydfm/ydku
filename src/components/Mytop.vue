<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 09:48:29
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="topbox">
        <!-- <span>首页</span> -->
        <!-- <ul>
            <li>首页</li>
            <li>小说</li>
            <li>脱口秀</li>
            <li>音乐</li>
            <li>教育</li>
            <li>历史</li>
            <li>搞笑</li>
            <li>外语</li>
            <li>评书</li>
            <li>文化</li>
        </ul> -->
          
        <div style="display:none" >{{typename}}</div>
         <ul>
            <li v-for="(book,index) in books" :key="index" >
                <router-link  :to='"/BookDetailPage/"+book.id'>
                        <div class="imgBox">
                            <img :src="book.img" alt="">
                        </div>
                        <div class="infoBox">
                            <ul>
                                <li>{{book.name}}</li>
                                <li>作者：{{book.author}}</li>
                                <li>价格：￥{{book.price}}元</li>
                            </ul>
                        </div>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Mytop',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
a {
  color: #42b983;
} */

.topbox{
    width: 100%;
    /* height: .73rem; */
    background: #ffffff;;
}
ul{
    width: 97%;
    height: .73rem;
    margin: 0 auto;
    /* display: flex; */
    display: -webkit-flex;
    align-items: center;
    overflow-x: auto;
    /* flex-wrap: nowrap;  */
    /* position: relative; */
    /* flex-shrink: 1; */
}
li{
    /* padding: 0 .3rem; */
    color: #999999;
    font-size: .2rem;
    margin-left: .33rem;
    /* display: block; */
    flex-shrink: 0;
}
li:first-child{
    margin-left: .2rem;  
    color: #ff323b;
    
}
/* li:nth-child(2){
    margin-left: .83rem;
} */
li:last-child{
    padding-right: .2rem;    
}
</style>
