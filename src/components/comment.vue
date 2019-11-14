<!--
 * @Author: your name
 * @Date: 2019-11-11 17:19:54
 * @LastEditTime: 2019-11-14 00:04:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\comment.vue
 -->
<template>
    <div class="box">
        <div class="commentHead">
            <p class="left">用户评论（17）</p>
            <mt-button @click.native="handleClick">
                <p class="right" ><i class="el-icon-edit"></i>我要写评论</p>
            </mt-button>
        </div>
        <div class="commentContent">
            <ul>
                <li  v-for="(comment,index) in comments" :key="index">
                    <div class="logo">
                        <img src="../assets/img/head.jpg" alt="">
                    </div>
                    <div class="contentbox">
                        <div class="top">
                            <p class="name">{{comment.name}}</p>
                            <p><i class="el-icon-more"></i>  </p>
                        </div>
                        <div class="content">
                            <p>{{comment.text}}</p>
                        </div>
                        <div class="bottom">
                            <p>{{comment.time}}</p>
                            <i class="iconfont icon-pinglun" id="pinglun"></i>  
                            <i class="iconfont icon-thumbup"></i>  
                        </div>

                    </div>
                </li>
            </ul>
        </div>
        <mt-popup id="wirteBox"
        v-model="popupVisible"
        position="bottom">
            <publish></publish>
        </mt-popup>
    </div>      
</template>
<script>
import { Popup } from 'mint-ui';
import publish from './publish'
import axios from 'axios';
export default {
    data() {
        return {
            popupVisible:false,
            comments:""
        }
    },
    created(){
        axios.get('/discuss')      
         .then(res=>{
            this.comments=res.data
            console.log(this.comments)
         })
         .catch(err=>{
               console.log("错误"+err);
         }); 
    },
    methods:{
        
        handleClick:function(){
            // debugger
            this.popupVisible = true
        }
    },
    components:{
        publish
    }
}
</script>
<style scoped>
    .box{
        width:100%;        
    } 
    .commentHead{
        width:90%;   
        height: 0.39rem;  
        display: flex;
        margin:0 auto;
        justify-content: space-between; 
        align-items: center;  
    } 
    .left{
        font-size: 0.19rem;
        font-weight: bold;
    }  
    .right{
        font-size: 11px;
        color: #fd7070;
    }  
    .commentContent{
        width:3.4rem;
        margin:0 auto;
        display: flex;
        line-height: 0.29rem;
    }
    .commentContent li{
        width:3.4rem;
        margin-top: 12px;
        border-bottom: 1px solid #e8e5e5;
        display: flex;
    }
    /* .logo,.contentbox{
        float: left;
    } */
    .logo img{
        width: 0.32rem;
        height:0.32rem ;
        margin-right: 0.26rem;
    }
    .top,.content{
        font-size: 14px;
        color: #707070;
    }
    .top{
        width: 2.8rem;
        display: flex;
        justify-content: space-between;
    }
    .bottom{
        width: 2.8rem;
        font-size: 12px;
        color: #b1b1b1;
        display: flex;
    }
    .bottom p{
        margin-right: 1.5rem;
    }
    #pinglun{
       margin-right: 0.25rem; 
    }
    #wirteBox{
        width: 100%;
        height: 1.5rem;
    }
</style>
