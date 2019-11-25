<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-11 10:30:12
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="hotbox"> 
        <div class="top">
            <router-link to="/News">
                {{type}} <span>></span> 
            </router-link>
        </div>   
        <div class="bottom">
            <ul>
                <li v-for="(news,index) in allnews" :key="index">
                    <div class="imgbox">
                        <img :src="news.pic" alt="">
                        <div class="amount">
                            <i class="el-icon-caret-right"></i>
                            <span>{{news.pageviews}}次</span>
                        </div>
                    </div>
                    <span class="name">{{news.name}}</span>
                    <span class="intro">{{news.brief}}</span>
                </li>
            </ul>
        </div> 
    </div> 
</template>

<script>
import Axios from 'axios';


export default {
  name: 'Hot',
  data () {
    return {
        type:"最新",
        allnews:[],
    }
  },
  created() {
        // axios.get('/list')
        Axios.get('/menu/selnew')    //menu/index
        .then((response)=>{
        // console.log(response.data);
        this.allnews=response.data;  
    })
    .catch(function (error) {
        console.log(error);
        });
    },
}
</script>
<style scoped>
    .hotbox{
        width: 100%;
        background: #ffffff;
    }
    .top{
        width: 95%;
        height: .75rem;
        line-height: .75rem;
        font-size: .24rem;
        color: #fe706c;
        margin: 0 auto;
    }
    .bottom{
        width: 100%;
    }
    .top span{
        font-size: .28rem;
        color: #999999;
    }
    ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    li{
        width: 1rem;
        height: 1.1rem;
        /* background: blue; */
        margin-bottom: .7rem;
    }
    li:nth-child(3n){
     margin-right: 0;
    }
    .imgbox{
        width: 1rem;
        height: 1rem;
        position: relative;
    }
    .amount{
        position: absolute;
        left: 0;
        bottom: 0;
        color: #ffffff
    }
    img{
        width: 100%;
        height: 100%;
    }
    .name{
        display: block;
        font-size: .18rem;
        color: #525151;
        margin-top: .05rem;
        width: .9rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .intro{
        height: .39rem;
        display: block;
        font-size: .14rem;
        margin-bottom: .05rem;
        overflow: hidden;
    }
    a{
        color: #fe706c;
    }
</style>
