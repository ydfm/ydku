<!--
 * @Author: your name
 * @Date: 2019-11-11 20:46:59
 * @LastEditTime: 2019-11-12 00:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\workspace\yindongfm\src\components\publish.vue
 -->
<template>
    <div class="box">
        <!-- <mt-popup id="wirteBox"
        v-model="popupVisible"
        position="bottom"> -->
            <div class="wirteBox">
                <div class="topbox">
                    <p id="title">写评论</p>
                    <input class="btn" type="button" value="发表">
                </div>
                <input type="text" class="inputbox" placeholder="说点什么吧">
            </div>
        <!-- </mt-popup> -->
    </div>        
</template>

<script>
import { Popup } from 'mint-ui';
export default {
    data() {
        return {
            // popupVisible:false
        }
    },

}
</script>
<style scoped>
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
