<!--
 * @Author: your name
 * @Date: 2019-11-11 21:11:10
 * @LastEditTime: 2019-11-15 13:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\commentfooter.vue
 -->
<template>
    <div class="box">
        <div class="inputbox">
            <i class="el-icon-edit"></i>
            <mt-button @click.native="handleClick">
                <input type="text" placeholder="我来说两句">
            </mt-button>          
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
        <div class="function">
            <div>
                <i class="iconfont icon-pinglun"></i>
                <p>评论</p>
            </div>
             <div>
                <i class="iconfont icon-shoucang"></i>
                <p>收藏</p>
            </div>           
            <div>
                <i class="iconfont icon-xiazai"></i>
                <p>下载</p>
            </div>             
            
        </div>
    </div>         
</template>
<script>
import { Popup } from 'mint-ui';
// import publish from './publish'
export default {
    data() {
        return {
            popupVisible:false,
            context:""
        }
   },
    methods:{
        
        handleClick:function(){
            this.popupVisible = true
        },
        sayBtn(){
            console.log(this.aid)
            console.log(this.context)
            axios.get('collect/add?text='+this.context+'&aid='+this.aid) 
            .then(res=>{
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
    width: 100%;
    height: 0.46rem;
    display: flex;
    align-items: center;
    background:  #efefef;
}   
.inputbox{
    width: 2.2rem;
    height: 0.32rem;
    font-size: 14px;
    border: 1px solid #dedede;
    border-radius: 0.18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    background: #efefef;
}   
input{
    width: 1.8rem;
    height: 0.28rem;
    border:none;
    outline: none;
    background: #efefef;
} 
.el-icon-edit{
    color: #fd5050;
}  
.function{
    font-size: 9px;
    width: 1.38rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #a1a1a1;
}
#wirteBox{
    width: 100%;
    height: 1.2rem;
}

    .box{
        width: 3.75rem;
    }
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

    .inputbox{
        width: 96%;
        background: white;
        height: 0.79rem;
        outline: none;
        border: none;
        font-size:0.16rem;
        margin-top: 6px;
        margin-left: 2%;
    } 
</style>
