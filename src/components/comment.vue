<!--
 * @Author: your name
 * @Date: 2019-11-11 17:19:54
 * @LastEditTime: 2019-11-15 21:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\comment.vue
 -->
<template>
    <div class="box">
        <div class="commentHead">
            <p class="left">用户评论({{this.num}})</p>
            <mt-button @click.native="handleClick">
                <p class="right" ><i class="el-icon-edit"></i>我要写评论</p>
            </mt-button>
        </div>
        <div class="commentContent">
            <ul>
                <li  v-for="(comment,index) in this.comments" :key="index">
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
                            <div class="function">
                                <i class="iconfont icon-pinglun" id="pinglun"></i>  
                                <i class="iconfont icon-thumbup"></i>  
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
        <mt-popup id="wirteBox"
        v-model="popupVisible"
        position="bottom">
            <div class="wirteBox">
                <div class="topbox">
                    <p id="title">写评论</p>
                    <input class="btn" type="button" value="发表" v-on:click="sayBtn">
                </div>
                <input type="text" class="inputbtn" placeholder="说点什么吧" v-model="context">
            </div>
        </mt-popup>
    </div>
    
</template>
<script>
import { Popup } from 'mint-ui';
import axios from 'axios';
export default {
    props:['id'],
    data() {
        return {
            popupVisible:false,
            // aid:"",
            context:"",
            comments:[],
            num:""
        }
    },
    created(){
            axios.get('discuss/selectall?aid='+this.id)
            console.log(this.id)   
            .then(res=>{
                console.log(res.data)
                this.comments=res.data.discuss
                this.num=res.data.rows
            })
            .catch(err=>{
                console.log("错误"+err);
            }); 
    },
    methods:{
        handleClick:function(){
            // debugger
            this.popupVisible = true
        },
        sayBtn(){
            console.log(this.id)
            console.log(this.context)
            axios.get('discuss/add?text='+this.context+'&aid='+this.id) 
            .then(res=>{
                if(res.data=="1"){
                    axios.get('discuss/selectall?aid='+this.id) 
                    .then(res=>{
                        console.log(res.data)
                        this.comments=res.data.discuss
                        this.num=res.data.rows
                    })
                    .catch(err=>{
                        console.log("错误"+err);
                    }); 
                }
                console.log(res.data)
            })
            .catch(err=>{
            console.log("错误"+err);
            }); 
        }

    },
}
</script>
<style scoped>
    .box{
        width:100%;        
    } 
    /* commentHead */
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
    /* commentContent */
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
        justify-content: space-between;
    }
    .funciton{
        display: flex;
        justify-content: space-between;
    }
    #pinglun{
       margin-right: 0.25rem; 
    }


    /* coomentfooter */
    #wirteBox{
        width: 100%;
        height: 1.5rem;
    }

    /* 弹出框 */
    .wirteBox{   
        width: 100%;
        height:1.34rem;;
        font-size: 0.16rem;
        color: black;
        background:#f7f7f7;
        }
    #title{
        float: left;
        margin-left: 1.26rem;
        margin-top: 0.17rem;
    }
    .topbox .btn{
        font-size: 0.16rem;
        width: 0.6rem;
        height: 0.3rem;
        background: #fd9b9c;
        float: right;
        border-radius:0.16rem;
        color: white;
        margin-top: 0.12rem;       
        margin-right: 11px;
        outline: none;
        border: none;
    }
    .inputbtn{
        width: 100%;
        height: 1.5rem;
        font-size: 14px;
        border: 1px solid #dedede;
        border-radius: 0.18rem;
        display: flex;
        justify-content: center;
        border-radius: 14px;
        background: #efefef;
    } 

</style>
